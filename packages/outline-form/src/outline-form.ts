import { TemplateResult, html, CSSResultGroup } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import { LightDomStyles as StyleController } from '@phase2/outline-controller-light-dom-styles-controller';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-form.css.lit';
import globalStyles from './outline-form.global.scoped.css.lit';

/**
 * The Outline Form component
 * @element outline-form
 * @since 1.0.0
 * @slot - default slot
 */
@customElement('outline-form')
export class OutlineForm extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  globalStyles = new StyleController(this, globalStyles);

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-form': OutlineForm;
  }
}
