import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import { SlotController } from '../../controllers/slot-controller';
import componentStyles from './outline-button-group.css.lit';
import { classMap } from 'lit/directives/class-map.js';

export const orientations = ['horizontal', 'vertical'] as const;

export type Orientation = typeof orientations[number];

/**
 * The OutlineButtonGroup component
 * @element outline-button-group
 */
@customElement('outline-button-group')
export class OutlineButtonGroup extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Determines which direction the button group is oriented
   * horizontal | vertical
   */
  @property({ type: String })
  orientation: Orientation;

  render(): TemplateResult {
    const classes = {
      [`${this.orientation}`]: this.orientation,
    };

    return html`
      <ul class=${classMap(classes)}>
        <slot></slot>
      </ul>
    `;
  }
}
