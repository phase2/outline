import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import primaryButtonVars from './css-variables/vars-primary.css.lit';
import secondaryButtonVars from './css-variables/vars-secondary.css.lit';
import tertiaryButtonVars from './css-variables/vars-tertiary.css.lit';
import componentStyles from './outline-button.css.lit';
import { LinkTargetType } from '../outline-link/config';
import { OutlineElement } from '../outline-element/outline-element';
import { SlotController } from '../../controllers/slot-controller';
import { ifDefined } from 'lit/directives/if-defined.js';

export type ButtonVariant = 'none' | 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * The Outline Button component
 * @element outline-button
 * @since 1.0.0
 * @slot - default slot, used for button text.
 * @slot left - slot used for left side icon.
 * @slot right - slot used for right side icon.
 * @todo Convert styles to utilize CSS Variables.
 */
@customElement('outline-button')
export class OutlineButton extends OutlineElement {
  static styles: CSSResultGroup = [
    primaryButtonVars,
    secondaryButtonVars,
    tertiaryButtonVars,
    componentStyles,
  ];

  slots = new SlotController(
    this, // This, the host element.
    false // To shift or not to shift LightDom nodes to ShadowDOM.
  );
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
   * A click handler to be passed only to onClick. DO NOT USE @click on this component.
   */
  @property() onClick: () => void;

  /**
   * A keyUp handler to be passed to the onKeyUp. DO NOT USE @keyup on this component.
   */
  @property() onKeyUp: () => void;

  @state() hasLeftIcon: boolean;
  @state() hasRightIcon: boolean;

  firstUpdated(): void {
    this.hasLeftIcon = this.slots.test('left');
    this.hasRightIcon = this.slots.test('right');
  }

  /**
   * Component render function
   * @returns TemplateResult
   * @todo This should utilize `outline-link` component.
   */
  render(): TemplateResult {
    return this.buttonUrl
      ? html` <a
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          href=${this.buttonUrl}
          target=${ifDefined(this.buttonTarget)}
          aria-label="${ifDefined(this.buttonLabel)}"
          aria-disabled="${ifDefined(this.isDisabled)}"
        >
          ${this.iconTemplate(this.hasLeftIcon, 'left')}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon, 'right')}
        </a>`
      : html`<button
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          aria-label="${ifDefined(this.buttonLabel)}"
          aria-disabled="${ifDefined(this.isDisabled)}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          ${this.iconTemplate(this.hasLeftIcon, 'left')}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon, 'right')}
        </button> `;
  }

  /**
   * Icon template
   *
   * @param exists - Whether the icon slot exists.
   * @param slot - The slot name to use.
   * @returns - The icon template.
   */
  iconTemplate(exists: boolean, slot: string): TemplateResult | null {
    if (!exists) return null;
    return html`<slot name="${slot}"></slot>`;
  }

  updated() {
    // checks the is-disabled prop and manages aria-disabled attributes on the <outline-button> element itself.
    if (this.hasAttribute('is-disabled')) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('aria-disabled', 'false');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-button': OutlineButton;
  }
}
