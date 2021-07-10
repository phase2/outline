import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '../outline-element/outline-element';
import componentStyles from './outline-accordion.css.lit';

type AccordionLeaf = {
  heading: string;
  content: unknown;
  hidden: boolean;
};

@customElement('outline-accordion')
export class OutlineAccordion extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: Array }) data!: AccordionLeaf[];

  seed = Math.floor(Math.random() * 10000);

  render(): TemplateResult {
    return html`
      <div>
        ${this.data.map(
          (leaf, index) => html` <h4>
              <button
                class="accordion-buttton"
                aria-expanded="false"
                aria-controls="${this.seed}-${index}"
                @click=${() => this.toggleHidden(leaf)}
              >
                ${leaf.heading}
              </button>
            </h4>
            <div id="${this.seed}-${index}" .hidden=${!leaf.hidden}>
              <slot name="content"> ${leaf.content} </slot>
            </div>`
        )}
      </div>
    `;
  }

  toggleHidden(leaf: AccordionLeaf) {
    leaf.hidden = !leaf.hidden;
    this.requestUpdate();
  }
}
