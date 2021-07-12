import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-modal.css.lit';
import { OutlineElement } from '../outline-element/outline-element';

export type ModalSize = 'small' | 'medium' | 'full-screen';

export const modalSizes: ModalSize[] = ['small', 'medium', 'full-screen'];

/**
 * The Outline Modal component
 */
@customElement('outline-modal')
export class OutlineModal extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The size of the modal.
   */
  @property({ type: String }) size: ModalSize;

  render(): TemplateResult {
    return html`
      <div id="trigger">
        <slot name="outline-modal--trigger"></slot>
      </div>
      <div id="overlay" class="${this.size}">
        <div id="header">
          <slot name="outline-modal--header"></slot>
        </div>
        <slot></slot>
      </div>
    `;
  }
}
