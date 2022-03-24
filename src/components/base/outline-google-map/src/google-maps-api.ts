import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ScriptLoaderMap } from './script-loader-map';

abstract class JsonpLibraryElement extends LitElement {
  public libraryLoaded = false;

  public libraryErrorMessage: string | null = null;

  abstract get libraryUrl(): string;

  abstract get notifyEvent(): string;

  get callbackName(): string | null {
    return null;
  }

  private isReady = false;

  libraryUrlChanged() {
    // can't load before ready because notifyEvent might not be set
    if (this.isReady && this.libraryUrl != null) this.loadLibrary();
  }

  libraryLoadCallback(error: Error, detail: object) {
    if (error) {
      // eslint-disable-next-line
      console.warn('Library load failed:', error.message);
      this.libraryErrorMessage = error.message;
    } else {
      this.libraryErrorMessage = null;
      this.libraryLoaded = true;
      if (this.notifyEvent != null) {
        this.dispatchEvent(
          new CustomEvent(this.notifyEvent, { detail: detail, composed: true })
        );
      }
    }
  }

  /** loads the library, and fires this.notifyEvent upon completion */
  loadLibrary() {
    ScriptLoaderMap.getInstance().require(
      this.libraryUrl,
      this.libraryLoadCallback.bind(this),
      this.callbackName
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.isReady = true;
    if (this.libraryUrl != null) this.loadLibrary();
  }
}
// TODO: Resolve ts error: This syntax requires an imported helper but module 'tslib' cannot be found.
// eslint-disable-next-line
// @ts-ignore
@customElement('google-maps-api')
export class GoogleMapsApi extends JsonpLibraryElement {
  @property({ type: String })
  apiKey = '';

  @property({ type: String })
  clientId = '';

  @property({ type: String })
  mapsUrl = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';

  @property({ type: String })
  version = '3.39';

  @property({ type: String })
  language = '';

  @property({ type: String })
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
    return 'apiLoad';
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
