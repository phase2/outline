import { ReactiveController, CSSResult } from 'lit';

/**
 * `AdoptedStyleSheets` is a class that implements the `ReactiveController` interface from the `lit` library.
 * This class is used to manage CSS stylesheets that are adopted into the document or a shadow root.
 *
 * @property {Map<string, CSSStyleSheet>} styleSheetMap - A static map that stores CSS stylesheets. The key is the CSS text and the value is the corresponding CSSStyleSheet object.
 * @property {CSSStyleSheet} adoptedSheet - The CSSStyleSheet object that is adopted into the document or a shadow root.
 * @property {Document | ShadowRoot} root - The root where the stylesheet will be adopted.
 */
export class AdoptedStyleSheets implements ReactiveController {
  private static styleSheetMap = new Map<string, CSSStyleSheet>();
  private adoptedSheet: CSSStyleSheet;
  private root: Document | ShadowRoot;

  /**
   * The constructor for the `AdoptedStyleSheets` class.
   *
   * @param {CSSResult} globalStyles - A `CSSResult` object that contains the CSS styles to be adopted.
   * @param {Document | ShadowRoot} root - The root where the stylesheet will be adopted.
   */
  constructor(globalStyles: CSSResult, root: Document | ShadowRoot) {
    const cssText = globalStyles.cssText;
    if (!AdoptedStyleSheets.styleSheetMap.has(cssText)) {
      const newSheet = new CSSStyleSheet();
      newSheet.replaceSync(cssText);
      AdoptedStyleSheets.styleSheetMap.set(cssText, newSheet);
    }
    this.adoptedSheet =
      AdoptedStyleSheets.styleSheetMap.get(cssText) || new CSSStyleSheet();
    this.root = root;
  }

  /**
   * The `hostConnected` method is called when the host element is connected to the DOM.
   * This method adopts the CSSStyleSheet object into the root's adopted stylesheets if it's not already included.
   */
  hostConnected() {
    if (!this.root.adoptedStyleSheets.includes(this.adoptedSheet)) {
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
    if (this.root.adoptedStyleSheets.includes(this.adoptedSheet)) {
      this.root.adoptedStyleSheets = this.root.adoptedStyleSheets.filter(
        sheet => sheet !== this.adoptedSheet
      );
    }
  }
}
