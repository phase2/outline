import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { OutlineElement } from '../outline-element/outline-element';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import componentStyles from './outline-accordion.css.lit';

export type AccordionPanel = {
  heading: string;
  /*eslint-disable @typescript-eslint/no-explicit-any*/
  content: any;
  /*eslint-enable @typescript-eslint/no-explicit-any*/
};

/**
 * Accordion Component
 * @element outline-accordion
 */
@customElement('outline-accordion')
export class OutlineAccordion extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The panels aray of <AccordionPanel> objects.
   * AccordionPanel.content is of indeterminate type, and is passed into the panel <slot>.
   */
  @property({ type: Array }) panels!: AccordionPanel[];

  /**
   * Set to 'true' to create an accordion that can only have one panel open at a time.
   */
  @property({ type: Boolean }) singlePanel = false;

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
        ${this.panels.map(
          (panel, index) =>
            html` <div class="accordion-panel">
              <h4 class="accordion-heading">
                <button
                  class="accordion-button"
                  id="${this.seed}-${index}-button"
                  aria-expanded=${this.active.includes(`${this.seed}-${index}`)}
                  aria-controls="${this.seed}-${index}"
                  @click=${() => this.toggleHidden(`${this.seed}-${index}`)}
                  @keyup="${this.handleKeyboardNav}"
                >
                  ${panel.heading}
                </button>
              </h4>
              <div
                role="region"
                aria-labelledby="${this.seed}-${index}-button"
                class="accordion-content"
                id="${this.seed}-${index}"
                .hidden=${!this.active.includes(`${this.seed}-${index}`)}
              >
                ${unsafeHTML(`${panel.content}`)}
              </div>
            </div>`
        )}
      </div>
    `;
  }

  /**
   * Takes the element id of content <div>
   * to maintain state list of active/open panels.
   */
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

  /**
   *
   * Dupliacted/un-utilized in the template due to lit-plugin error
   * Type '() => boolean' is not assignable to 'boolean'lit-plugin(no-incompatible-type-binding)(2304)
   */

  isActive(contentId: string): boolean {
    return this.active.includes(contentId);
  }

  /**
   * Click event handler that calls setActive to update compoenent state,
   * and then initiates a compoenent update.
   */
  toggleHidden(contentId: string) {
    this.setActive(contentId);
    this.requestUpdate();
  }

  /**
   *
   * @param event
   * @returns void
   * Adds up/down arrow keyboard navigation.
   * TODO: try to refactor to something simpler.
   */
  handleKeyboardNav(event: KeyboardEvent) {
    let index = 0;
    const panels = this.shadowRoot?.querySelectorAll('.accordion-button');
    const start = Array.prototype.indexOf.call(
      panels,
      event.target as HTMLElement
    );

    // bail on wrong key
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return;
    }
    if (event.key === 'ArrowDown') {
      if (panels?.length && start + 1 > panels?.length - 1) {
        index = 0;
      } else index = start + 1;
    }
    if (event.key === 'ArrowUp') {
      if (panels?.length && start - 1 < 0) {
        index = panels?.length - 1;
      } else index = start - 1;
    }
    const focusTarget = panels?.[index] as HTMLElement;
    focusTarget.focus();
  }
}
