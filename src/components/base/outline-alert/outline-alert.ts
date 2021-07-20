import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-alert.css.lit';
import { OutlineElement } from '../outline-element/outline-element';

export type AlertSize = 'small' | 'large';
export const alertSizes: AlertSize[] = ['small', 'large'];

export type AlertStatusType = 'information' | 'warning' | 'error' | 'success';
export const alertStatusTypes: AlertStatusType[] = [
  'information',
  'warning',
  'error',
  'success',
];

/**
 * The Outline Alert component
 *
 * @element outline-alert
 * @slot default - The alert contents
 * @slot outline-alert--header - The header in the alert
 */
@customElement('outline-alert')
export class OutlineAlert extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  statusType: AlertStatusType = 'information';

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
      <div id="body" role="${this.isInteractive ? 'alertdialog' : 'alert'}">
        ${this.shouldShowIcon === true
          ? html`
              <div id="icon">
                <!--@todo include icon when we have that ready.-->
              </div>
            `
          : html``}
        ${this.size === 'large'
          ? html`
              <div id="header">
                <slot name="outline-alert--header">${this.statusType}</slot>
              </div>
            `
          : html``}
        <div id="message">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
