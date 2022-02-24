import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-grid.css.lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { HorizontalAlignment, Size } from '../outline-element/utils/types';
import '../outline-container/outline-container';
/**
 * The Outline Grid component
 * @attr x-padding - passed to outline-container wrapper.
 * @attr y-padding - passed to outline-container wrapper.
 * @attr full-bleed - passed to outline-container wrapper.
 * @attr container-align - passed to outline-container wrapper.
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-grid')
export class OutlineGrid extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Whether or not this container has left/right padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'x-padding',
  })
  xPadding = false;

  /**
   * Whether or not this container has left/right padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'y-padding',
  })
  yPadding = false;

  /**
   * Whether or not this is a full bleed container.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'full-bleed',
  })
  fullBleed = false;

  /**
   * The horizontal position of the container.
   */
  @property({
    type: String,
    reflect: true,
    attribute: 'container-align',
  })
  containerAlign: HorizontalAlignment = 'center';

  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size' })
  gapSize: Size = 'small';

  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-sm' })
  gapSizeSm: Size;

  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-md' })
  gapSizeMd: Size;

  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-lg' })
  gapSizeLg: Size;

  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xl' })
  gapSizeXl: Size;

  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xxl' })
  gapSizeXxl: Size;

  /**
   * How much of a gap should exist between columns on extra extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xxxl' })
  gapSizeXxxl: Size;

  render(): TemplateResult {
    return html`
      <outline-container
        ?x-padding="${this.xPadding}"
        ?y-padding="${this.yPadding}"
        ?full-bleed="${this.fullBleed}"
        container-align="${ifDefined(this.containerAlign)}"
      >
        <slot></slot>
      </outline-container>
    `;
  }
}
