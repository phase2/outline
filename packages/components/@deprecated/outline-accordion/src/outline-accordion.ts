import { html, TemplateResult, CSSResultGroup } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import {
  OutlineElement,
  MobileController,
  SlotsController,
} from '@phase2/outline-core';
import componentStyles from './outline-accordion.css.lit';
import { OutlineAccordionPanel } from './outline-accordion-panel/outline-accordion-panel';

/**
 * Accordion Component
 * @element outline-accordion
 * @slot label: The title text for the accordion component.
 * @slot panels: For outline-accordion-panels only.
 */
@customElement('outline-accordion')
export class OutlineAccordion extends OutlineElement {
  private mobileController = new MobileController(this);
  slots = new SlotsController(this);
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Sets to 'clean' variant
   */
  @property({ type: Boolean })
  clean = false;

  /**
   * Set to 'true' to create an accordion that can only have one panel open at a time.
   */
  @property({ type: Boolean, attribute: 'single-panel' })
  singlePanel = false;

  /**
   * Set to 'true' to open all panels at once. Specifically for enhanced editor experience.
   */
  @property({ type: Boolean })
  allOpen = false;

  /**
   * Reference to <outline-accordion-panels> in panels slot.
   */
  @queryAssignedElements({ slot: 'panels' })
  panels: OutlineAccordionPanel[];

  render(): TemplateResult {
    return html`
      ${this.slots.conditionalSlot('label', false)}

      <div class="accordion" @keydown=${this.handleKeyboardNav}>
        <slot name="panels"></slot>
      </div>
    `;
  }

  /**
   * Takes the element id of content <div>
   * to maintain state list of active/open panels.
   */

  /**
   * @returns string | null
   * Checks if the window is at mobile size.
   */
  isMobile = () => (this.mobileController.isMobile ? 'mobile' : null);

  /**
   * @param event
   * @returns void
   * Adds up/down arrow keyboard navigation.
   * TODO: try to refactor to something simpler.
   */
  handleKeyboardNav(event: KeyboardEvent) {
    let index = 0;
    const panels = this.panels;
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
    const focusTarget = panels?.[index] as unknown as HTMLElement;
    focusTarget.shadowRoot?.querySelector('button')?.focus();
  }

  /**
   * Sets 'clean' and 'active states on
   * child <outline-accordion-panel> elements when the accordion updates.
   */

  firstUpdated() {
    if (this.allOpen) {
      this.panels.map(panel => {
        panel.setAttribute('active', 'active');
      });
    }
  }
  updated() {
    if (this.clean) {
      this.panels.map(panel => panel.setAttribute('clean', 'clean'));
    } else {
      this.panels.map(panel => panel.removeAttribute('clean'));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-accordion': OutlineAccordion;
  }
}
