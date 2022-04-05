import { TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import { SlotController } from '../../controllers/slot-controller';

export const listOrientations = [
  'column',
  'row',
  'mobile-row',
  'mobile-col',
  'col-center',
  'mobile-col-center',
] as const;

export type ListOrientation = typeof listOrientations[number];

export const columnsCount = ['2', '3', '4'] as const;

export type ColumnCount = typeof columnsCount[number];

export type ClassInfo = { [name: string]: string | boolean | number };

/**
 * The OutlineButtonGroup component
 * @element outline-button-group
 *
 * @slot default slot.
 * @slot heading: for content above the default slot.
 * @slot footer: for content below the default slot.
 */
@customElement('outline-button-group')
export class OutlineButtonGroup extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  /**
   * Sets orientation of list.
   * column | row
   */
  @property({ type: String })
  orientation: ListOrientation = 'column';

  /**
   * If set will wrap list in a nav tag
   * with the passed string set as the aria-label.
   */
  @property({ type: String, attribute: 'nav-label' })
  navLabel: string | undefined;

  /**
   *  If set, overrides orientation setting and
   *  renders list above mobile in selected number of columns.
   */
  @property({ type: String })
  columns: ColumnCount;

  render(): TemplateResult {
    return html`
      <outline-list
        listType="ul"
        nav-label="${this.navLabel}"
        orientation="${this.orientation}"
        .columns=${this.columns}
      >
        <slot></slot>
      </outline-list>
    `;
  }
}
