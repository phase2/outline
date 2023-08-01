import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { OutlineElement, SlotsController } from '@phase2/outline-core';
import { LinkTargetType } from '@phase2/outline-link';

import { linkVars } from '@phase2/outline-link';
import componentStyles from './outline-core-button.css.lit';

export type ButtonVariant = 'link' | 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * The Outline Core Button component
 * @element outline-core-button
 * @since 1.0.0
 * @attr {string} button-url - The url to use for a link. This will render an anchor element.
 * @attr {string} button-target - The target to use for a link, used in conjunction with the url attribute.
 * @attr {string} button-label -ARIA label attribute to pass down to the resulting button or a element.
 * @attr {string} button-variant - The button variant. One of: link, primary, secondary, tertiary.
 * @attr {string} button-size - The button size. One of: small, medium, large.
 * @attr {boolean} is-disabled - Whether the button is disabled.
 * @slot - default slot, used for button text.
 * @slot left - slot used for left side icon.
 * @slot right - slot used for right side icon.
 * @todo Convert styles to utilize CSS Variables.
 */
@customElement('outline-core-button')
export class OutlineCoreButton extends OutlineElement {
  static styles: CSSResultGroup = [linkVars, componentStyles];

  slots = new SlotsController(this);

  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  @property({ type: String, attribute: 'button-url' })
  buttonUrl: string;

  /**
   * ARIA label attribute to pass down to the resulting button or a
   * element. This is required for accessibility if we use a button
   * with an icon only.
   */
  @property({ type: String, attribute: 'button-label' })
  buttonLabel: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @property({ type: String, attribute: 'button-target' })
  buttonTarget: LinkTargetType;

  /**
   * The button style variant to use.
   */
  @property({ type: String, attribute: 'button-variant' })
  buttonVariant: ButtonVariant = 'primary';

  /**
   * The button size to use.
   */
  @property({ type: String, attribute: 'button-size' })
  buttonSize: ButtonSize = 'medium';

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url property
   */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  /**
   * Component render function
   * @returns TemplateResult
   * @todo This should utilize `outline-core-link` component.
   */
  render(): TemplateResult {
    return html
    `<div class="btn ${this.buttonVariant} ${this.buttonSize}">
        ${this.iconTemplate('left')}
        <slot></slot>
        ${this.iconTemplate('right')}
    </div>`;
  }

  /**
   * Icon template
   *
   * @param exists - Whether the icon slot exists.
   * @param slot - The slot name to use.
   * @returns - The icon template.
   */
  iconTemplate(slotName: string): TemplateResult | null {
    if (!this.slots.exist(slotName)) return null;
    return html`<slot name="${slotName}"></slot>`;
  }

  updated() {
    // TODO: Debug slot controller application. 
    // checks the is-disabled prop and manages aria-disabled attributes on the <outline-core-button> element itself.
    if (this.hasAttribute('is-disabled')) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('aria-disabled', 'false');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-core-button': OutlineCoreButton;
  }
}
