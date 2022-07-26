import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import { customElement, query } from 'lit/decorators.js';
import Splide from '@splidejs/splide';
import componentStyles from './outline-image-slider.css.lit';

/**
 * The Image Slider component
 * @element outline-image-slider
 * @slot image-<number> - slots are generated in code, component accepts stack of desired elements to display
 */
@customElement('outline-image-slider')
export class OutlineImageSlider extends OutlineElement {
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
      keyboard: false,
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
          <div class="splide__list">${this.imageListTemplate()}</div>
        </div>
      </section>
    `;
  }

  imageListTemplate = (): TemplateResult[] => {
    let counter = 0;
    const templateArr: TemplateResult[] = [];

    while (counter < this.childElementCount) {
      templateArr.push(
        html` <div
          class="splide__slide"
          role="group"
          aria-label="slide ${counter + 1} of ${this.childElementCount}"
        >
          <slot name="image-${counter + 1}"></slot>
          <div aria-hidden="true" class="slide-count">
            <span>${counter + 1} / ${this.childElementCount}</span>
          </div>
        </div>`
      );

      counter++;
    }

    return templateArr;
  };

  setSlots = () => {
    let counter = 0;
    while (counter <= this.childElementCount) {
      if (this.children[counter]) {
        this.children[counter].setAttribute('slot', `image-${counter + 1}`);
      }
      counter++;
    }
    this.requestUpdate();
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-image-slider': OutlineImageSlider;
  }
}
