import { customElement, property } from 'lit/decorators.js';
import { JsonpLibraryElement } from './jsonp-library';

@customElement('google-maps-api')
export class GoogleMapsApi extends JsonpLibraryElement {
  @property({ type: String, attribute: 'api-key' })
  apiKey = '';

  @property({ type: String, attribute: 'client-id' })
  clientId = '';

  @property({ type: String, attribute: 'maps-url' })
  mapsUrl = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';

  @property({ type: String })
  version = '3.39';

  @property({ type: String })
  language = '';

  @property({ type: String, attribute: 'map-id' })
  mapId = '';

  get libraryUrl(): string {
    return this.computeUrl(
      this.mapsUrl,
      this.version,
      this.apiKey,
      this.clientId,
      this.language,
      this.mapId
    );
  }

  get notifyEvent(): string {
    return 'api-load';
  }

  computeUrl(
    mapsUrl: string,
    version: string,
    apiKey: string,
    clientId: string,
    language: string,
    mapId: string
  ): string {
    let url = mapsUrl + '&v=' + version;

    // Always load all Maps API libraries.
    url += '&libraries=drawing,geometry,places,visualization';

    if (apiKey && !clientId) {
      url += '&key=' + apiKey;
    }

    if (clientId) {
      url += '&client=' + clientId;
    }

    // Log a warning if the user is not using an API Key or Client ID.
    if (!apiKey && !clientId) {
      const warning =
        'No Google Maps API Key or Client ID specified. ' +
        'See https://developers.google.com/maps/documentation/javascript/get-api-key ' +
        'for instructions to get started with a key or client id.';
      // eslint-disable-next-line
      console.warn(warning);
    }

    if (language) {
      url += '&language=' + language;
    }

    if (mapId) {
      url += '&map_ids=' + mapId;
    }

    return url;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'google-maps-api': GoogleMapsApi;
  }
}
