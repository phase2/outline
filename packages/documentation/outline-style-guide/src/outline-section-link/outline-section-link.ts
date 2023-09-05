import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OutlineElement, SlotsController } from '@phase2/outline-core';

import componentStyles from './outline-section-link.css.lit';

/**
 * The Outline Section Link component
 * @element outline-section-link
 * @extends OutlineElement
 * @slot link - Slot for link.
 * @slot badge - Slot for badge.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement('outline-section-link')
export class OutlineSectionLink extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotsController(this);

  render(): TemplateResult {
    return html`
      <div class="outline-section-link">
        <slot name="badge"></slot>
        <slot name="link"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-section-link': OutlineSectionLink;
  }
}