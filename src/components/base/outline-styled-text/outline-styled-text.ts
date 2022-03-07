import { TemplateResult, html, CSSResultGroup } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-styled-text.css.lit';
import { SlotController } from '../../controllers/slot-controller';

/**
 * The Outline Styled Text component
 * @element outline-styled-text
 * @since 1.0.0
 * @slot - default slot
 */
@customElement('outline-styled-text')
export class OutlineStyledText extends OutlineElement {
  static styles: CSSResultGroup = [OutlineElement.styles, componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
