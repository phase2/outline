import { html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MyElement } from '../my-element/my-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('extended-element')
export class ExtendedElement extends MyElement {
  static styles: CSSResultGroup = [
    MyElement.styles,
    css`
      :host {
        /* An overwritten CSS property */
        border: dashed 1px gray;
      }
      ::slotted(p) {
        border: solid 5px blue;
        padding: 16px;
      }
    `,
  ];

  // Override the default `name` variable from MyElement.
  @property({ type: String })
  name = 'ExtendedElement that extends MyElement';

  // Override the default counter starting point.
  @property({ type: Number })
  count = 10;

  /**
   * The name to say "Hello" to.
   */
  @property()
  extra = 'New property on the ExtendedElement class.';

  render(): TemplateResult {
    return html`
      <h1>${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
      ${this.extra}
    `;
  }

  // When this private method is enabled in the extended class, error is thrown.
  // Class 'ExtendedElement' incorrectly extends base class 'MyElement'.
  // Types have separate declarations of a private property '_onClick'.
  // private _onClick() {
  //   this.count++;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'extended-element': ExtendedElement;
  }
}
