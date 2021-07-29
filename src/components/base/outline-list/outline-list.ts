import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-list.css.lit';
import '../outline-link/outline-link';

/**
 * The OutlineList component
 * @element outline-list
 */
@customElement('outline-list')
export class OutlineList extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Document property here
   */
  @property({ type: String })
  listType: string;

  @property({ type: String, attribute: true })
  orientation: string;

  @property({ type: String, reflect: false })
  navLabel: string | undefined;

  render(): TemplateResult {
    return this.navLabel
      ? html` <nav aria-label="${this.navLabel}">${this.listCase()}</nav> `
      : html`${this.listCase()}`;
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
