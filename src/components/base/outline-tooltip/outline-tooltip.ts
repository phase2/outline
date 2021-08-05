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
   *  An ID string that associated components can use for
   *  accessibility/screen reader compliance.
   */
  @property({ type: String }) id: string;

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

  /**
   * Ref to tooltip button.
   */
  @query('#tip-button') tipButton: HTMLButtonElement;

  /**
   * Used to provied a unique ID if no id prop supplied.
   */
  seed = Math.floor(Math.random() * 10000);

  render(): TemplateResult {
    return html`
      <div
        class="tooltip"
        @mouseover=${this.adjustRect}
        @mouseout=${this.toggleHidden}
        @keydown=${this.onEsc}
        tabindex="-1"
      >
        <slot
          aria-describedby=${this.id ? this.id : `tooltip-${this.seed}`}
        ></slot>
        <div class="tooltip-tip position-${this.position}">
          ${!this.tip
            ? html`<slot
                id=${this.id ? this.id : `tooltip-${this.seed}`}
                name="tip-info"
              ></slot>`
            : html`<div
                class="tip-info"
                id=${this.id ? this.id : `tooltip-${this.seed}`}
              >
                ${unsafeHTML(`${this.tip}`)}
              </div>`}
          <outline-button
            id="tip-button"
            aria-label="close tooltip"
            @click="${this.close}"
            aria-hidden="true"
          ></outline-button>
        </div>
      </div>
    `;
  }

  /**
   * Hides tooltip on 'esc' keypress.
   * Works with screen readers only.
   */
  onEsc = (event: KeyboardEvent) =>
    event.key === 'Escape' ? this.close() : null;

  /**
   * Toggles button aria-hidden state.
   */
  toggleHidden() {
    const isHidden =
      this.tipButton.getAttribute('aria-hidden') === 'true' ? 'false' : 'true';
    this.tipButton.setAttribute('aria-hidden', isHidden);
  }

  /**
   * Hides the tooltip.
   */
  close() {
    const ele = this.shadowRoot?.querySelector('.tooltip-tip') as HTMLElement;
    ele.setAttribute('style', 'display: none;');
    this.toggleHidden();
  }

  /**
   * Checks if the tooltip is visible. If not sets potition to the opposite side.
   * TODO: Maybe come up with better recursive solution to check all possible positions.
   */
  adjustRect() {
    const rect = this.tipString
      ? (this.tipString?.getBoundingClientRect() as DOMRect)
      : (this.tipSlot[0]?.getBoundingClientRect() as DOMRect);

    this.toggleHidden();
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
