import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-list.css.lit';
import componentStyles from './outline-list.css.lit';
import '../outline-link/outline-link';
import { classMap } from 'lit/directives/class-map.js';

export const listTypes = ['ol', 'ul', 'div'] as const;

export type ListType = typeof listTypes[number];

export const listOrientations = ['column', 'row', 'col-center'] as const;

export type ListOrientation = typeof listOrientations[number];

export type ClassInfo = { [name: string]: string | boolean | number };

/**
 * The OutlineList component
 * @element outline-list
 * @extends OutlineElement
 *
 * @cssprop --outline-list-default-spacing - The default spacing between items.
 * @cssprop --outline-list-default-spacing-xs - The default spacing between items for extra small screens.
 * @cssprop --outline-list-default-spacing-sm - The default spacing between items for small screens.
 * @cssprop --outline-list-default-spacing-md - The default spacing between items for medium screens.
 * @cssprop --outline-list-default-spacing-lg - The default spacing between items for large screens.
 * @cssprop --outline-list-default-spacing-xl - The default spacing between items for extra large screens.
 * @cssprop --outline-list-default-spacing-xxl - The default spacing between items for extra extra large screens.
 * @cssprop --outline-list-default-spacing-xxxl - The default spacing between items for extra extra extra large screens.
 *
 * @slot default slot.
 * @slot heading: for content above the default slot.
 * @slot footer: for content below the default slot.
 */
@customElement('outline-list')
export class OutlineList extends OutlineElement {
  static styles: CSSResultGroup = [componentVars, componentStyles];

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

  render(): TemplateResult {
    const classes = {
      list: true,
      [`${this.orientation}`]: this.orientation,
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

declare global {
  interface HTMLElementTagNameMap {
    'outline-list': OutlineList;
  }
}
