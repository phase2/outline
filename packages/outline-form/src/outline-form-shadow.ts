import { TemplateResult, html, CSSResultGroup } from 'lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-form.css.lit';
import { SlotController } from '../../controllers/slot-controller';

/**
 * The Outline Form component using Shadowdom
 * @element outline-form-shadow
 * @since 1.0.0
 * @slot - default slot
 */
@customElement('outline-form-shadow')
export class OutlineFormShadow extends OutlineElement {
  static styles: CSSResultGroup = [OutlineElement.styles, componentStyles];

  slots = new SlotController(this, true);

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-form-shadow': OutlineFormShadow;
  }
}
