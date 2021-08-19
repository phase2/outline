import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-list.css.lit';
import '../outline-link/outline-link';

export type ListType = 'ol' | 'ul' | 'div';

export type ListOrientation = 'column' | 'row';

/**
 * The OutlineList component
 * @element outline-list
 * @slot default slot
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

  render(): TemplateResult {
    return this.navLabel
      ? html`
          <slot name="heading"></slot>
          <nav aria-label="${this.navLabel}">${this.listCase()}</nav>
          <slot name="footer"></slot>
        `
      : html`<slot name="header"></slot>
          ${this.listCase()}
          <slot name="footer"></slot>`;
  }

  listCase() {
    switch (this.listType) {
      case 'ol':
        return html`
          <ol class="list ${this.orientation}">
            <slot></slot>
          </ol>
        `;
      case 'ul':
        return html`
          <ul class="list ${this.orientation}">
            <slot></slot>
          </ul>
        `;
      default:
        return html`
          <div class="list ${this.orientation}">
            <slot></slot>
          </div>
        `;
    }
  }
}
