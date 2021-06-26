import { html, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { OutlineElement } from '../outline-element/outline-element';
import { jarallax } from 'jarallax';
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

  @query('figure')
  parallaxContainer: HTMLElement;

  /**
   * Should this image be a parallax instance?
   */
  @property({ reflect: true })
  parallax: boolean;

  @state()
  hasCaptionSlot: boolean;

  toggleParallax(): void {
    if (this.parallax) {
      // Start Jarallax.js
      jarallax(this.parallaxContainer, {
        speed: '0.5',
        imgElement: this.querySelector('img'),
      });
    } else {
      jarallax(this.parallaxContainer, 'destroy');
    }
  }

  firstUpdated(): void {
    this.hasCaptionSlot = this.querySelector('[slot="caption"]') !== null;
    this.toggleParallax();
  }

  captionSlotTemplate(): TemplateResult | null {
    return !this.hasCaptionSlot ? null : html`<slot name="caption"></slot>`;
  }

  render(): TemplateResult {
    return html`
      <figure><slot></slot></figure>
      <figcaption>${this.captionSlotTemplate()}</figcaption>
    `;
  }
}
