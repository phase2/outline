import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { OutlineElement } from '@phase2/outline-core';
import componentStyles from './outline-modal.css.lit';

export const modalSizes = ['small', 'medium', 'full-screen'] as const;
export type ModalSize = typeof modalSizes[number];

// This is helpful in testing.
export interface OutlineModalInterface extends HTMLElement {
  isOpen: boolean;
  shouldForceAction: boolean;
  size?: ModalSize;
  open: () => void;
  close: () => void;
}

// See https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus.
// @todo make this re-usable across components?
const focusableElementSelector = `
  a[href]:not([tabindex="-1"]),
  area[href]:not([tabindex="-1"]),
  input:not([disabled]):not([tabindex="-1"]),
  select:not([disabled]):not([tabindex="-1"]),
  textarea:not([disabled]):not([tabindex="-1"]),
  button:not([disabled]):not([tabindex="-1"]),
  iframe:not([tabindex="-1"]),
  [tabindex]:not([tabindex="-1"]),
  [contentEditable=true]:not([tabindex="-1"])
`;

/**
 * The Outline Modal component
 * @element outline-modal
 * @deprecated since version 0.1.4
 * @slot default - The modal contents
 * @slot outline-modal--trigger - The trigger for the modal
 * @slot outline-modal--header - The header in the modal
 * @slot outline-modal--accessibility-description - The accessibility description which is used by screen readers.
 */
@customElement('outline-modal')
export class OutlineModal
  extends OutlineElement
  implements OutlineModalInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ attribute: false })
  isOpen = false;

  /**
   * If we force the user to take an action, the consumer must provide a way to close the modal on their own.
   */
  @property({ type: Boolean })
  shouldForceAction = false;

  @property({ type: String })
  size?: ModalSize = 'medium';

  render(): TemplateResult {
    return html`
      <div
        id="trigger"
        tabindex="0"
        @click="${this.open}"
        @keydown="${this._handleTriggerKeydown}"
      >
        <slot name="outline-modal--trigger"></slot>
      </div>
      ${this._overlayTemplate()}
    `;
  }

  @state()
  _hasHeaderSlot: boolean;

  @state()
  _hasAccessibilityDescriptionSlot: boolean;

  connectedCallback() {
    super.connectedCallback();
    this._handleSlotChange();
  }

  private _handleSlotChange(): void {
    this._hasHeaderSlot =
      this.querySelector('[slot="outline-modal--header"]') !== null;
    this._hasAccessibilityDescriptionSlot =
      this.querySelector(
        '[slot="outline-modal--accessibility-description"]'
      ) !== null;
  }

  private _overlayTemplate(): TemplateResult {
    let template = html``;

    if (this.isOpen) {
      template = html`
        <div
          id="overlay"
          tabindex="-1"
          class="${this.size}"
          @click="${this._handleOverlayClick}"
          @keydown="${this._handleOverlayKeydown}"
        >
          <div
            id="container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${ifDefined(
              this._hasHeaderSlot ? 'header' : undefined
            )}"
            aria-describedby="${ifDefined(
              this._hasAccessibilityDescriptionSlot
                ? 'accessibility-description'
                : undefined
            )}"
          >
            <div id="header">
              <slot
                id="title"
                name="outline-modal--header"
                @slotchange="${this._handleSlotChange}"
              ></slot>
              ${
                this.shouldForceAction
                  ? null
                  : html`
                    <button
                      id="close"
                      aria-label="Close modal"
                      @click="${this.close}"
                      @keydown="${this._handleCloseKeydown}"
                    ></button>
                  `
              }
            </div>
            <div id="main">
              <slot></slot>
            </div>
          </div>
        </div>
        <slot
          id="accessibility-description"
          name="outline-modal--accessibility-description"
          @slotchange="${this._handleSlotChange}"
        ></slot>
      `;
    }

    return template;
  }

  async open(): Promise<void> {
    if (!this.isOpen) {
      this.isOpen = true;

      await this.updateComplete;

      this._focusOnElement();

      this._trapFocus();

      this.dispatchEvent(new CustomEvent('opened'));
    }
  }

  async close(): Promise<void> {
    if (this.isOpen) {
      this.isOpen = false;

      await this.updateComplete;

      this.dispatchEvent(new CustomEvent('closed'));

      this.triggerElement.focus();
    }
  }

  @query('#trigger')
  private triggerElement!: HTMLDivElement;

  private _handleTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      // This prevents a focused element from also triggering.
      // For example, the modal opens and the "accept" button is focused and then triggered and the modal closes.
      event.preventDefault();

      this.open();
    }
  }

  private _handleOverlayClick(event: MouseEvent): void {
    // Only trigger if we click directly on the event that wants to receive the click.
    if (
      event.target === event.currentTarget &&
      this.shouldForceAction === false
    ) {
      this.close();
    }
  }

  private _handleOverlayKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.shouldForceAction === false) {
      this.close();
    }
  }

  // For some reason on the `Docs` tab of Storybook, the `click` event for the close button doesn't work with the `Enter` key without also watching the `keyup` event. This isn't the case on the `Canvas` tab.
  private _handleCloseKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.close();
    }
  }

  @query('#close')
  private closeElement: HTMLDivElement | null;

  @property({ type: String })
  elementToFocusSelector?: string | undefined;

  private _focusOnElement(): void {
    const defaultElement = this.shouldForceAction ? null : this.closeElement;

    const attributeDefinedElement =
      this.elementToFocusSelector !== undefined
        ? (this.querySelector(
            this.elementToFocusSelector
          ) as HTMLElement | null)
        : null;

    const automaticallySelectedElement = this.querySelector(
      focusableElementSelector
    ) as HTMLElement | null;

    const element =
      attributeDefinedElement ?? automaticallySelectedElement ?? defaultElement;

    if (element !== null) {
      element.focus();
    }
  }

  private _trapFocus(): void {
    const firstFocusableElement = this.shouldForceAction
      ? this.firstFocusableSlottedElement
      : this.closeElement;

    if (firstFocusableElement !== null) {
      const lastFocusableElement =
        this.lastFocusableSlottedElement ?? firstFocusableElement;

      lastFocusableElement.addEventListener('keydown', event => {
        if (event.key === 'Tab' && event.shiftKey === false) {
          event.preventDefault();

          firstFocusableElement.focus();
        }
      });

      firstFocusableElement.addEventListener('keydown', event => {
        if (event.key === 'Tab' && event.shiftKey) {
          event.preventDefault();

          lastFocusableElement.focus();
        }
      });
    }
  }

  private get firstFocusableSlottedElement(): HTMLElement | null {
    const focusableSlottedElements: NodeListOf<HTMLElement> =
      this.querySelectorAll(focusableElementSelector);

    return Array.from(focusableSlottedElements).slice(0)[0] ?? null;
  }

  private get lastFocusableSlottedElement(): HTMLElement | null {
    const focusableSlottedElements: NodeListOf<HTMLElement> =
      this.querySelectorAll(focusableElementSelector);

    return Array.from(focusableSlottedElements).slice(-1)[0] ?? null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-modal': OutlineModal;
  }
}
