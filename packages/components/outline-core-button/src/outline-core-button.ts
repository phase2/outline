import { html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { OutlineElement } from '@phase2/outline-core';
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';

import encapsulatedStyles from './outline-core-button.encapsulated.css?inline';
import globalStyles from './outline-core-button.global.css?inline';

export const buttonVariantsTypes = ['primary', 'secondary', 'tertiary'];
export const buttonSizeTypes = ['small', 'medium', 'large'];

export type ButtonVariant = (typeof buttonVariantsTypes)[number];
export type ButtonSize = keyof typeof buttonSizeTypes;

/**
 * The Outline Core Button component
 * @element outline-core-button
 * @extends OutlineElement
 * @since 0.0.1
 *
 * @prop {string} buttonUrl - The url to use for a link. This will render an anchor element.
 * @prop {string} buttonTarget - The target to use for a link, used in conjunction with the url attribute.
 * @prop {string} buttonLabel - ARIA label attribute to pass down to the resulting button or a element.
 * @prop {string} buttonVariant - The button variant. One of: link, primary, secondary, tertiary.
 * @prop {string} buttonSize - The button size. One of: small, medium, large.
 * @prop {boolean} isDisabled - Whether the button is disabled.
 * @attr {string} button-url - The url to use for a link. This will render an anchor element.
 * @attr {string} button-target - The target to use for a link, used in conjunction with the url attribute.
 * @attr {string} button-label -ARIA label attribute to pass down to the resulting button or a element.
 * @attr {string} button-variant - The button variant. One of: link, primary, secondary, tertiary.
 * @attr {string} button-size - The button size. One of: small, medium, large.
 * @attr {boolean} is-disabled - Whether the button is disabled.
 * @slot - default slot, used for button text and any related visual content (icon).
 */
@customElement('outline-core-button')
export class OutlineCoreButton extends OutlineElement {
  static styles: CSSResultGroup = [encapsulatedStyles];
  private adoptedStylesheets: AdoptedStyleSheets;

  @state() buttonsVariantList = buttonVariantsTypes;

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
      ${globalStyles}
    `);
    this.addController(this.adoptedStylesheets);
  }

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
   * The button style variant to use.
   */
  // @property({ type: String, attribute: 'button-variant' })
  // buttonVariant: ButtonVariant = ButtonVariant.primary;

  @property({
    type: String,
    attribute: 'button-variant',
    converter: buttonVariant => {
      if (
        buttonVariant &&
        !Object.values(buttonVariantsTypes).includes(buttonVariant)
      ) {
        buttonVariant = buttonVariantsTypes[0];
      }
      return buttonVariant;
    },
  })
  buttonVariant: ButtonVariant = 'primary';

  /**
   * The button size to use.
   */
  @property({
    type: String,
    attribute: 'button-size',
    converter: buttonSize => {
      if (buttonSize && !Object.values(buttonSizeTypes).includes(buttonSize)) {
        buttonSize = buttonSizeTypes[0];
      }
      return buttonSize as String;
    },
  })
  buttonSize: ButtonSize;

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url property
   */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  // Slotted elements classes arent getting overridden when the component updates.

  /**
   * Component render function
   * @returns TemplateResult
   * @todo This should utilize `outline-core-link` component.
   */
  render(): TemplateResult {
    const typedValues = buttonSizeTypes.concat(buttonVariantsTypes);
    // added Disabled prop to class list for removal
    typedValues.push('disabled');
    const slottedButton: HTMLButtonElement | null =
      this.querySelector('button') ?? null;
    if (slottedButton) {
      // add classes from shadow DOM of component to light DOM of Slot
      slottedButton.classList.remove(...typedValues);
      if (this.buttonSize) {
        slottedButton?.classList.add(this.buttonSize as string);
      }
      if (this.buttonVariant) {
        slottedButton?.classList.add(this.buttonVariant as string);
      }
      if (this.isDisabled) {
        slottedButton?.classList.add('disabled');
      }
    }

    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

  updated() {
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
