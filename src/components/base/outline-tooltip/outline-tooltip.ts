import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import componentStyles from './outline-tooltip.css.lit';

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
   * Identifies the component as a tooltip for accessibility technologies.
   */
  @property({ type: String, reflect: true }) role = 'tooltip';

  /**
   * An optional prop to pass the tip info. Can also be passed via the
   * "tip-info" slot.
   */
  @property() tip: string | HTMLElement | void;

  /**
   * Sets the position of the tool-tip display on hover.
   */
  @property({ type: String }) position: TooltipPosition = 'bottom';

  render(): TemplateResult {
    return html`
      <div class="tooltip" id=${this.id}>
        <slot></slot>
        <div class="tooltip-tip position-${this.position}">
          <slot name="tip-info"> ${unsafeHTML(`${this.tip}`)} </slot>
        </div>
      </div>
    `;
  }
}
