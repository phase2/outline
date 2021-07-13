import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { OutlineElement } from '../outline-element/outline-element';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import componentStyles from './outline-accordion.css.lit';

export type AccordionPanel = {
  heading: string;
  // TODO: Discuss removing "@typescript-eslint/no-explicit-any" rule. Potentially change to content: any.
  content: unknown;
};

/**
 * Accordion Component
 * @element outline-accordion
 */
@customElement('outline-accordion')
export class OutlineAccordion extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The data aray of <AccordionPanel> objects.
   * AccordionPanel.content is of indeterminate type, and is passed into the panel <slot>.
   */
  @property({ type: Array }) data!: AccordionPanel[];
  /**
   * Set to 'true' to create an accordion that can only have one panel open ata a time.
   */
  @property({ type: Boolean }) singlePanel = false;

  /**
   * ID of the most recently triggered panel.
   * If the id is new, sets focus on the panel content div to facilitate screen readers.
   */
  @state() focused: string;

  /**
   * Array of active/open panels.
   */
  @state() active: string[] = [];

  /**
   * Used to provied a unique ID to panel content <div> for accessibility purposes.
   */
  seed = Math.floor(Math.random() * 10000);

  render(): TemplateResult {
    return html`
      <div class="accordion">
        ${this.data.map(
          (panel, index) =>
            html` <div class="accordion-panel">
              <h4 class="accordion-heading">
                <button
                  class="accordion-buttton"
                  aria-expanded=${this.active.includes(`${this.seed}-${index}`)}
                  aria-controls="${this.seed}-${index}"
                  @click=${() => this.toggleHidden(`${this.seed}-${index}`)}
                >
                  ${panel.heading}
                </button>
              </h4>
              <div
                class="accordion-content"
                id="${this.seed}-${index}"
                .hidden=${!this.active.includes(`${this.seed}-${index}`)}
                tabindex="0"
              >
                ${unsafeHTML(`${panel.content}`)}
              </div>
            </div>`
        )}
      </div>
    `;
  }

  setActive(contentId: string) {
    if (this.singlePanel) {
      if (this.isActive(contentId)) {
        return (this.active = []);
      }
      return (this.active = [contentId]);
    }
    if (this.isActive(contentId)) {
      return (this.active = this.active.filter(item => item !== contentId));
    }
    return this.active.push(contentId);
  }

  setFocused(contentId: string) {
    this.focused === contentId
      ? (this.focused = '')
      : (this.focused = contentId);
  }

  /**
   *
   * Dupliacted/un-utilized in the template due to lit-plugin error
   * Type '() => boolean' is not assignable to 'boolean'lit-plugin(no-incompatible-type-binding)(2304)
   */

  isActive(contentId: string): boolean {
    return this.active.includes(contentId);
  }

  toggleHidden(contentId: string) {
    this.setActive(contentId);
    this.setFocused(contentId);
    this.requestUpdate();
  }

  updated() {
    const focusEle = this.shadowRoot?.getElementById(this.focused);
    focusEle?.focus();
  }
}
