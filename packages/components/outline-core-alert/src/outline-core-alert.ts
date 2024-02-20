import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { OutlineElement } from '@phase2/outline-core';
import {
  CoreAlertStatusType,
  OutlineCoreAlertInterface,
} from '@phase2/outline-core-alert';
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
import encapsulatedStyles from './style/outline-core-alert.encapsulated.css?inline';
import globalStyles from './style/outline-core-alert.global.css?inline';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-alert';

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
  GlobalStylesheets: AdoptedStylesheets | undefined = new AdoptedStylesheets(
    this,
    globalStyles
  );
  EncapsulatedStylesheets: AdoptedStylesheets | undefined;
  debug = false;

  @property({ type: String, attribute: 'status' })
  status: CoreAlertStatusType = 'info';

  /**
   * This is important context for screen readers.
   */
  @property({ type: Boolean, attribute: 'is-interactive' })
  isInteractive = false;

  createRenderRoot() {
    const root = super.createRenderRoot();
    this.EncapsulatedStylesheets = this.shadowRoot
      ? new AdoptedStylesheets(this, encapsulatedStyles, this.shadowRoot)
      : undefined;
    return root;
  }

  render(): TemplateResult {
    // The `body` wrapper is used to circumvent limitations with styling the `:host` directly, such as applying borders.
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
