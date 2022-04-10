import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { OutlineElement } from '../outline-element/outline-element';
import componentStyles from './outline-image.css.lit';

/**
 * The image component, with support for parallax scrolling.
 * @element outline-image
 *
 * @slot default - The image to be presented.
 * @slot caption - The caption text for the image.
 */
@customElement('outline-image')
export class OutlineImage extends OutlineElement {
  static styles = [componentStyles];

  @state()
  hasCaptionSlot: boolean;

  firstUpdated(): void {
    this.hasCaptionSlot = this.querySelector('[slot="caption"]') !== null;
  }

  captionSlotTemplate(): TemplateResult | null {
    return !this.hasCaptionSlot
      ? null
      : html`<figcaption><slot name="caption"></slot></figcaption>`;
  }

  render(): TemplateResult {
    return html`
      <figure><slot></slot></figure>
      ${this.captionSlotTemplate()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-image': OutlineImage;
  }
}
