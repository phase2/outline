import { LitElement } from 'lit';
import { ScriptLoaderMap } from './script-loader-map';

export abstract class JsonpLibraryElement extends LitElement {
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

  libraryLoadCallback(error: Error, detail: IArguments) {
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
