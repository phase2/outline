import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-list.css.lit';
import '../outline-link/outline-link';
import { classMap } from 'lit/directives/class-map.js';

export const listTypes = ['ol', 'ul', 'div'] as const;

export type ListType = typeof listTypes[number];

export const listOrientations = [
  'column',
  'row',
  'mobile-row',
  'mobile-col',
  'col-center',
  'mobile-col-center',
] as const;

export type ListOrientation = typeof listOrientations[number];

export const dividerColors = ['blue', 'teal', 'red', 'white', 'black'] as const;

export type ListDividerColors = typeof dividerColors[number];

export const columnsCount = ['2', '3', '4'] as const;

export type ColumnCount = typeof columnsCount[number];

export type ClassInfo = { [name: string]: string | boolean | number };
/**
 * The OutlineList component
 * @element outline-list
 * @slot default slot.
 * @slot heading: for content above the default slot.
 * @slot footer: for content below the default slot.
 */
@customElement('outline-list')
export class OutlineList extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Determines which type of list is rendered.
   * ol | ul | div
   */
  @property({ type: String, attribute: 'list-type' })
  listType: ListType;

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
   * If set adds a pseudo element divider of chose color
   * between all list items. Best only for row.
   */
  @property({ type: String })
  divider: ListDividerColors;

  /**
   *  If set, overrides orientation setting and
   *  renders list above mobile in selected number of columns.
   */
  @property({ type: String })
  columns: ColumnCount;

  render(): TemplateResult {
    const classes = {
      list: !this.columns,
      grid: this.columns,
      [`${this.orientation}`]: this.orientation && !this.columns,
      divided: this.divider,
      [`${this.divider}`]: this.divider,
      [`columns--${this.columns}`]: this.columns,
    };

    return this.navLabel
      ? html`
          <slot name="heading"></slot>
          <nav role="navigation" aria-label="${this.navLabel}">
            ${this.listCase(classes)}
          </nav>
          <slot name="footer"></slot>
        `
      : html`<slot name="heading"></slot>
          ${this.listCase(classes)}
          <slot name="footer"></slot>`;
  }

  listCase(classes: ClassInfo) {
    switch (this.listType) {
      case 'ol':
        return html`
          <ol class=${classMap(classes)}>
            <slot></slot>
          </ol>
        `;
      case 'ul':
        return html`
          <ul class=${classMap(classes)}>
            <slot></slot>
          </ul>
        `;
      default:
        return html`
          <div class=${classMap(classes)}>
            <slot></slot>
          </div>
        `;
    }
  }
}
