import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import {
  customElement,
  property,
  queryAssignedNodes,
  query,
} from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import componentStyles from './outline-tooltip.css.lit';
import '../outline-button/outline-button';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * The Outline  Tooltip component
 * @slot - The default, and only slot for this element.
 * @slot tip-info - Optional slot to pass in the desired tool-tip.
 *  Can also be passed in via the "tip" property.
 */
@customElement('outline-tooltip')
export class OutlineTooltip extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   *  REQUIRED: An ID string that associated components will need for
   *  accessibility/screen reader compliance.
   */
  @property({ type: String }) id!: string;

  /**
   * An optional prop to pass the tip info. Can also be passed via the
   * "tip-info" slot.
   */
  @property() tip: string | HTMLElement | void;

  /**
   * Sets the position of the tool-tip display on hover.
   */
  @property({ type: String }) position: TooltipPosition = 'bottom';

  /**
   * Ref to element put in the tip-info slot
   */
  @queryAssignedNodes('tip-info', true) tipSlot: Array<HTMLSlotElement>;

  /**
   * Ref to string passed to tip prop.
   */
  @query('.tip-info') tipString: HTMLElement;

  render(): TemplateResult {
    return html`
      <div class="tooltip" @mouseover=${this.adjustRect}>
        <slot aria-describedby=${this.id}></slot>
        <div
          class="tooltip-tip position-${this.position}"
          id=${this.id}
          role="tooltip"
        >
          ${!this.tip
            ? html`<slot id="tip-info" name="tip-info"></slot>`
            : html`<div class="tip-info">${unsafeHTML(`${this.tip}`)}</div>`}
          <outline-button @click="${this.close}">x</outline-button>
        </div>
      </div>
    `;
  }

  /**
   * Hides the tooltip.
   */
  close() {
    const ele = this.shadowRoot?.querySelector('.tooltip-tip') as HTMLElement;
    ele.setAttribute('style', 'opacity: 0;');
  }

  /**
   * Checks if the tooltip is visible. If not sets potition to the opposite side.
   * TODO: Maybe come up with better recursive solution to check all possible positions.
   */
  adjustRect() {
    const rect = this.tipString
      ? (this.tipString?.getBoundingClientRect() as DOMRect)
      : (this.tipSlot[0]?.getBoundingClientRect() as DOMRect);

    const isVisable =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isVisable) {
      return;
    }
    if (!isVisable) {
      switch (this.position) {
        case 'top':
          this.position = 'bottom';
          this.requestUpdate();
          break;
        case 'bottom':
          this.position = 'top';
          this.requestUpdate();
          break;
        case 'left':
          this.position = 'right';
          this.requestUpdate();
          break;
        case 'right':
          this.position = 'left';
          this.requestUpdate();
          break;
      }
    }
  }
}
