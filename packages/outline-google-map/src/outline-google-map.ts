import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { GoogleMapsApi } from './utils/google-maps-api';
import './src/utils/google-maps-api';
import { OutlineMapMarker } from './utils/outline-map-marker';
import { OutlineUserMarker } from './utils/outline-user-marker';
import { MapSelector } from './utils/map-selector';
import './src/map-selector';
import componentStyles from './outline-google-map.css.lit';
import { updateUrlSearchParam } from '@phase2/outline-core';

export const gestureTypes = ['auto', 'cooperative', 'greedy', 'none'] as const;
export type GestureType = typeof gestureTypes[number];

export const mapTypes = ['roadmap', 'hybrid', 'satellite', 'terrain'] as const;
export type MapType = typeof mapTypes[number];

@customElement('outline-google-map')
export class OutlineGoogleMap extends LitElement {
  static styles: CSSResultGroup = [componentStyles];
  /**
   * A Maps API key. To obtain an API key, see https://developers.google.com/maps/documentation/javascript/tutorial#api_key.
   */
  @property({ type: String, reflect: false, attribute: 'api-key' })
  apiKey = '';

  @property({ type: String, attribute: 'map-id' })
  mapId = '';

  /**
   * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
   */
  @property({ type: String, attribute: 'map-type' })
  mapType: MapType = 'roadmap';

  /**
   * Version of the Google Maps API to use.
   */
  @property({ type: String })
  version = '3.48';

  /**
   * If set, custom styles can be applied to the map.
   * For style documentation see https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
   */
  @property({ type: Object })
  styles: google.maps.MapTypeStyle[] = [];

  /**
   * A zoom level to set the map to.
   */
  @property({ type: Number, reflect: true })
  zoom: number;

  /**
   * If set, url paramaters are added and updated to reflect the map state. The map will also look for params on init.
   */
  @property({ type: Boolean, attribute: 'active-url-params' })
  activeUrlParams = true;

  /**
   * If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
   */
  @property({ type: Boolean, attribute: 'fit-to-markers' })
  fitToMarkers = false;

  /**
   * Disable the API's default UI buttons entirely.
   */
  @property({ type: Boolean, attribute: 'disable-default-ui' })
  disableDefaultUI = false;

  /**
   * Disable the API's UI buttons individually.
   */
  @property({ type: Boolean, attribute: 'zoom-control' })
  zoomControl = false;
  @property({ type: Boolean, attribute: 'map-type-control' })
  mapTypeControl = false;
  @property({ type: Boolean, attribute: 'scale-control' })
  scaleControl = false;
  @property({ type: Boolean, attribute: 'street-view-control' })
  streetViewControl = false;
  @property({ type: Boolean, attribute: 'rotate-control' })
  rotateControl = false;
  @property({ type: Boolean, attribute: 'full-screen-control' })
  fullScreenControl = false;

  /**
   * Set the default center of the map
   */
  @property({ type: Number, reflect: true, attribute: 'center-latitude' })
  centerLatitude: number;
  @property({ type: Number, reflect: true, attribute: 'center-longitude' })
  centerLongitude: number;

  /**
   * Set the gesture handling for mobile devices
   */
  @property({ type: String, attribute: 'gesture-handling' })
  gestureHandling: GestureType = 'auto';

  @property({ type: String })
  language = '';

  map: google.maps.Map;
  markers: Array<OutlineMapMarker | OutlineUserMarker>;
  markerObserverSet: boolean;

  @query('#map')
  _map: HTMLElement;

  @query('#api')
  _api: GoogleMapsApi;

  @query('#markers')
  _markers: MapSelector;

  initGMap() {
    if (this.map != null) {
      return; // already initialized
    }

    const gMapApiElement = this._api;
    if (gMapApiElement == null || gMapApiElement.libraryLoaded != true) {
      return;
    }
    this.map = new google.maps.Map(this._map, this.getMapOptions());
    if (this.activeUrlParams) {
      google.maps.event.addListener(this.map, 'idle', () => {
        this.updateAttributesFromMap();
      });
    }

    this.updateMarkers();
  }

  getMapOptions(): google.maps.MapOptions {
    if (this.disableDefaultUI == false) {
      this.disableDefaultUI = false;
    }
    const controlOptions =
      this.disableDefaultUI == true
        ? {
            disableDefaultUI: this.disableDefaultUI,
            zoomControl: this.zoomControl,
            mapTypeControl: this.mapTypeControl,
            scaleControl: this.scaleControl,
            streetViewControl: this.streetViewControl,
            rotateControl: this.rotateControl,
            fullscreenControl: this.fullScreenControl,
          }
        : {};

    const center =
      this.centerLatitude && this.centerLongitude
        ? { center: { lat: this.centerLatitude, lng: this.centerLongitude } }
        : {};

    return {
      zoom: this.zoom,
      mapTypeId: this.mapType,
      styles: this.styles,
      mapId: this.mapId,
      ...center,
      ...controlOptions,
    };
  }

  mapApiLoaded() {
    this.initGMap();
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.activeUrlParams) {
      this.updateAttributesFromUrl();
    }
    this.initGMap();
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    if (this.activeUrlParams) {
      switch (name) {
        case 'zoom': {
          updateUrlSearchParam('z', value);
          break;
        }
        case 'center-latitude': {
          updateUrlSearchParam('lat', value);
          break;
        }
        case 'center-longitude': {
          updateUrlSearchParam('lng', value);
          break;
        }
      }
    }
  }

  updateAttributesFromMap() {
    const center = this.map
      .getCenter()
      ?.toUrlValue()
      .split(',') as unknown as number[];
    const zoom = this.map.getZoom();
    if (zoom) {
      this.zoom = zoom;
    }
    if (center) {
      this.centerLatitude = center[0];
      this.centerLongitude = center[1];
    }
  }

  updateAttributesFromUrl() {
    const params = new URLSearchParams(document.location.search);
    const zoom = params.get('z');
    const lat = params.get('lat');
    const lng = params.get('lng');

    // If there is a zoom, lat and lng in the url, override the default properties.
    // Attributes on the component are reflected.
    // Each will trigger attributeChangedCallback if it is different.
    if (zoom && lat && lng) {
      this.fitToMarkers = false;
      this.zoom = Number(zoom);
      this.centerLatitude = Number(lat);
      this.centerLongitude = Number(lng);
    }
  }

  attachChildrenToMap(children: Array<OutlineMapMarker | OutlineUserMarker>) {
    if (this.map) {
      for (const child of children) {
        if (child.latitude && child.longitude) {
          child.changeMap(this.map);
        }
      }
    }
  }

  observeMarkers() {
    if (this.markerObserverSet) return;

    this.addEventListener('selector-items-changed', () => {
      this.updateMarkers();
    });
    this.markerObserverSet = true;
  }

  updateMarkers() {
    this.observeMarkers();

    const markersSelector = this._markers;
    if (!markersSelector) return;

    const newMarkers = markersSelector.items as Array<
      OutlineMapMarker | OutlineUserMarker
    >;

    this.markers = newMarkers;
    this.attachChildrenToMap(this.markers);

    if (this.fitToMarkers) {
      this.fitToMarkersChanged();
    }
  }

  fitToMarkersChanged() {
    if (this.map && this.fitToMarkers && this.markers.length > 0) {
      const latLngBounds = new google.maps.LatLngBounds();
      for (const marker of this.markers) {
        if (marker.latitude && marker.longitude) {
          latLngBounds.extend(
            new google.maps.LatLng(marker.latitude, marker.longitude)
          );
        }
      }

      // For one marker, don't alter zoom, just center it.
      if (this.markers.length > 1) {
        this.map.fitBounds(latLngBounds);
      }
      this.map.setCenter(latLngBounds.getCenter());
    }
  }

  // Placeholder method for the 'map-marker-select' event
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectMarker(_e: Event) {
    const marker = _e.target as OutlineMapMarker | OutlineUserMarker;
    const prevOpened = this._markers.items.find(
      item => item.open && item.uuid !== marker?.uuid
    );
    if (prevOpened) {
      prevOpened.open = false;
    }
  }
  // Placeholder method for the 'map-marker-deselect' event
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deselectMarker(_e: Event) {}
  // Placeholder method for the 'map-marker-updated' event
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updatedMarker(_e: Event) {
    this.updateMarkers();
  }

  render() {
    return html`
      <google-maps-api
        id="api"
        api-key="${this.apiKey}"
        version="${this.version}"
        language="${this.language}"
        map-id="${this.mapId}"
        @api-load=${() => this.mapApiLoaded()}
      >
      </google-maps-api>
      <map-selector
        id="markers"
        selected-attribute="open"
        activate-event="map-marker-select"
        @map-marker-updated=${(e: Event) => this.updatedMarker(e)}
        @map-marker-select=${(e: Event) => this.selectMarker(e)}
        @map-marker-deselect=${(e: Event) => this.deselectMarker(e)}
      >
        <slot id="markers" name="markers"></slot>
      </map-selector>
      <div id="map"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-google-map': OutlineGoogleMap;
  }
}
