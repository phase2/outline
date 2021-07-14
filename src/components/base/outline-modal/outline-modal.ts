import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import componentStyles from './outline-modal.css.lit';
import { OutlineElement } from '../outline-element/outline-element';
import { ifDefined } from 'lit/directives/if-defined';

export type ModalSize = 'small' | 'medium' | 'full-screen';

export const modalSizes: ModalSize[] = ['small', 'medium', 'full-screen'];

/**
 * The Outline Modal component
 * @element outline-modal
 * @slot default - The modal contents
 * @slot outline-modal--trigger - The trigger for the modal
 * @slot outline-modal--header - The header in the modal
 * @slot outline-modal--accessibility-description - The accessibility description which is used by screen readers.
 */
@customElement('outline-modal')
export class OutlineModal extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  size?: ModalSize = 'medium';

  @property({ attribute: false })
  isOpen = false;

  @query('#overlay')
  private overlayElement!: HTMLDivElement;

  async open(): Promise<void> {
    if (!this.isOpen) {
      this.isOpen = true;

      await this.updateComplete;

      this.overlayElement.focus();

      this.dispatchEvent(new CustomEvent('opened'));
    }
  }

  async close(): Promise<void> {
    if (this.isOpen) {
      this.isOpen = false;

      await this.updateComplete;

      this.dispatchEvent(new CustomEvent('closed'));
    }
  }

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
      this.open();
    }
  }

  private _handleModalClose(event: Event): void {
    // Only trigger if we click directly on the event that wants to receive the click.
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  private _handleOverlayKeyup(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  private _getHeaderTitleSlotId(): string | null {
    let id = null;

    // When this was a class property, it wasn't finding the slot as expected.
    const headerSlot: HTMLSlotElement | null = this.querySelector(
      '[slot="outline-modal--header"]'
    );

    if (headerSlot !== null) {
      id = 'header';
    }

    return id;
  }

  private _getAccessibilityDescriptionId(): string | null {
    let id = null;

    // When this was a class property, it wasn't finding the slot as expected.
    const accessibilityDescriptionSlot: HTMLSlotElement | null =
      this.querySelector('[slot="outline-modal--accessibility-description"]');

    if (accessibilityDescriptionSlot !== null) {
      id = 'accessibility-description';
    }

    return id;
  }

  private _overlayTemplate(): TemplateResult {
    let template = html``;

    if (this.isOpen) {
      template = html`
        <div
          id="overlay"
          tabindex="-1"
          class="${this.size}"
          @click="${this._handleModalClose}"
          @keyup="${this._handleOverlayKeyup}"
        >
          <div
            id="container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${ifDefined(this._getHeaderTitleSlotId())}"
            aria-describedby="${ifDefined(
              this._getAccessibilityDescriptionId()
            )}"
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
        <slot
          id="accessibility-description"
          name="outline-modal--accessibility-description"
        ></slot>
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
