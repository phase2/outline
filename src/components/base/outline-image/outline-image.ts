import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { jarallax } from 'jarallax';
import componentStyles from './outline-image.css.lit';

@customElement('outline-image')
export class OutlineImage extends LitElement {
  static styles = [componentStyles];

  @query('figure')
  parallaxContainer: HTMLElement;

  /**
   * Should this image be a parallax instance?
   */
  @property({ reflect: true })
  parallax: boolean;

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
    this.toggleParallax();
  }

  render(): TemplateResult {
    return html`
      <figure>
        <slot name="multimedia"></slot>
      </figure>
      <figcaption>
        <slot name="caption"></slot>
      </figcaption>
    `;
  }
}
