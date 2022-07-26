import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { requestIcon } from '@phase2/outline-icon';
import { updateUrlSearchParam, emit } from '@phase2/outline-core';

const parser = new DOMParser();
let id = 0;
type IconAnchor =
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom'
  | 'centerTop'
  | 'centerBottom'
  | 'center';

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

  @property({ type: String, reflect: true, attribute: 'icon-anchor' })
  iconAnchor: IconAnchor = 'centerBottom';

  /**
   * Color of icon, by default it inherits current text color from wrapper
   * @param iconFillColor
   * @default currentColor
   */
  @property({ type: String, reflect: true, attribute: 'icon-fill-color' })
  iconFillColor = 'currentColor';

  @property({ type: Number, reflect: true, attribute: 'icon-fill-opacity' })
  iconFillOpacity = 1;

  @property({ type: Number, reflect: true, attribute: 'icon-scale' })
  iconScale: 1;

  /**
   * Stroke Color of icon, by default it is transparent
   * @param iconStrokeColor
   * @default transparent
   */
  @property({ type: String, reflect: true, attribute: 'icon-stroke-color' })
  iconStrokeColor = 'transparent';

  @property({ type: Number, reflect: true, attribute: 'icon-stroke-opacity' })
  iconStrokeOpacity = 1;

  @property({ type: Number, reflect: true, attribute: 'icon-stroke-weight' })
  iconStrokeWeight: 1;

  @property({ type: String, reflect: true })
  uuid = `marker-${++id}`;

  /**
   * If set, url paramaters are added and updated to reflect the map state. The map will also look for params on init.
   */
  @property({ type: Boolean, attribute: 'active-url-params' })
  activeUrlParams = true;

  map: google.maps.Map;
  marker: google.maps.Marker;
  info: google.maps.InfoWindow | null;
  contentObserver: MutationObserver;
  openInfoHandler: google.maps.MapsEventListener;
  closeInfoHandler: google.maps.MapsEventListener;

  connectedCallback() {
    super.connectedCallback();
    const params = new URLSearchParams(document.location.search);
    if (this.activeUrlParams) {
      const infoWindowId = params.get('iw');
      if (infoWindowId == this.uuid) {
        this.open = true;
      }
    }
  }

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
        new CustomEvent('map-marker-select', { bubbles: true })
      );
    } else {
      this.info.close();
      this.dispatchEvent(
        new CustomEvent('map-marker-deselect', { bubbles: true })
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
    this.marker = new google.maps.Marker({
      map: this.map,
      icon: this.generateIcon(this.icon),
      position: {
        lat: this.latitude,
        lng: this.longitude,
      },
      label: this.label,
      zIndex: this.zIndex,
    });
    this.contentChanged();
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
            if (this.activeUrlParams) {
              updateUrlSearchParam('iw', this.uuid);
            }
          }
        );

        this.closeInfoHandler = google.maps.event.addListener(
          this.info,
          'closeclick',
          () => {
            this.open = false;
            if (this.activeUrlParams) {
              updateUrlSearchParam('iw', '');
            }
          }
        );
      }
      this.info.setContent(content);
      if (this.open) {
        this.info.open(this.map, this.marker);
      }
    } else {
      if (this.info) {
        // Destroy the existing infowindow.  It doesn't make sense to have an empty one.
        google.maps.event.removeListener(this.openInfoHandler);
        google.maps.event.removeListener(this.closeInfoHandler);
        this.info = null;
      }
    }
  }

  generateIcon(icon: string | null) {
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
          const viewBoxDimensions: number[] = viewBox
            ? viewBox.split(' ').map(x => parseInt(x))
            : [0, 0, 0, 0];
          const [anchorX, anchorY]: number[] =
            this.setAnchor(viewBoxDimensions);

          return {
            path: path,
            strokeColor: strokeColor,
            strokeWeight: this.iconStrokeWeight,
            strokeOpacity: this.iconStrokeOpacity,
            fillColor: fillColor,
            fillOpacity: this.iconFillOpacity,

            rotation: 0,
            scale: this.iconScale,
            anchor: new google.maps.Point(anchorX, anchorY),
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

  private setAnchor(dimensions: Array<number>) {
    if (dimensions == [0, 0, 0, 0]) {
      return [0, 0];
    }

    switch (this.iconAnchor) {
      case 'leftTop':
        return [dimensions[0], dimensions[1]];
      case 'leftCenter':
        return [
          dimensions[0],
          (dimensions[3] - dimensions[1]) / 2 + dimensions[1],
        ];
      case 'leftBottom':
        return [dimensions[0], dimensions[3]];
      case 'rightTop':
        return [dimensions[2], dimensions[1]];
      case 'rightCenter':
        return [
          dimensions[2],
          (dimensions[3] - dimensions[1]) / 2 + dimensions[1],
        ];
      case 'rightBottom':
        return [dimensions[2], dimensions[3]];
      case 'centerTop':
        return [
          (dimensions[2] - dimensions[0]) / 2 + dimensions[0],
          dimensions[1],
        ];
      case 'centerBottom':
        return [
          (dimensions[2] - dimensions[0]) / 2 + dimensions[0],
          dimensions[3],
        ];
      case 'center':
        return [
          (dimensions[2] - dimensions[0]) / 2 + dimensions[0],
          (dimensions[3] - dimensions[1]) / 2 + dimensions[1],
        ];
    }
  }

  private computeColor(color: string) {
    const style = new Option().style;
    // Check if css var was passed then get hex value
    style.color = color.startsWith('--')
      ? getComputedStyle(document.body).getPropertyValue(color)
      : color;

    // Validate color, if not pass along string
    return style.color !== '' ? style.color : color;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-map-marker': OutlineMapMarker;
  }
}
