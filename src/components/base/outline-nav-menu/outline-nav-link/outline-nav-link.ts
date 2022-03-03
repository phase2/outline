import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../outline-element/outline-element';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import componentStyles from './outline-nav-link.css.lit';

import { MenuLink } from '../outline-nav/outline-nav';

/**
 * The OutlineNavLink component
 * @element outline-nav-link
 */
@customElement('outline-nav-link')
export class OutlineNavLink extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: Object })
  item: MenuLink;

  @queryAssignedNodes()
  slottedLink: HTMLSlotElement[];

  render(): TemplateResult {
    return html`
      <li class="menu-link">
        ${this.item
          ? html`<a @keydown=${this.handleKeyDown} href=${this.item.url}
              >${this.item.text}</a
            >`
          : null}
        <slot></slot>
      </li>
    `;
  }

  handleKeyDown(e?: KeyboardEvent) {
    if (e?.type === 'keydown' && e.key === ' ') {
      e.preventDefault();
    }
  }
}
