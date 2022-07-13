import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, query } from 'lit/decorators.js';
import Splide from '@splidejs/splide';
import componentStyles from './outline-carousel.css.lit';

/**
 * The Carousel component
 * @element outline-carousel
 * @slot slide-<number> - slots are generated in code, component accepts stack of desired elements to display
 */
@customElement('outline-carousel')
export class OutlineCarousel extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @query('.splide')
  splideEl: HTMLElement;

  @query('.splide__arrow--prev')
  prevBtn: HTMLElement;

  @query('.splide__arrow--next')
  nextBtn: HTMLElement;

  splide: Splide;

  observer: MutationObserver;

  firstUpdated() {
    this.splide = new Splide(this.splideEl, {
      keyboard: true,
      arrows: true,
    }).mount();

    // adds spans to buttons for screen readers
    this.prevBtn.innerHTML += '<span class="sr-only">Previous Slide</span>';
    this.nextBtn.innerHTML += '<span class="sr-only">Next Slide</span>';
    this.setSlots();
  }

  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(this.setSlots);
    this.observer.observe(this, { childList: true });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  render(): TemplateResult {
    return html`
      <section class="splide">
        <div class="splide__track">
          <div class="splide__list">${this.slideListTemplate()}</div>
        </div>
      </section>
    `;
  }

  slideListTemplate = (): TemplateResult[] => {
    const templateArr: TemplateResult[] = [];

    for (let counter = 0; counter < this.childElementCount; counter++) {
      templateArr.push(
        html` <div
          class="splide__slide"
          role="group"
          aria-label="slide ${counter + 1} of ${this.childElementCount}"
        >
          <slot name="slide-${counter + 1}"></slot>
          <div aria-hidden="true" class="slide-count">
            <span>${counter + 1} / ${this.childElementCount}</span>
          </div>
        </div>`
      );
    }

    return templateArr;
  };

  setSlots = () => {
    for (let counter = 0; counter < this.childElementCount; counter++) {
      if (this.children[counter]) {
        this.children[counter].setAttribute('slot', `slide-${counter + 1}`);
      }
    }
    this.requestUpdate();
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-carousel': OutlineCarousel;
  }
}
