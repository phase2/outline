import { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * A controller for managing adopted stylesheets in a Lit element.
 * This allows for styles to be dynamically applied to the component's
 * light DOM or shadow DOM.
 */
export class AdoptedStyleSheets implements ReactiveController {
  // The host element that the controller is associated with.
  private host: ReactiveControllerHost & HTMLElement;
  // An object containing the CSS to be applied globally or encapsulated within the shadow DOM.
  private css: { globalCSS?: string; encapsulatedCSS?: string };

  // A set to track the stylesheets applied to the light DOM.
  private static appliedLightDomStylesheets: Set<string> = new Set();

  /**
   * Constructs an instance of the AdoptedStyleSheets controller.
   * @param host The host element that the controller will be associated with.
   * @param css An object containing optional global and encapsulated CSS strings.
   */
  constructor(
    host: ReactiveControllerHost & HTMLElement,
    css: {
      globalCSS?: string;
      encapsulatedCSS?: string;
    } = {}
  ) {
    this.host = host;
    this.css = css;
    this.host.addController(this); // Register this instance as a controller for the host element.
  }

  /**
   * Applies the given CSS text to the specified target (Document or ShadowRoot).
   * @param cssText The CSS text to apply.
   * @param target The target where the CSS should be applied.
   */
  private applyCssToDom(cssText: string, target: Document | ShadowRoot) {
    if (target instanceof Document) {
      const store = AdoptedStyleSheets.appliedLightDomStylesheets;

      if (store.has(cssText)) {
        // If the stylesheet has already been applied, no further action is required.
        return;
      }
      store.add(cssText); // Store the stylesheet with the provided key.
    }

    // Create a new stylesheet and replace its contents with the provided CSS text.
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);

    // Apply the stylesheet to the target's adoptedStyleSheets.
    target.adoptedStyleSheets = [...target.adoptedStyleSheets, sheet];
  }

  /**
   * Lifecycle callback called when the host element is connected to the document's DOM.
   * Applies global and encapsulated CSS to the respective DOM targets.
   */
  hostConnected() {
    if (this.css.globalCSS) {
      this.applyCssToDom(this.css.globalCSS, document); // Apply global CSS to the document if it exists.
    }

    // Apply encapsulated CSS to the host's shadow root if it exists.
    if (this.css.encapsulatedCSS && this.host.shadowRoot) {
      this.applyCssToDom(this.css.encapsulatedCSS, this.host.shadowRoot); // Apply encapsulated CSS to the host's shadow root if it exists.
    }
  }

  /**
   * Lifecycle callback called when the host element is disconnected from the document's DOM.
   * Note: When a component with a Shadow DOM is disconnected from the document's DOM, the Shadow DOM is also removed along with the component.
   * However, for Light DOM styles, they are not removed here because other instances of the component
   * might still be present on the page and require these styles.
   */
  hostDisconnected() {
    // No action is taken when the host is disconnected.
  }
}
