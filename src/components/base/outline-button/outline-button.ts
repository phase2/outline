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

export type ButtonSize = 'small' | 'large';

export type ButtonType = 'link' | 'button';

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
  @property({ reflect: true, attribute: 'button-variant' })
  variant: ButtonVariant = 'primary';

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
   * A click handler to be passedto @click attribute
   */
  @property() onClick: () => void;

  /**
   * A keyUp handler to be passed to the @keyUp attribute
   */
  @property() onKeyUp: () => void;

  /**
   * Sets role attribute to "button", for accessibility purposes.
   */
  @property({ type: String, reflect: true }) role = 'button';

  /**
   * Sets tabindex attribute to default "0", for accessibility purposes.
   */
  @property({ type: String, reflect: true }) tabindex = '0';

  render(): TemplateResult {
    return this.url !== undefined
      ? html` <a
          class="btn ${this.variant}"
          href=${this.url}
          target=${this.target}
          role="button"
          aria-disabled=${!!this.isDisabled}
          tabindex="-1"
        >
          <slot></slot>
        </a>`
      : html`<button
          tabindex="-1"
          class="btn ${this.variant}"
          aria-disabled="${!!this.isDisabled}"
        >
          <slot></slot>
        </button>`;
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
