import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-grid.css.lit';
import { ifDefined } from 'lit/directives/if-defined';
import type { HorizontalAlignment, Size } from '../outline-element/utils/types';
import '../outline-container/outline-container';
/**
 * The Outline Grid component
 * @attr has-padding - passed to outline-container wrapper.
 * @attr full-bleed - passed to outline-container wrapper.
 * @attr container-align - passed to outline-container wrapper.
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-grid')
export class OutlineGrid extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Whether or not this container has padding.
   */
  @property({ type: Boolean, reflect: true })
  hasPadding = true;

  /**
   * Whether or not this is a full bleed container.
   */
  @property({ type: Boolean, reflect: true })
  fullBleed = false;

  /**
   * The horizontal position of the container.
   */
  @property({ type: String, reflect: true })
  containerAlign: HorizontalAlignment = 'center';

  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSize: Size = 'small';

  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeSm: Size;

  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeMd: Size;

  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeLg: Size;

  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeXl: Size;

  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeXxl: Size;

  /**
   * How much of a gap should exist between columns on extra extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true }) gapSizeXXxl: Size;

  render(): TemplateResult {
    return html`
      <outline-container
        has-padding="${ifDefined(this.hasPadding)}"
        full-bleed="${ifDefined(this.fullBleed)}"
        container-align="${ifDefined(this.containerAlign)}"
      >
        <slot></slot>
      </outline-container>
    `;
  }
}
