import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';

import type { LinkTargetType, LinkRelType } from './config';
import componentStyles from './outline-core-link.css.lit';

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
  static styles: CSSResultGroup = [componentStyles];

  /**
   * If the element is fully slotted.
   */
  @state() fullySlotted = false;

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
   *
   * @returns NodeList of all elements in the default slot.
   */
  getSlottedContent(): NodeList {
    return this.querySelectorAll('*');
  }

  isValidTopLevelLink(): boolean {
    const slot: NodeList = this.getSlottedContent();
    if (slot.length === 1 && slot[0].nodeName === 'A') {
      return true;
    }
    return false;
  }

  /**
   * If the element is fully slotted, return the full markup in the default slot.
   *
   * @todo - Enable a global debug mode in outline.config.js that will determine if the console.group is logged.
   * @returns HTMLSlotElement
   */
  fullMarkupInSlot(): TemplateResult {
    if (!this.isValidTopLevelLink()) {
      console.group(componentName);
      console.error(
        `${componentName} must have a single <a> tag as a child of the default slot.`
      );
      console.log(this.getSlottedContent());
      console.groupEnd();
    } else {
      this.fullySlotted = true;
      // const slot: NodeList = this.querySelectorAll('*');
      // const slottedLink: HTMLAnchorElement | null = this.querySelector('a');
      // console.log(`this.fullySlotted: ${this.fullySlotted}`);
      // console.log(`slot:`, slot);
      // console.log(`slottedLink:`, slottedLink);
    }
    return html`
      <slot></slot>
    `;
  }

  render(): TemplateResult {
    if (this.linkHref) {
      return this.generateLink();
    } else {
      return this.fullMarkupInSlot();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    componentName: OutlineCoreLink;
  }
}
