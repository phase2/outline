import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../outline-element/outline-element';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import componentStyles from './outline-nav.css.lit';
import { MobileController } from '../../../controllers/mobile-controller';

import '../outline-nav-link/outline-nav-link';
import '../outline-nav-item/outline-nav-item';

export type MenuLink = {
  text: string;
  url: string;
};

export type MenuNavItem = {
  text: string;
  sub?: MenuLink[] | MenuNavItem[] | undefined;
  url?: string;
};

export type MainNavData = {
  mainNav: MenuNavItem[];
};

/**
 * The OutlineNavMenu component
 * @element outline-nav
 */
@customElement('outline-nav')
export class OutlineNav extends OutlineElement {
  private mobileController = new MobileController(this);
  private _seed = Math.floor(Math.random() * 100000).toString();
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  title: string;

  @queryAssignedElements({ slot: 'list', flatten: true })
  slottedListItems: Array<MenuLink> | Array<MenuNavItem>;

  @property({ type: Array })
  listItems: Array<MenuNavItem | MenuLink>;

  @property({ type: String, reflect: true })
  id = `menu-${this._seed}`;

  firstUpdated() {
    this.setTopLevelAttribute();
  }

  render(): TemplateResult {
    const isMobile = this.mobileController.isMobile;

    return html`<div class="outline-nav">
      ${this.title
        ? () => html` <header class="header">
            <slot name="header"></slot>
          </header>`
        : null}
      <nav aria-label="" class="nav--main">
        <ul
          class="outline-nav nav--main-list ${isMobile ? 'mobile' : ''}"
          role="menu"
          id="ping"
        >
          ${!this.listItems?.length
            ? html`<slot class="nav--main-list-slot" name="list"></slot>`
            : this.generateListItemsFromData()}
        </ul>
      </nav>
    </div>`;
  }

  setTopLevelAttribute() {
    if (!this.listItems) {
      [...this.slottedListItems].map(el =>
        // @ts-expect-error because ts
        el.setAttribute('toplevel', 'toplevel')
      );
    }
  }

  generateListItemsFromData() {
    return this.listItems?.map((listItem: MenuLink | MenuNavItem) => {
      const hasSubList = Object?.keys(listItem)?.includes('sub') ? true : false;
      if (hasSubList) {
        const item = listItem as MenuNavItem;
        return html`<outline-nav-item
          toplevel
          .parentID=${this.id}
          .item=${item}
          slot="list"
        ></outline-nav-item>`;
      } else {
        const item = listItem as MenuLink;
        return html`<outline-nav-link
          .item=${item}
          slot="list"
        ></outline-nav-link>`;
      }
    });
  }
}
