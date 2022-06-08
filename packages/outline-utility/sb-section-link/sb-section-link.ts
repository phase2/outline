// import { CSSResultGroup, TemplateResult, html } from 'lit';
// import { OutlineElement } from '../../base/outline-element/outline-element';
import { OutlineElement } from '@phase2/outline-element';
import {
  html,
  TemplateResult,
  CSSResultGroup,
  customElement,
} from '@phase2/outline-core';

// import { customElement } from 'lit/decorators.js';
// import { SlotController } from '../../controllers/slot-controller';
import { SlotController } from '@phase2/outline-core';
import componentStyles from './sb-section-link.css.lit';

/**
 * The Outline Admin Links component
 * @element outline-admin-links
 * @slot link - Slot for link.
 * @slot badge - Slot for badge.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement('sb-section-link')
export class SbSectionLink extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    false // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  render(): TemplateResult {
    return html`
      <div class="sb-link">
        <slot name="badge"></slot>
        <slot name="link"></slot>
      </div>
    `;
  }
}
