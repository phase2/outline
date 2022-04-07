import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { GoogleMapsApi } from './src/google-maps-api';
import './src/google-maps-api';
import { OutlineMapMarker } from './src/outline-map-marker';
import { MapSelector } from './src/map-selector';
import './src/map-selector';
import componentStyles from './outline-google-map.css.lit';

export type MapType = 'roadmap' | 'hybrid' | 'satellite' | 'terrain';
export type GestureType = 'auto' | 'cooperative' | 'greedy' | 'none';

@customElement('outline-google-map')
export class OutlineGoogleMap extends LitElement {
  static styles: CSSResultGroup = [componentStyles];
  /**
   * A Maps API key. To obtain an API key, see https://developers.google.com/maps/documentation/javascript/tutorial#api_key.
   */
  @property({ type: String })
  apiKey = '';

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
  @property({ type: Number })
  zoom = 5;

  /**
   * If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
   */
  @property({ type: Boolean })
  fitToMarkers = false;

  /**
   * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
   */
  @property({ type: String })
  mapType: MapType = 'roadmap';

  /**
   * Disable the API's default UI buttons entirely.
   */
  @property({ type: Boolean })
  disableDefaultUI = false;

  /**
   * Disable the API's UI buttons individually.
   */
  @property({ type: Boolean })
  zoomControl = false;
  @property({ type: Boolean })
  mapTypeControl = false;
  @property({ type: Boolean })
  scaleControl = false;
  @property({ type: Boolean })
  streetViewControl = false;
  @property({ type: Boolean })
  rotateControl = false;
  @property({ type: Boolean })
  fullScreenControl = false;

  /**
   * Set the default center of the map
   */
  @property({ type: Number })
  centerLatitude = -34.397;
  @property({ type: Number })
  centerLongitude = 150.644;

  /**
   * Set the gesture handling for mobile devices
   */
  @property({ type: String })
  gestureHandling: GestureType = 'auto';

  @property({ type: String })
  language = '';

  @property({ type: String })
  mapId = '';

  map: google.maps.Map;

  markers: Array<OutlineMapMarker>;

  marketObserverSet: boolean;

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

    return {
      zoom: this.zoom,
      center: { lat: this.centerLatitude, lng: this.centerLongitude },
      mapTypeId: this.mapType,
      styles: this.styles,
      mapId: this.mapId,
      ...controlOptions,
    };
  }

  mapApiLoaded() {
    this.initGMap();
  }

  connectedCallback() {
    super.connectedCallback();
    this.initGMap();
  }

  attachChildrenToMap(children: Array<OutlineMapMarker>) {
    if (this.map) {
      for (const child of children) {
        child.changeMap(this.map);
      }
    }
  }

  observeMarkers() {
    if (this.marketObserverSet) return;

    this.addEventListener('selector-items-changed', () => {
      this.updateMarkers();
    });
    this.marketObserverSet = true;
  }

  updateMarkers() {
    this.observeMarkers();

    const markersSelector = this._markers;
    if (!markersSelector) return;

    const newMarkers = markersSelector.items as Array<OutlineMapMarker>;

    // do not recompute if markers have not been added or removed
    if (this.markers && newMarkers.length === this.markers.length) {
      const added = newMarkers.filter(m => {
        return this.markers && this.markers.indexOf(m) === -1;
      });
      if (added.length == 0) return;
    }

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
        latLngBounds.extend(
          new google.maps.LatLng(marker.latitude, marker.longitude)
        );
      }

      // For one marker, don't alter zoom, just center it.
      if (this.markers.length > 1) {
        this.map.fitBounds(latLngBounds);
      }
      this.map.setCenter(latLngBounds.getCenter());
    }
  }

  deselectMarker() {}

  render() {
    return html`
      <google-maps-api
        id="api"
        apiKey="${this.apiKey}"
        version="${this.version}"
        language="${this.language}"
        mapId="${this.mapId}"
        @apiLoad=${() => this.mapApiLoaded()}
      >
      </google-maps-api>
      <map-selector
        id="markers"
        selectedAttribute="open"
        activateEvent="google-map-marker-open"
        @mapMarkerClose=${() => this.deselectMarker()}
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
