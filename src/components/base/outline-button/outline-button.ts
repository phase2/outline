import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LinkTargetType } from '../outline-link/config';
import componentStyles from './outline-button.css.lit';
import { OutlineElement } from '../outline-element/outline-element';

// import {
//   IconTypeOutline,
//   IconTypeSolid,
//   IconTypeCustom,
// } from '../outline-icon/config';

export type ButtonVariant = 'none' | 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * The Outline Button component
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-button')
export class OutlineButton extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  @property({ type: String }) url: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @property({ type: String }) target: LinkTargetType = '_self';

  /**
   * The button style variant to use.
   */
  @property({ type: String })
  variant: ButtonVariant = 'primary';

  /**
   * The button size to use.
   */
  @property({ type: String }) size: ButtonSize = 'medium';

  /**
   * Choose which predefined icon to add to the link
   */
  // @property() icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url property
   */
  @property({ type: Boolean }) isDisabled = false;

  /**
   * A click handler to be passed only to onClick. DO NOT USE @click on this component.
   */
  @property() onClick: () => void;

  /**
   * A keyUp handler to be passed to the onKeyUp. DO NOT USE @keyup on this component.
   */
  @property() onKeyUp: () => void;

  render(): TemplateResult {
    return this.url
      ? html` <a
          class="btn ${this.variant} ${this.size}"
          href=${this.url}
          target=${this.target}
          aria-disabled=${this.isDisabled}
        >
          <slot></slot>
        </a>`
      : html`<button
          class="btn ${this.variant} ${this.size}"
          aria-disabled="${this.isDisabled}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          <slot></slot>
        </button> `;
  }

  updated() {
    // checks the isDisabled prop and manages aria-disabled attribues on the <outline-button> element itself.
    if (this.hasAttribute('isDisabled')) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('aria-disabled', 'false');
    }
  }
}
