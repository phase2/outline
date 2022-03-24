import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emit } from '../../../../internal/event';
import { getIconLibrary } from '../../outline-icon/library';
import { requestIcon } from '../../outline-icon/request';

const parser = new DOMParser();

@customElement('outline-map-marker')
export class OutlineMapMarker extends LitElement {
  @property({ type: Number, reflect: true })
  latitude = 0;

  @property({ type: Number, reflect: true })
  longitude = 0;

  @property({ type: String, reflect: true })
  label: string | null = null;

  @property({ type: Number, reflect: true, attribute: 'z-index' })
  zIndex = 0;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String, reflect: true })
  icon: string | null = null;

  /**
   * Color of icon, by default it inherits current text color from wrapper
   * @param iconFillColor
   * @default currentColor
   */
  @property({ type: String, reflect: true })
  iconFillColor = 'currentColor';

  @property({ type: Number, reflect: true })
  iconFillOpacity = 1;

  /**
   * Stroke Color of icon, by default it is transparent
   * @param iconStrokeColor
   * @default transparent
   */
  @property({ type: String, reflect: true })
  iconStrokeColor = 'transparent';

  @property({ type: Number, reflect: true })
  iconStrokeOpacity = 1;

  @property({ type: Number, reflect: true })
  iconStrokeWeight: 1;

  @property({ type: Number, reflect: true })
  iconScale: 1;

  map: google.maps.Map;
  marker: google.maps.Marker;
  info: google.maps.InfoWindow | null;
  contentObserver: MutationObserver;
  openInfoHandler: google.maps.MapsEventListener;
  closeInfoHandler: google.maps.MapsEventListener;

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    switch (name) {
      case 'open': {
        this.openChanged();
        break;
      }
      case 'latitude': {
        this.updatePosition();
        break;
      }
      case 'longitude': {
        this.updatePosition();
        break;
      }
      case 'label': {
        this.marker?.setLabel(newval);
        break;
      }
      case 'z-index': {
        this.marker?.setZIndex(Number(newval));
        break;
      }
    }
  }

  openChanged() {
    if (!this.info) return;

    if (this.open) {
      this.info.open(this.map, this.marker);
      this.dispatchEvent(
        new CustomEvent('google-map-marker-open', { bubbles: true })
      );
    } else {
      this.info.close();
      this.dispatchEvent(
        new CustomEvent('google-map-marker-close', { bubbles: true })
      );
    }
  }

  updatePosition() {
    this.marker?.setPosition(
      new google.maps.LatLng(this.latitude, this.longitude)
    );
  }

  changeMap(newMap: google.maps.Map) {
    this.map = newMap;
    this.mapChanged();
  }

  mapChanged() {
    // Marker will be rebuilt, so disconnect existing one from old map and listeners.
    if (this.marker) {
      this.marker.setMap(null);
      google.maps.event.clearInstanceListeners(this.marker);
    }

    if (this.map && this.map instanceof google.maps.Map) {
      this.mapReady();
    }
  }

  mapReady() {
    this.generateIcon(this.icon).then(icon => {
      this.marker = new google.maps.Marker({
        map: this.map,
        icon: icon,
        position: {
          lat: this.latitude,
          lng: this.longitude,
        },
        label: this.label,
        zIndex: this.zIndex,
      });
      this.contentChanged();
    });
  }

  contentChanged() {
    if (this.contentObserver) this.contentObserver.disconnect();

    this.contentObserver = new MutationObserver(this.contentChanged.bind(this));
    this.contentObserver.observe(this, {
      childList: true,
      subtree: true,
    });

    const content = this.innerHTML.trim();
    if (content) {
      if (!this.info) {
        this.info = new google.maps.InfoWindow();

        this.openInfoHandler = google.maps.event.addListener(
          this.marker,
          'click',
          () => {
            this.open = true;
          }
        );

        this.closeInfoHandler = google.maps.event.addListener(
          this.info,
          'closeclick',
          () => {
            this.open = false;
          }
        );
      }
      this.info.setContent(content);
    } else {
      if (this.info) {
        // Destroy the existing infowindow.  It doesn't make sense to have an empty one.
        google.maps.event.removeListener(this.openInfoHandler);
        google.maps.event.removeListener(this.closeInfoHandler);
        this.info = null;
      }
    }
  }

  /**
   * Google maps accepts an URL for png and svg files.
   * If using an Icon from Outline there's some processing to format for Google Maps.
   */
  private async generateIcon(icon: string | null) {
    // If icon is not null
    if (icon) {
      if (icon.startsWith('--')) {
        let systemIcon = null;
        // Mimicking the logic in OutlinIcon to fetch svgs
        const iconName = icon.split('--').filter(String);
        const library = getIconLibrary(iconName[0]);
        if (iconName[1] && library) {
          const iconUrl = library.resolver(iconName[1]);
          if (iconUrl) {
            try {
              const file = await requestIcon(iconUrl);
              if (file.ok) {
                const doc = parser.parseFromString(file.svg, 'text/html');
                systemIcon = doc.body.querySelector('svg');
              } else {
                emit(this, 'outline-error', {
                  detail: { status: file.status },
                });
              }
            } catch {
              emit(this, 'outline-error', { detail: { status: -1 } });
            }
          }
        }
        // If there is an svg add it.
        if (systemIcon) {
          const path = Array.from(systemIcon.querySelectorAll('path'))
            .map(path => path.getAttribute('d'))
            .join();
          const fillColor = this.computeColor(this.iconFillColor);
          const strokeColor = this.computeColor(this.iconStrokeColor);
          //Set Anchor to bottom center
          const viewBox = systemIcon.getAttribute('viewBox');
          const anchor: number[] = viewBox
            ? viewBox.split(' ').map(x => parseInt(x))
            : [0, 0, 0, 0];

          return {
            path: path,
            strokeColor: strokeColor,
            strokeWeight: this.iconStrokeWeight,
            strokeOpacity: this.iconStrokeOpacity,
            fillColor: fillColor,
            fillOpacity: this.iconFillOpacity,

            rotation: 0,
            scale: this.iconScale,
            anchor: new google.maps.Point(anchor[2] / 2, anchor[3]),
          };
        } else {
          // If no Design Sytem icon found simply return the string.
          return icon;
        }
      } else {
        // If no Design Sytem icon found simply return the string.
        return icon;
      }
    }
    return null;
  }

  private computeColor(color: string) {
    const style = new Option().style;
    // Check if css var was passed then get hex value
    style.color = color.startsWith('--')
      ? getComputedStyle(document.body).getPropertyValue(color)
      : color;

    // Validate color, if not pass along original string to let Google Maps parse
    return style.color !== '' ? style.color : color;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-map-marker': OutlineMapMarker;
  }
}
