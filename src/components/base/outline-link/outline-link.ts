// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined';
import type { LinkTargetType, LinkRelType } from './config';
import componentStyles from './outline-link.css.lit';

/**
 * The Outline  Link component
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-link')
export class OutlineLink extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Link url
   */
  @property({ type: String })
  linkHref: string | boolean = false;

  /**
   * Link text
   */
  @property({ type: String })
  linkText: string | boolean = false;

  /**
   * Link target
   */
  @property({ type: String })
  linkTarget: LinkTargetType;

  /**
   * Link rel
   */
  @property({ type: String })
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
          rel="${ifDefined(this.linkRel)}"
          target="${ifDefined(this.linkTarget)}"
        >
          ${this.linkText ? html`${this.linkText}` : html`<slot></slot>`}
        </a>`
      : html`<slot></slot>`}`;
  }
}
