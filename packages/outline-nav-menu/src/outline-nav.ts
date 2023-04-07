import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement, MobileController } from '@phase2/outline-core';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import componentStyles from './outline-nav.css.lit';
import { processMenuData } from './utility';
import { MenuLink, MenuNavItem } from './types';
import './outline-nav-link/outline-nav-link';
import './outline-nav-item/outline-nav-item';

/**
 * The OutlineNavMenu component
 * @element outline-nav
 */
@customElement('outline-nav')
export class OutlineNav extends OutlineElement {
  private mobileController = new MobileController(this);
  private _seed = Math.floor(Math.random() * 100000).toString();
  static styles: CSSResultGroup = [componentStyles];

  /**
   *
   */
  @property({ type: String })
  label = 'main menu';

  @queryAssignedElements({ slot: 'list', flatten: true })
  slottedListItems: Array<MenuLink> | Array<MenuNavItem>;

  @property({ type: Array })
  listItems: Array<MenuNavItem | MenuLink>;

  @property({ type: String, reflect: true })
  id = `menu-${this._seed}`;

  @property({ type: String })
  dataURL: string;

  @property({ type: Boolean })
  demo = false;

  firstUpdated() {
    this.setData();
    this.setTopLevelAttribute();
  }

  render(): TemplateResult {
    const isMobile = this.mobileController.isMobile;

    return html`<div class="outline-nav">
      <nav aria-label="${this.label}" class="nav--main">
        <ul
          class="outline-nav nav--main-list ${isMobile ? 'mobile' : ''}"
          role="menu"
          id="ping"
        >
          ${
            !this.listItems?.length
              ? html`<slot class="nav--main-list-slot" name="list"></slot>`
              : this.generateListItemsFromData()
          }
        </ul>
      </nav>
    </div>`;
  }

  setData() {
    if (
      (this.listItems && this.listItems.length) ||
      (!this.listItems && !this.dataURL)
    ) {
      return;
    }
    if (!this.listItems && this.dataURL) {
      this.setListItemData(this.dataURL);
    }
  }

  async fetchMenuData(url: string) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      // @ts-expect-error because-console-log
      console.error(error);
      return 'error';
    }
  }

  async setListItemData(url: string) {
    const fetchResponse = await this.fetchMenuData(url);
    if (fetchResponse && fetchResponse !== 'error') {
      const data = processMenuData(fetchResponse);
      if (data?.length) {
        this.listItems = data;
      }
    }
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
          toplevel
          .item=${item}
          slot="list"
        ></outline-nav-link>`;
      }
    });
  }
}
