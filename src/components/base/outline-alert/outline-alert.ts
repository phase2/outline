import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
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
  size?: AlertSize = 'large';

  @property({ type: String })
  statusType?: AlertStatusType = 'information';

  render(): TemplateResult {
    return html`
      <slot name="outline-alert--header">Information</slot>
      <slot></slot>
    `;
  }
}
