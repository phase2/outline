import { OutlineMapMarker } from './outline-map-marker';
import { customElement, property } from 'lit/decorators.js';

@customElement('outline-user-marker')
export class OutlineUserMarker extends OutlineMapMarker {
  @property({ type: String, attribute: 'geo-api-key' })
  geoApiKey = '';

  @property({ type: String, attribute: 'maps-url' })
  geoUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?';

  @property({ type: Boolean, reflect: true, attribute: 'center-on-position' })
  centerPosition = false;

  @property({ type: Number, reflect: true, attribute: 'accuracy-level' })
  accuracyLevel = 0;

  @property({ type: String, reflect: true, attribute: 'accuracy-color' })
  accuracyColor = '';

  @property({ type: Number, reflect: true })
  accuracy = 0;

  circle: google.maps.Circle;

  /**
   * Set the user location.
   * @param {Object} onSuccess
   * @param {Object} [onError]
   * @return {number}
   */
  setLocation = () => {
    return navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.accuracy = position.coords.accuracy;
      },
      async err => {
        // eslint-disable-next-line
        console.error(`Error: ${err.code}`, err.message);

        // Set Google maps API as fallback to navigator if the api key is provided.
        if (this.geoApiKey) {
          await this.fetchGoogleLocation(
            this.computeUrl(this.geoUrl, this.geoApiKey)
          ).then(geolocation => {
            if (geolocation.location) {
              this.longitude = geolocation.location.lng;
              this.latitude = geolocation.location.lat;
              this.accuracy = geolocation.accuracy;
            }
          });
        }
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  connectedCallback() {
    super.connectedCallback();
    this.setLocation();
  }

  // Overriding the outline-map-marker method to allow marker position updates
  async updatePosition() {
    this.marker?.setPosition(
      new google.maps.LatLng(this.latitude, this.longitude)
    );

    this.dispatchEvent(
      new CustomEvent('map-marker-updated', { bubbles: true })
    );
  }

  mapReady() {
    const userLatLng = new google.maps.LatLng(this.latitude, this.longitude);

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

    if (this.accuracyLevel && this.accuracy > this.accuracyLevel) {
      const color = this.computeColor(this.accuracyColor);
      this.circle = new google.maps.Circle({
        center: userLatLng,
        radius: this.accuracy,
        map: this.map,
        fillColor: color,
        fillOpacity: 0.15,
        strokeColor: color,
        strokeOpacity: 0.75,
        strokeWeight: 1,
      });
    }

    // Note: the map's fitToMarkers overrides this.
    if (this.centerPosition) {
      this.map.panTo(userLatLng);
    }

    this.contentChanged();
  }

  async fetchGoogleLocation(url: string, payload = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  }

  computeUrl(geoUrl: string, geoApiKey: string): string {
    let url = geoUrl;

    if (geoApiKey) {
      url += 'key=' + geoApiKey;
    } else {
      // Log a warning if the user is not using an API Key or Client ID.
      const warning =
        'No Google Maps API Key specified. ' +
        'See https://developers.google.com/maps/documentation/javascript/get-api-key ' +
        'for instructions to get started with a key or client id.';
      // eslint-disable-next-line
      console.warn(warning);
    }
    return url;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-user-marker': OutlineUserMarker;
  }
}
