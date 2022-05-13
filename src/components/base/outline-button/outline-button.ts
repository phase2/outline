import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import componentStyles from './outline-button.css.lit';
import { LinkTargetType } from '../outline-link/config';
import { OutlineElement } from '../outline-element/outline-element';
import { SlotController } from '../../controllers/slot-controller';
import { ifDefined } from 'lit/directives/if-defined.js';
import { isInType } from '../../../internal/isInType';
import { deepSearch } from '../../../internal/deepSearch';

const buttonVariants = ['none', 'primary', 'secondary'] as const;
export type ButtonVariant = typeof buttonVariants[number];

const buttonSizes = ['small', 'medium', 'large'] as const;
export type ButtonSize = typeof buttonSizes[number];

const buttonTypes = ['button', 'submit', 'reset'] as const;
export type ButtonType = typeof buttonTypes[number];

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
  static styles: CSSResultGroup = [componentStyles];

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
  @property({
    type: String,
    attribute: 'button-variant',
    converter: value => {
      return isInType(value, buttonVariants, 'ButtonVariant') ? value : '';
    },
  })
  buttonVariant: ButtonVariant = 'primary';

  /**
   * The button size to use.
   */
  @property({
    type: String,
    attribute: 'button-size',
    converter: value => {
      return isInType(value, buttonSizes, 'ButtonSize') ? value : '';
    },
  })
  buttonSize: ButtonSize = 'medium';

  /**
   * The button type ()
   */
  @property({ type: String, attribute: 'button-type' })
  buttonType: ButtonType = 'button';

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url property
   */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled: boolean;

  /**
   * A click handler to be passed only to onClick. DO NOT USE @click on this component.
   */
  @property() onClick: () => void;

  @state() hasLeftIcon: boolean;
  @state() hasRightIcon: boolean;
  @state() hasDefaultSlot: boolean;

  firstUpdated(): void {
    this.hasLeftIcon = this.slots.test('left');
    this.hasRightIcon = this.slots.test('right');
    this.hasDefaultSlot = this.slots.test();

    const ariaLabeled: Array<HTMLElement> = deepSearch(
      'aria-label',
      [this],
      'attribute'
    );
    const innerText: Array<HTMLElement> = deepSearch(
      'innerText',
      [this],
      'property'
    );
    if (!innerText.length && !ariaLabeled.length && !this.buttonLabel) {
      throw new Error('Button has neither button-label nor default slot text.');
    }
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
          aria-disabled="${ifDefined(
            this.isDisabled === true ? 'true' : undefined
          )}"
        >
          ${this.iconTemplate(this.hasLeftIcon, 'left')}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon, 'right')}
        </a>`
      : html`<button
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          type="${this.buttonType}"
          aria-label="${ifDefined(this.buttonLabel)}"
          aria-disabled="${ifDefined(
            this.isDisabled === true ? 'true' : undefined
          )}"
          .onclick="${this.onClick}"
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
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-button': OutlineButton;
  }
}
