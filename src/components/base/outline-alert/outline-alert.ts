import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-alert.css.lit';
import componentStyles from './outline-alert.css.lit';
import { OutlineElement } from '../outline-element/outline-element';
import { ifDefined } from 'lit/directives/if-defined.js';

export const alertSizes = ['small', 'large'] as const;
export type AlertSize = typeof alertSizes[number];

export const alertStatusTypes = [
  'info',
  'warning',
  'error',
  'success',
] as const;
export type AlertStatusType = typeof alertStatusTypes[number];

// This can be useful for testing.
export interface OutlineAlertInterface extends HTMLElement {
  statusType: AlertStatusType;
  size: AlertSize;
  isInteractive: boolean;
  shouldShowIcon: boolean;
}

/**
 * The Outline Alert component
 *
 * @element outline-alert
 * @extends OutlineElement
 * @slot default - The alert contents.
 * @slot header - The header in the alert.
 * @cssprop --outline-alert-info-background: The background color for the info alert.
 * @cssprop --outline-alert-info-text: The text color for the info alert.
 * @cssprop --outline-alert-info-border: The border color for the info alert.
 * @cssprop --outline-alert-success-background: The background color for the success alert.
 * @cssprop --outline-alert-success-text: The text color for the success alert.
 * @cssprop --outline-alert-success-border: The border color for the success alert.
 * @cssprop --outline-alert-warning-background: The background color for the warning alert.
 * @cssprop --outline-alert-warning-text: The text color for the warning alert.
 * @cssprop --outline-alert-warning-border: The border color for the warning alert.
 * @cssprop --outline-alert-error-background: The background color for the error alert.
 * @cssprop --outline-alert-error-text: The text color for the error alert.
 * @cssprop --outline-alert-error-border: The border color for the error alert.
 * @todo: Make the alert styling more flexible.
 */
@customElement('outline-alert')
export class OutlineAlert
  extends OutlineElement
  implements OutlineAlertInterface
{
  static styles: CSSResultGroup = [componentVars, componentStyles];

  @property({ type: String })
  statusType: AlertStatusType = 'info';

  /**
   * This is important context for screen readers.
   */
  @property({ type: Boolean })
  isInteractive = false;

  @property({ type: Boolean })
  shouldShowIcon = true;

  @property({ type: String })
  size: AlertSize = 'large';

  render(): TemplateResult {
    // The `body` wrapper is used to avoid styles (like border) that are preventing us from styling `:host`.
    return html`
      <div
        class="alert-body"
        role="${this.isInteractive ? 'alertdialog' : 'alert'}"
        aria-labelledby=${ifDefined(this.isInteractive ? 'message' : undefined)}
      >
        ${this.shouldShowIcon === true
          ? html`
              <div class="icon">
                <!--@todo include icon when we have that ready.-->
              </div>
            `
          : null}
        ${this.size === 'large'
          ? html`
              <div class="alert-header">
                <slot name="header">${this.statusType}</slot>
              </div>
            `
          : null}
        <div class="message" id="message">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-alert': OutlineAlert;
  }
}
