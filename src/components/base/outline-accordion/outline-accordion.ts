import { html, TemplateResult, CSSResultGroup } from 'lit';
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import componentStyles from './outline-accordion.css.lit';
import { MobileController } from '../../controllers/mobile-controller';

/**
 * Accordion Component
 * @element outline-accordion
 * @slot panels: For outline-accordion-panels only.
 */
@customElement('outline-accordion')
export class OutlineAccordion extends OutlineElement {
  private mobileController = new MobileController(this);

  static styles: CSSResultGroup = [componentStyles];

  /**
   * Optional title heading text.
   */
  @property({ type: String })
  label: string;

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
   * Array of active/open panels.
   */
  @state() active: string[] = [];

  /**
   * ref to <outline-accordion-panels> in panels slot.
   */
  @queryAssignedNodes('panels', true)
  panels: HTMLSlotElement[];

  render(): TemplateResult {
    return html`
      ${this.label
        ? html`<h4 class="accordion-title ${this.isMobile()}">
            ${this.label}
          </h4>`
        : null}
      <div
        class="accordion"
        @click=${this.setActive}
        @keydown=${this.handleKeyboardNav}
      >
        <slot name="panels"></slot>
      </div>
    `;
  }

  /**
   * Takes the element id of content <div>
   * to maintain state list of active/open panels.
   */
  setActive(e: PointerEvent) {
    const element = e?.target as HTMLElement;
    const contentId = element.id;

    // if single-panel = true

    if (this.singlePanel) {
      if (this.active.includes(contentId)) {
        return (this.active = []);
      }
      return (this.active = [contentId]);
    }

    // if single-panel = false

    if (this.active.includes(contentId)) {
      return (this.active = this.active.filter(item => item !== contentId));
    }
    return (this.active = [contentId, ...this.active]);
  }

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
    const focusTarget = panels?.[index] as HTMLElement;
    focusTarget.shadowRoot?.querySelector('button')?.focus();
  }

  /**
   * Sets 'clean' and 'active states on
   * child <outline-accordion-panel> elements when the accordion updates.
   */

  firstUpdated() {
    if (this.allOpen) {
      this.panels.map(panel => {
        this.active.push(panel.id);
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
    if (this.allOpen) {
      this.panels.map(panel => {
        this.active.push(panel.id);
        panel.setAttribute('active', 'active');
      });
    } else {
      this.panels.map(panel =>
        this.active.includes(panel.id)
          ? panel.setAttribute('active', 'active')
          : panel.removeAttribute('active')
      );
    }
  }
}
