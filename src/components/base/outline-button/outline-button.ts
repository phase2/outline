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
  @property() url: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @property() target: LinkTargetType = '_self';

  /**
   * The button style variant to use.
   */
  @property({ reflect: true }) variant: ButtonVariant = 'primary';

  /**
   * Choose which predefined icon to add to the link
   */
  // @property() icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url property
   */
  @property() disabled: boolean;

  render(): TemplateResult {
    return this.url !== undefined
      ? html` <a
          class="btn ${this.variant}"
          href=${this.url}
          target=${this.target}
        >
          <slot></slot>
          <!-- ${this.icon &&
          html`<outline-icon icon=${this.icon}></outline-icon>`} -->
        </a>`
      : html` <button class="btn ${this.variant}" .disabled=${this.disabled}>
          <slot></slot>
          <!-- ${this.icon &&
          html`<outline-icon icon=${this.icon}></outline-icon>`} -->
        </button>`;
  }
}
