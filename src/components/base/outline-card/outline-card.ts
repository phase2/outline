import { html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap, ClassInfo } from 'lit/directives/class-map.js';
import { OutlineElement } from '../outline-element/outline-element';
import componentStyles from './outline-card.css.lit';

type AllowedColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'black'
  | 'white'
  | 'gray'
  | 'lightgray';

/**
 * The Card component.
 * @element outline-card
 * @slot header - The header slot.
 * @slot content - The primary slot to render the card content.
 * @slot footer - The footer slot.
 */
@customElement('outline-card')
export class OutlineCard extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The color class to apply to the header slot.
   */
  @property() bgColorHeader: AllowedColors;
  /**
   * The color class to apply to the content slot.
   */
  @property() bgColorContent: AllowedColors;
  /**
   * The color class to apply to the footer slot.
   */
  @property() bgColorFooter: AllowedColors;
  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @property({ type: Boolean, attribute: 'is-rounded' }) isRounded = false;
  /**
   * Whether or not this card has a shadow.
   */
  @property({ type: Boolean, attribute: 'has-shadow' }) hasShadow = false;

  @state() hasHeaderSlot: boolean;
  @state() hasContentSlot: boolean;
  @state() hasFooterSlot: boolean;

  connectedCallback(): void {
    super.connectedCallback();
    this.hasHeaderSlot = this.querySelector('[slot="header"]') !== null;
    this.hasContentSlot = this.querySelector('[slot="content"]') !== null;
    this.hasFooterSlot = this.querySelector('[slot="footer"]') !== null;
  }

  headerTemplate(headerBackgroundClasses: ClassInfo): TemplateResult | null {
    if (!this.hasHeaderSlot) return null;

    return html` <section class="${classMap(headerBackgroundClasses)}">
      <slot name="header"></slot>
    </section>`;
  }

  contentTemplate(contentBackgroundClasses: ClassInfo): TemplateResult | null {
    if (!this.hasContentSlot) return null;

    return html` <section class="${classMap(contentBackgroundClasses)}">
      <slot name="content"></slot>
    </section>`;
  }

  footerTemplate(footerBackgroundClasses: ClassInfo): TemplateResult | null {
    if (!this.hasFooterSlot) return null;

    return html` <section class="${classMap(footerBackgroundClasses)}">
      <slot name="footer"></slot>
    </section>`;
  }

  render(): TemplateResult {
    const cardClasses = {
      'card': true,
      'outline-shadow': this.hasShadow,
      'outline-rounded-2xl': this.isRounded,
    };
    const headerBackgroundClasses = {
      'card-header': true,
      [`outline-bg-${this.bgColorHeader}`]: this.bgColorHeader !== undefined,
    };
    const contentBackgroundClasses = {
      'card-content': true,
      [`outline-bg-${this.bgColorContent}`]: this.bgColorContent !== undefined,
    };
    const footerBackgroundClasses = {
      'card-footer': true,
      [`outline-bg-${this.bgColorFooter}`]: this.bgColorFooter !== undefined,
    };

    return html`
      <section class="${classMap(cardClasses)}">
        ${this.headerTemplate(headerBackgroundClasses)}
        ${this.contentTemplate(contentBackgroundClasses)}
        ${this.footerTemplate(footerBackgroundClasses)}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-card': OutlineCard;
  }
}
