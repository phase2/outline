import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './my-element.css.lit';
/**
 * An example element.
 *
 * @slot - The default, and only slot for this element.
 * @csspart button - The button. Click it.
 */
@customElement('my-element')
export class MyElement extends LitElement {
  // Set the CSS styles for the component.
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The name to say "Hello" to.
   */
  @property({ type: String })
  name = 'MyElement that extends LitElement';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  _onClick(): void {
    this.count++;
  }

  render(): TemplateResult {
    return html`
      <h1>${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
