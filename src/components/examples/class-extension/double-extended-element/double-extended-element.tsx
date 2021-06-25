import { css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ExtendedElement } from '../extended-element/extended-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('double-extended-element')
export class DoubleExtendedElement extends ExtendedElement {
  static styles: CSSResultGroup = [
    ExtendedElement.styles,
    css`
      :host {
        /* An overwritten CSS property */
        border: dashed 2px red;
      }
      ::slotted(p) {
        border-color: red;
      }
    `,
  ];

  // Override the default `name` variable from MyElement.
  @property({ type: String })
  name = 'DoubleExtendedElement that extends ExtendedElement';

  // // Override the default counter starting point.
  // @property({ type: Number })
  // count = 45;

  /**
   * The name to say "Hello" to.
   */
  @property()
  extra = 'New property on the ExtendedElement class.';

  // render(): TemplateResult {
  //   return html`
  //     <h1>${this.name}!</h1>
  //     <button @click=${this._onClick} part="button">
  //       Click Count: ${this.count}
  //     </button>
  //     <slot></slot>
  //     ${this.extra}
  //   `;
  // }

  // When this private method is enabled in the extended class, error is thrown.
  // Class 'ExtendedElement' incorrectly extends base class 'MyElement'.
  // Types have separate declarations of a private property '_onClick'.
  // private _onClick() {
  //   this.count++;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'double-extended-element': DoubleExtendedElement;
  }
}
