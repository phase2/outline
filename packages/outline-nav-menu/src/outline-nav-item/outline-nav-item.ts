import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement, MobileController } from '@phase2/outline-core';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from './outline-nav-item.css.lit';
import debounce from 'lodash-es/debounce';

import '@phase2/outline-icon';
import '../outline-nav-link/outline-nav-link';
import '../outline-nav';

import { MenuLink, MenuNavItem } from '../types';

/**
 * The OutlineNavItem component
 * @element outline-nav-item
 * @slot sub - for outline-nav-item/outline-nav-link
 */
@customElement('outline-nav-item')
export class OutlineNavItem extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  private mobileController = new MobileController(this);
  private _seed = Math.floor(Math.random() * 100000).toString();

  @property({ type: Object })
  item: MenuNavItem;

  @property({ type: Boolean })
  toplevel: boolean;

  @property({ type: String, reflect: false })
  parentID: string;

  @property({ type: String })
  id = `list-item-${this._seed}`;

  @property({ type: String })
  text: string;

  @property({ type: String })
  url: string;

  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  isMobile: boolean = this.mobileController.isMobile;

  @queryAssignedElements({ slot: 'sub', flatten: true })
  subs: Array<MenuLink> | Array<MenuNavItem>;

  render(): TemplateResult {
    const wrapperClasses = {
      'list-item': !this.toplevel,
      'list-item--main': this.toplevel,
      'mobile': this.isMobile,
    };
    return html`
      <li
        class="${classMap(wrapperClasses)}"
        role="none"
        id="${this.id}"
        @mouseover=${this.desktopMouseOverOpen}
        @mouseout=${this.desktopMouseOutClose}
        ?active=${this.open}
      >
        ${this.configureTemplate()}
        ${this.isMobile ? this.buttonTemplate() : null}
        <ul
          class="list-item--sub-menu"
          role="menu"
          aria-label="${this.item ? this.item.text : this.text} sub menu"
          id="${this._seed}-sub-menu"
        >
          ${
            !this.item
              ? html`<slot name="sub"></slot>`
              : this.generateListItems()
          }
        </ul>
      </li>
    `;
  }

  firstUpdated() {
    this.handleMobileEventListener();
    window.addEventListener(
      'resize',
      debounce(() => this.handleResize(), 100)
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      'resize',
      debounce(() => this.handleResize(), 100)
    );
  }

  generateListItems() {
    if (this.item && this.item.sub) {
      return this.item.sub.map((listItem: MenuLink | MenuNavItem) => {
        const hasSubList = Object?.keys(listItem)?.includes('sub')
          ? true
          : false;
        if (hasSubList) {
          const item = listItem as MenuNavItem;
          return html`<outline-nav-item
            .parentID=${this.parentID}
            .item=${item}
          ></outline-nav-item>`;
        } else {
          const item = listItem as MenuLink;
          return html`<outline-nav-link .item=${item}></outline-nav-link>`;
        }
      });
    }
    return;
  }

  configureTemplate() {
    if (this.url || this?.item?.url) {
      return this.linkTemplate();
    }
    if (!this.url && !this?.item?.url) {
      return this.spanTemplate();
    }
    return;
  }

  linkTemplate() {
    return html`
      <a
        class="list-item--link"
        id="${this._seed}-link"
        href=${ifDefined(this.item ? this.item.url : this.url)}
        aria-label=${this.item ? this.item.text : this.text}
        aria-haspopup="true"
        aria-expanded=${this.open}
        role="menuitem"
        aria-controls="${this._seed}-sub-menu"
        @keydown=${this.handleToggleMenu}
      >
        ${this.item ? this.item.text : this.text}
      </a>
    `;
  }

  spanTemplate() {
    return html`
      <span
        class="list-item--label"
        id="${this._seed}-label"
        aria-expanded="${this.open}"
        role="menuitem"
        aria-haspopup="true"
        aria-controls="${this._seed}-sub-menu"
        tabindex=${this.isMobile ? '-1' : '0'}
        @keydown=${this.handleToggleMenu}
      >
        ${this.item ? this.item.text : this.text}
      </span>
    `;
  }

  buttonTemplate() {
    return html`
      <button
        class="list-item--button"
        id="${this._seed}-button"
        aria-controls="${this._seed}-sub-menu"
        aria-label="expand ${this.item ? this.item.text : this.text}"
        aria-expanded="${this.open}"
        aria-haspopup="true"
        aria-labelledby=${
          this?.item?.url || this.url
            ? '${this.seed}-link'
            : '${this.seed}-label'
        }
        @click=${this.handleToggleMenu}
        @keydown=${this.handleToggleMenu}
      >
        <outline-icon
          size="20px"
          class="list-item--button-icon"
          name="${this.open ? 'chevron-down' : 'chevron-up'}"
        ></outline-icon>
      </button>
    `;
  }

  desktopMouseOverOpen() {
    if (!this.isMobile) {
      this.applyActiveAttribute();
      this.open = true;
    }
  }

  desktopMouseOutClose() {
    if (!this.isMobile) {
      this.removeActiveAttribute();
      this.open = false;
    }
  }

  getSiblingNavItems() {
    return [...this.parentElement!.children]
      .map(el => el.shadowRoot?.children[0] as OutlineNavItem)
      .filter(el => el.id !== this.id);
  }

  applyMobileFlyout() {
    this.getSiblingNavItems().map(el => el.classList.add('flyaway'));
  }

  removeMobileFlyout() {
    this.getSiblingNavItems().map(el => el.classList.remove('flyaway'));
  }

  applyActiveAttribute() {
    this.shadowRoot!.children[0].setAttribute('active', 'active');
  }

  removeActiveAttribute() {
    this.shadowRoot!.children[0].removeAttribute('active');
  }

  toggleMobileFlyout() {
    this.open ? this.removeMobileFlyout() : this.applyMobileFlyout();
  }

  toggleMenu() {
    if (this.isMobile) {
      this.toggleMobileFlyout();
    }
    if (this.open) {
      this.shadowRoot!.children[0].removeAttribute('active');
      this.removeActiveAttribute();
      this.open = !this.open;
    } else {
      this.applyActiveAttribute();
      this.shadowRoot!.children[0].setAttribute('active', 'active');
      this.open = !this.open;
    }
  }

  passMobileClickToButton() {
    const childButton = [...this.children].filter(
      el => el.localName === 'button'
    )[0] as HTMLButtonElement;
    childButton?.click();
  }

  handleMobileEventListener() {
    if (this.mobileController.isMobile) {
      const thisLiElement = this.shadowRoot!.getElementById(
        this.id
      ) as HTMLElement;
      thisLiElement?.addEventListener('click', this.passMobileClickToButton);
    }
    if (!this.mobileController.isMobile) {
      const thisLiElement = document.getElementById(this.id) as HTMLElement;
      thisLiElement?.removeEventListener('click', this.passMobileClickToButton);
    }
  }

  handleToggleMenu(e: KeyboardEvent) {
    const keyed = e.type === 'keydown';
    if (keyed) {
      // make sure menu toggles only on Space and Enter keys
      if (e.key === 'Enter' || e.key === ' ') {
        // prevent scrolling on space
        if (e.key === ' ') {
          e.preventDefault();
        }

        this.toggleMenu();
      }
    } else {
      this.toggleMenu();
    }
  }

  handleResize() {
    const hasSwitched = this.isMobile !== this.mobileController.isMobile;
    if (hasSwitched) {
      this.isMobile = this.mobileController.isMobile;
      this.open = false;
      this.removeMobileFlyout();
      this.removeActiveAttribute();
      this.handleMobileEventListener();
    }
  }
}
