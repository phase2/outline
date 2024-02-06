import { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * `AdoptedStylesheets` is a class that implements the `ReactiveController` interface from the `lit` library.
 * This class is used to manage CSS stylesheets that are adopted into the document or a shadow root.
 *
 * @property {CSSStyleSheet} adoptedSheet - The CSSStyleSheet object that is adopted into the document or a shadow root.
 * @property {Document | ShadowRoot} root - The root where the stylesheet will be adopted.
 */
export class AdoptedStylesheets implements ReactiveController {
  /**
   * A static map that stores CSSStyleSheet objects by their CSS text.
   * This allows for reuse of CSSStyleSheet objects across multiple instances of the class.
   * @type {Map<string, CSSStyleSheet>}
   */
  private static styleSheetMap = new Map<string, CSSStyleSheet>();

  /**
   * The CSSStyleSheet object that is adopted into the document or a shadow root.
   * @type {CSSStyleSheet}
   */
  private adoptedSheet: CSSStyleSheet;

  /**
   * The root where the stylesheet will be adopted.
   * This can be either the document or a shadow root.
   * @type {Document | ShadowRoot}
   */
  private root: Document | ShadowRoot;

  /**
   * The host that this controller is associated with.
   * @type {ReactiveControllerHost}
   */
  private host: ReactiveControllerHost;

  /**
   * The constructor for the `AdoptedStylesheets` class.
   *
   * @param {ReactiveControllerHost} host - The host that this controller is associated with.
   * @param {string} cssText - A string that contains the CSS styles to be adopted.
   * @param {Document | ShadowRoot} root - The root where the stylesheet will be adopted.
   */
  constructor(
    host: ReactiveControllerHost,
    cssText: string,
    root: Document | ShadowRoot
  ) {
    this.host = host;
    this.host.addController(this);
    this.root = root;

    if (!AdoptedStylesheets.styleSheetMap.has(cssText)) {
      const newSheet = new CSSStyleSheet();
      newSheet.replace(cssText).catch(error => {
        console.error('Failed to replace CSS text:', error);
      });
      AdoptedStylesheets.styleSheetMap.set(cssText, newSheet);
    }
    this.adoptedSheet =
      AdoptedStylesheets.styleSheetMap.get(cssText) || new CSSStyleSheet();
  }

  /**
   * The `hostConnected` method is called when the host element is connected to the DOM.
   * This method adopts the CSSStyleSheet object into the root's adopted stylesheets if it's not already included.
   */
  hostConnected() {
    if (
      this.root &&
      !this.root.adoptedStyleSheets.includes(this.adoptedSheet)
    ) {
      this.root.adoptedStyleSheets = [
        ...this.root.adoptedStyleSheets,
        this.adoptedSheet,
      ];
    }
  }

  /**
   * The `hostDisconnected` method is called when the host element is disconnected from the DOM.
   * This method removes the CSSStyleSheet object from the root's adopted stylesheets if it's included.
   */
  hostDisconnected() {
    if (this.root && this.root.adoptedStyleSheets.includes(this.adoptedSheet)) {
      this.root.adoptedStyleSheets = this.root.adoptedStyleSheets.filter(
        sheet => sheet !== this.adoptedSheet
      );
    }
  }
}
