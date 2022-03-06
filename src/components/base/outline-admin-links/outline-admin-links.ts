import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement } from 'lit/decorators.js';
import { SlotController } from '../../controllers/slot-controller';
import componentStyles from './outline-admin-links.css.lit';

/**
 * The Outline Admin Links component
 * @element outline-admin-links
 * @slot - The default, and only slot for this element.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement('outline-admin-links')
export class OutlineAdminLinks extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <div class="links">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-admin-links': OutlineAdminLinks;
  }
}
