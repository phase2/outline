import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-nav-item.css.lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export type ListItem = {
  text: string;
  url: string;
  sub?: Array<ListItem>;
};

/**
 * The OutlineNavItem component
 * @element outline-nav-item
 */
@customElement('outline-nav-item')
export class OutlineNavItem extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: Object })
  item: ListItem;

  @property({ type: Boolean })
  hasButton: boolean;

  seed: string = Math.floor(Math.random() * 10000).toString();

  render(): TemplateResult {
    return html`
      <li
        class="list-item"
        role="none"
        id="list-item-${this.seed}"
        @mouseover=${this.openMenu}
        @mouseout=${this.closeMenu}
      >
        ${this.item.url
          ? this.linkTemplate(this.item)
          : this.headingTemplate(this.item)}
        ${this.hasButton ? this.buttonTemplate(this.item) : null}
        ${this.item.sub ? this.subTemplate(this.item) : null}
      </li>
    `;
  }

  linkTemplate(item: ListItem) {
    return html`
      <a
        class="list-item--link"
        id="${this.seed}-link"
        href=${item.url}
        aria-label=${item.text}
      >
        ${item.text}
      </a>
    `;
  }

  headingTemplate(item: ListItem) {
    return html`
      <h5
        class="list-item--label"
        id="${this.seed}-label"
        tabindex="0"
        aria-expanded="false"
      >
        ${item.text}
      </h5>
    `;
  }

  buttonTemplate(item: ListItem) {
    console.log('hasButton called');

    return html`
      <button
        class="list-item--button"
        id="${this.seed}-button"
        aria-controls="${this.seed}-sub-menu"
        aria-label="expand ${item.text}"
        aria-labelledby=${item.url ? '${this.seed}-link' : '${this.seed}-label'}
        @click=${this.expandMenu}
      >
        ${item.text}
      </button>
    `;
  }

  subTemplate(item: ListItem) {
    return html`
      <ul
        class="list-item--sub-menu"
        role="menu"
        aria-label="${item.text} sub menu"
      >
        ${item.sub?.map(
          subItem =>
            html`<outline-nav-item .item=${subItem}></outline-nav-item>`
        )}
      </ul>
    `;
  }

  openMenu() {
    this.shadowRoot!.children[0].setAttribute('active', 'active');
  }

  // closeMenu() {
  //   this.shadowRoot!.children[0].removeAttribute('active')
  // }
}
