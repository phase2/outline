import { html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { OutlineElement } from '@phase2/outline-core';
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';
import componentStyles from './style/outline-core-alert.css.lit';
import componentVars from './style/outline-core-alert.vars.css.lit';
import globalStyles from './style/outline-core-alert.lightDom.css.lit';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-alert';

export const coreAlertStatusTypes = [
  'info',
  'warning',
  'error',
  'success',
] as const;
export type CoreAlertStatusType = (typeof coreAlertStatusTypes)[number];

// This can be useful for testing.
export interface OutlineCoreAlertInterface extends HTMLElement {
  status: CoreAlertStatusType;
  isInteractive: boolean;
}

/**
 *
 * The Outline Core Alert component
 *
 * @element outline-core-alert
 * @extends OutlineElement
 * @slot header - The header in the alert.
 * @slot icon-start - The icon to display at the start of the alert.
 * @slot default - The alert contents.
 * @slot icon-end - The icon to display at the end of the alert.
 * @cssprop --outline-alert--info-background: The background color for the info alert.
 * @cssprop --outline-alert--info-text: The text color for the info alert.
 * @cssprop --outline-alert--info-border: The border color for the info alert.
 * @cssprop --outline-alert--success-background: The background color for the success alert.
 * @cssprop --outline-alert--success-text: The text color for the success alert.
 * @cssprop --outline-alert--success-border: The border color for the success alert.
 * @cssprop --outline-alert--warning-background: The background color for the warning alert.
 * @cssprop --outline-alert--warning-text: The text color for the warning alert.
 * @cssprop --outline-alert--warning-border: The border color for the warning alert.
 * @cssprop --outline-alert--error-background: The background color for the error alert.
 * @cssprop --outline-alert--error-text: The text color for the error alert.
 * @cssprop --outline-alert--error-border: The border color for the error alert.
 * @todo: Make the alert styling more flexible.
 */
@customElement(componentName)
export class OutlineCoreAlert
  extends OutlineElement
  implements OutlineCoreAlertInterface
{
  static styles: CSSResultGroup = [componentStyles];
  adoptedStylesheets: AdoptedStyleSheets;
  debug = false;

  @property({ type: String, attribute: 'status' })
  status: CoreAlertStatusType = 'info';

  /**
   * This is important context for screen readers.
   */
  @property({ type: Boolean, attribute: 'is-interactive' })
  isInteractive = false;

  /**
   * @see `outline-core-link` documentation as to the purpose of this method.
   */
  connectedCallback() {
    super.connectedCallback();
    this.adoptedStylesheets = new AdoptedStyleSheets(css`
      outline-core-alert {
        ${componentVars}
      }
      ${globalStyles}
    `);
    this.addController(this.adoptedStylesheets);
  }

  render(): TemplateResult {
    // The `body` wrapper is used to avoid styles (like border) that are preventing us from styling `:host`.
    return html`
      <div
        class="alert-body"
        role="${this.isInteractive ? 'alertdialog' : 'alert'}"
        aria-labelledby=${ifDefined(this.isInteractive ? 'message' : undefined)}
      >
        <div class="alert-content">
          <slot name="icon-start"></slot>
          <div class="alert-header">
            <slot name="header">${this.status}</slot>
          </div>
          <slot name="icon-end"></slot>
          <div class="message" id="message">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreAlert;
  }
}
