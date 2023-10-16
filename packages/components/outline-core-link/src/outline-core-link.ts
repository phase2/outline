import { html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';
import componentStyles from './style/outline-core-link.css.lit';
import componentVars from './style/outline-core-link.vars.css.lit';
import globalStyles from './style/outline-core-link.lightDom.css.lit';

import type { LinkTargetType, LinkRelType } from './config';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-link';

/**
 *
 * The Outline Core Link component
 *
 * @element outline-core-link
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @cssprop --outline-core-link-transition-property: The CSS transition property to use for the link.
 * @cssprop --outline-core-link-transition-duration: The CSS transition duration to use for the link.
 * @cssprop --outline-core-link-transition-timing-function: The CSS transition timing function to use for the link.
 * @cssprop --outline-core-link-color-default: The default link color.
 * @cssprop --outline-core-link-color-default-decoration: Text decoration for the default link.
 * @cssprop --outline-core-link-color-hover: The link color when hovering on the link.
 * @cssprop --outline-core-link-color-hover-decoration: Text decoration for the link when hovering.
 * @cssprop --outline-core-link-color-focus: The link color when focusing on the link.
 * @todo - Add support for outline/ring on the focus state of the link.
 */
@customElement(componentName)
export class OutlineCoreLink extends OutlineElement {
  static styles: CSSResultGroup = [componentVars, componentStyles];
  adoptedStylesheets: AdoptedStyleSheets;
  debug = false;

  /**
   * Link url
   */
  @property({ type: String, attribute: 'link-href' })
  linkHref: string;

  /**
   * Link text
   */
  @property({ type: String, attribute: 'link-text' })
  linkText: string;

  /**
   * Link target
   */
  @property({ type: String, attribute: 'link-target' })
  linkTarget: LinkTargetType;

  /**
   * Link rel
   */
  @property({ type: String, attribute: 'link-rel' })
  linkRel: LinkRelType;

  /**
   * The `connectedCallback` method is called whenever the element is inserted into the DOM.
   * In this method, we're creating an instance of `AdoptedStyleSheets` and adding it as a controller.
   *
   * Adding the `connectedCallback` controller via  more efficient than creating the instance and adding the controller in the constructor.
   * The reason is that it delays these operations until the element is actually inserted into the DOM.
   * If you have many such elements that are created but not immediately added to the DOM,
   * this can improve the startup performance of your application.
   */
  connectedCallback() {
    super.connectedCallback();
    this.adoptedStylesheets = new AdoptedStyleSheets(css`
      ${componentVars}

      ${globalStyles}
    `);
    this.adoptedStylesheets = new AdoptedStyleSheets(globalStyles);
    this.addController(this.adoptedStylesheets);
  }

  render(): TemplateResult {
    if (this.linkHref) {
      return this.generateLink();
    } else {
      return this.fullMarkupInSlot();
    }
  }

  /**
   * Check to see if the link is external, pass target="_blank" and rel="external" if so. Returns true if the link is external.
   */
  isURLExternal(url: string): boolean {
    return (
      new URL(url, window.location.href).hostname !== window.location.hostname
    );
  }

  /**
   * You can override Rel manually, but if not, we'll set it to "noreferrer noopener" if the link is external.
   * Tabnabbing vulnerability 🤯
   * TLDR: when a link has the attribute target="_blank", always add ref="noreferrer noopener"
   * https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
   */
  linkRelRender(): string | undefined {
    if (this.linkRel) {
      return this.linkRel;
    }
    return this.isURLExternal(this.linkHref)
      ? 'noreferrer noopener'
      : undefined;
  }

  /**
   * You can override target manually, but if not, we'll set it to "_blank" if the link is external.
   */
  linkTargetRender(): LinkTargetType | undefined {
    if (this.linkTarget) {
      return this.linkTarget;
    }
    return this.isURLExternal(this.linkHref) ? '_blank' : undefined;
  }

  generateLink(): TemplateResult {
    return html` <a
      href=${this.linkHref}
      rel="${ifDefined(this.linkRelRender())}"
      target="${ifDefined(this.linkTargetRender())}"
    >
      ${this.linkText ? html`${this.linkText}` : html`<slot></slot>`}
    </a>`;
  }

  /**
   * Get all elements in the default slot.
   * @todo - Move method to a controller.
   *
   * @returns NodeList of all elements in the default slot.
   */
  getSlottedContent(): NodeList {
    return this.querySelectorAll('*');
  }

  /**
   * Check to see if the element is slotted properly.
   * @todo - Move method to a controller.
   *
   * @returns boolean
   */
  isValidTopLevelSlottedLink(): boolean {
    const slot: NodeList = this.getSlottedContent();
    if (slot.length === 1 && slot[0].nodeName === 'A') {
      return true;
    }
    return false;
  }

  /**
   * If the element is not slotted properly, log an error to the console.
   * @todo - Enable a global debug mode in outline.config.js that will determine if the console.group is logged in this and other component level debugging code.
   * @todo - Implement a controller to handle debugging Outline components.
   *
   * @returns void
   */
  debugSlottedContent(): void {
    console.group(componentName);
    console.error(
      `${componentName} must have a single <a> tag as a child of the default slot.`
    );
    console.log(this.getSlottedContent());
    console.groupEnd();
  }

  /**
   * Adjust attributes on a slotted link.
   *
   * When the link is slotted, we'll test, modify & render the slotted link,
   * and adjust the target and rel attributes if they are set on the outline-core-link element.
   */
  adjustSlottedContent(): void {
    const slottedLink = this.querySelector('a') as HTMLAnchorElement | null;
    if (this.linkTarget) {
      slottedLink?.setAttribute('target', this.linkTarget);
    }
    if (this.linkRel) {
      slottedLink?.setAttribute('rel', this.linkRel);
    }
  }

  /**
   * If the element is fully slotted, return the full markup in the default slot.
   *
   * @todo - Enable a global debug mode in outline.config.js that will determine if the console.group is logged.
   * @returns HTMLSlotElement
   */
  fullMarkupInSlot(): TemplateResult {
    this.adjustSlottedContent();
    if (this.debug) {
      this.debugSlottedContent();
    }
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreLink;
  }
}
