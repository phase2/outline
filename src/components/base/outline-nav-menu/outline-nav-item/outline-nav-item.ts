import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-nav-item.css.lit';
import { MobileController } from '../../../controllers/mobile-controller';
import debounce from 'lodash-es/debounce';

import '../../outline-icon/outline-icon';
import '../outline-nav-link/outline-nav-link';
import '../outline-nav/outline-nav';

import { MenuLink } from '../outline-nav/outline-nav';
import { MenuNavItem } from '../outline-nav/outline-nav';

/**
 * The OutlineNavItem component
 * @element outline-nav-item
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

  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  isMobile: boolean = this.mobileController.isMobile;

  render(): TemplateResult {
    return html`
      <li
        class="${this.toplevel ? 'list-item--main' : 'list-item'} ${this
          .isMobile
          ? 'mobile'
          : ''}"
        role="none"
        id="${this.id}"
        @mouseover=${this.desktopMouseOverOpen}
        @mouseout=${this.desktopMouseOutClose}
        ?active=${this.open}
      >
        ${this.configureTemplate(this.item)}
        ${this.isMobile ? this.buttonTemplate(this.item) : null}
        <ul
          class="list-item--sub-menu"
          role="menu"
          aria-label="${this.item.text} sub menu"
          id="${this._seed}-sub-menu"
        >
          ${this.generateListItemsFromData(this.item.sub)}
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

  generateListItemsFromData(subs: MenuLink[] | MenuNavItem[]) {
    return subs?.map((listItem: MenuLink | MenuNavItem) => {
      const hasSubList = Object?.keys(listItem)?.includes('sub') ? true : false;
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

  configureTemplate(item: MenuNavItem) {
    if (this.item.url) {
      return this.linkTemplate(item);
    } else {
      return this.spanTemplate(item);
    }
  }

  linkTemplate(item: MenuNavItem) {
    return html`
      <a
        class="list-item--link"
        id="${this._seed}-link"
        href=${item.url!}
        aria-label=${item.text}
        aria-haspopup="true"
        aria-expanded=${this.open}
        role="menuitem"
        aria-controls="${this._seed}-sub-menu"
        @keydown=${this.handleToggleMenu}
      >
        ${item.text}
      </a>
    `;
  }

  spanTemplate(item: MenuNavItem) {
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
        ${item.text}
      </span>
    `;
  }

  buttonTemplate(item: MenuNavItem) {
    return html`
      <button
        class="list-item--button"
        id="${this._seed}-button"
        aria-controls="${this._seed}-sub-menu"
        aria-label="expand ${item.text}"
        aria-expanded="${this.open}"
        aria-haspopup="true"
        aria-labelledby=${item.url ? '${this.seed}-link' : '${this.seed}-label'}
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
    const keyed = e?.type === 'keydown';
    if (keyed) {
      // make sure menu toggles only on Space and Enter keys
      if (e?.key === 'Enter' || e?.key === ' ') {
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
