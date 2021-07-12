import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
  @property({ type: String })
  size?: ModalSize = 'medium';

  @state()
  _isOpen = false;

  private _handleModalTrigger(): void {
    this._isOpen = true;
  }

  private _handleModalClose(): void {
    this._isOpen = false;
  }

  private _overlayTemplate(): TemplateResult {
    let template = html``;

    if (this._isOpen) {
      template = html`
        <div id="overlay" class="${this.size}">
          <div id="close" @click="${this._handleModalClose}">Close</div>
          <div id="header">
            <slot name="outline-modal--header"></slot>
          </div>
          <slot></slot>
        </div>
      `;
    }

    return template;
  }

  render(): TemplateResult {
    return html`
      <div id="trigger" @click="${this._handleModalTrigger}">
        <slot name="outline-modal--trigger"></slot>
      </div>
      ${this._overlayTemplate()}
    `;
  }
}
