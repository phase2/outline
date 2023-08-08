import { TemplateResult, html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OutlineElement, SlotsController } from '@phase2/outline-core';
import componentStyles from './outline-styled-text.css.lit';

/**
 * The Outline Styled Text component
 * @element outline-styled-text
 * @since 0.0.1
 * @deprecated
 * @slot - default slot
 */
@customElement('outline-styled-text')
export class OutlineStyledText extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotsController(this);

  render(): TemplateResult {
    return html`${this.slots.renderInShadow('')}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-styled-text': OutlineStyledText;
  }
}
