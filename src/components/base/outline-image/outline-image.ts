import { html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { SlotController } from '../../controllers/slot-controller';
import { OutlineElement } from '../outline-element/outline-element';
import componentStyles from './outline-image.css.lit';

export const aspectRatios = [
  'default',
  '1/1',
  '3/2',
  '3/4',
  '4/3',
  '5/4',
  '16/9',
  '9/16',
  '21/9',
] as const;
export type AspectRatios = typeof aspectRatios[number];
/**
 * The image component, with support for parallax scrolling.
 * @element outline-image
 * @extends OutlineElement
 * @see https://codepen.io/alvarotrigo/pen/OJxOrOg
 * @see https://keithclark.co.uk/articles/pure-css-parallax-websites/demo3/
 * @slot - The image to be presented.
 * @slot caption - The caption text for the image.
 */
@customElement('outline-image')
export class OutlineImage extends OutlineElement {
  slots = new SlotController(this, true);
  static styles = [componentStyles];

  @state() hasCaptionSlot: boolean;

  /**
   * Image url
   */
  @property({ type: String, attribute: 'image-href' })
  imageHref: string | boolean = false;

  /**
   * Image text
   */
  @property({ type: String, attribute: 'image-label' })
  imageLabel: string | boolean = false;

  /**
   * Image aspect ratio.
   *
   * This value can be customized per image usage.
   * It will work with the property usages of image-href and image-label.
   *
   * If using a slotted image, it will work if the structure is an
   * img tag wrapped in a picture tag.
   *
   * @todo: Add image ratio per breakpoint.
   */
  @property({ type: String, attribute: 'image-ratio', reflect: true })
  imageRatio: AspectRatios;

  firstUpdated(): void {
    this.hasCaptionSlot = this.slots.test('caption');
  }

  captionSlotTemplate(): TemplateResult | null {
    return !this.hasCaptionSlot
      ? null
      : html`<figcaption><slot name="caption"></slot></figcaption>`;
  }

  render(): TemplateResult {
    return html`${this.imageHref
      ? html` <figure>
          <picture>
            <img src=${this.imageHref} alt="${ifDefined(this.imageLabel)}" />
          </picture>
        </figure>`
      : html`<figure><slot></slot></figure>`}
    ${this.captionSlotTemplate()} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-image': OutlineImage;
  }
}
