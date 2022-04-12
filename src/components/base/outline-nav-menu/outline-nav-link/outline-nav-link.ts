import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../outline-element/outline-element';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import componentStyles from './outline-nav-link.css.lit';
import { MobileController } from '../../../controllers/mobile-controller';
import { classMap } from 'lit/directives/class-map.js';

import { MenuLink } from '../outline-nav/outline-nav';

/**
 * The OutlineNavLink component
 * @element outline-nav-link
 */
@customElement('outline-nav-link')
export class OutlineNavLink extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  private mobileController = new MobileController(this);

  @property({ type: Object })
  item: MenuLink;

  @property({ type: Boolean })
  toplevel: boolean;

  @queryAssignedNodes()
  slottedLink: HTMLSlotElement[];

  @property({ type: Boolean })
  isMobile: boolean = this.mobileController.isMobile;

  render(): TemplateResult {
    const wrapperClasses = {
      'menu-link': !this.toplevel,
      'menu-link--main': this.toplevel,
      'mobile': this.isMobile,
    };

    return html`
      <li class="${classMap(wrapperClasses)}">
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
