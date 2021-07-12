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

  private _handleModalTrigger(event: MouseEvent | KeyboardEvent): void {
    let shouldOpen = false;

    switch (event.type) {
      case 'click':
        shouldOpen = true;
        break;
      case 'keyup':
        if ('key' in event && event.key === 'Enter') {
          shouldOpen = true;
          break;
        }
    }

    if (shouldOpen) {
      this._isOpen = true;
    }
  }

  private _handleModalClose(event: Event): void {
    // Only trigger if we click directly on the event that wants to receive the click.
    if (event.target === event.currentTarget) {
      this._isOpen = false;
    }
  }

  private _overlayTemplate(): TemplateResult {
    let template = html``;

    if (this._isOpen) {
      template = html`
        <div
          id="overlay"
          tabindex="-1"
          class="${this.size}"
          @click="${this._handleModalClose}"
        >
          <div
            id="container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="header"
          >
            <div id="header">
              <slot id="title" name="outline-modal--header"></slot>
              <button
                id="close"
                aria-label="Close modal"
                @click="${this._handleModalClose}"
              ></button>
            </div>
            <div id="main">
              <slot></slot>
            </div>
          </div>
        </div>
      `;
    }

    return template;
  }

  render(): TemplateResult {
    return html`
      <div
        id="trigger"
        tabindex="0"
        @click="${this._handleModalTrigger}"
        @keyup="${this._handleModalTrigger}"
      >
        <slot name="outline-modal--trigger"></slot>
      </div>
      ${this._overlayTemplate()}
    `;
  }
}
