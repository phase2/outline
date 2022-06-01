import { TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import { SlotController } from '../../controllers/slot-controller';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../outline-list/outline-list';
import type { ListOrientation } from '../outline-list/outline-list';

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
