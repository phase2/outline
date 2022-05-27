// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { LinkTargetType, LinkRelType } from './config';
import componentVars from './css-variables/vars-link.css.lit';
import componentStyles from './outline-link.css.lit';

/**
 * The Outline  Link component
 *
 * @element outline-link
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @cssprop --outline-link-transition-property: The CSS transition property to use for the link.
 * @cssprop --outline-link-transition-duration: The CSS transition duration to use for the link.
 * @cssprop --outline-link-transition-timing-function: The CSS transition timing function to use for the link.
 * @cssprop --outline-link-color-default: The default link color.
 * @cssprop --outline-link-color-default-decoration: Text decoration for the default link.
 * @cssprop --outline-link-color-hover: The link color when hovering on the link.
 * @cssprop --outline-link-color-hover-decoration: Text decoration for the link when hovering.
 * @cssprop --outline-link-color-focus: The link color when focusing on the link.
 * @todo - Add support for outline/ring on the focus state of the link.
 */
@customElement('outline-link')
export class OutlineLink extends OutlineElement {
  static styles: CSSResultGroup = [componentVars, componentStyles];
  /**
   * Link url
   */
  @property({ type: String, attribute: 'link-href' })
  linkHref: string | boolean = false;

  /**
   * Link text
   */
  @property({ type: String, attribute: 'link-text' })
  linkText: string | boolean = false;

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
   * This methodology allows us to create a component that can use properties
   * passed into it to generate a link element (<a>). This requires the linkHref
   * attribute is passed, otherwise, anything passed in will override the default
   * content in the slot allowing you to pass a pre-generated link into the
   * outline-link component wrapper.
   */
  render(): TemplateResult {
    return html`${this.linkHref
      ? html` <a
          href=${this.linkHref}
          rel="${ifDefined(this.evaluateRelValue())}"
          target="${ifDefined(this.linkTarget)}"
        >
          ${this.linkText ? html`${this.linkText}` : html`<slot></slot>`}
        </a>`
      : html`<slot></slot>`}`;
  }

  evaluateRelValue() {
    const relValue = [];
    if (this.linkRel) relValue.push(this.linkRel);
    // Protection for Tabnabbing vulnerability
    // Source: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
    // TLDR: when a link has the attribute target="_blank", always add ref="noreferrer noopener"
    if (this.linkTarget === '_blank') relValue.push('noreferrer', 'noopener');
    if (relValue.length > 0) return relValue.join(' ');
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-link': OutlineLink;
  }
}
