import { TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { OutlineElement, SlotController } from '@phase2/outline-core';
import '@phase2/outline-list';
import type { ListOrientation } from '@phase2/outline-list';

/**
 * The OutlineButtonGroup component
 * @element outline-button-group
 * @extends OutlineElement
 * @todo: Add styles to allow for CSS Variables to control spacing between items.
 *
 * @slot default slot.
 */
@customElement('outline-button-group')
export class OutlineButtonGroup extends OutlineElement {
  slots = new SlotController(this, false);

  /**
   * Sets orientation of list.
   * column | row
   */
  @property({ type: String })
  orientation: ListOrientation = 'row';

  /**
   * If set will wrap list in a nav tag
   * with the passed string set as the aria-label.
   */
  @property({ type: String, attribute: 'nav-label' })
  navLabel: string | undefined;

  render(): TemplateResult {
    return html`
      <outline-list
        nav-label="${ifDefined(this.navLabel)}"
        orientation="${this.orientation}"
      >
        <slot></slot>
      </outline-list>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-button-group': OutlineButtonGroup;
  }
}
