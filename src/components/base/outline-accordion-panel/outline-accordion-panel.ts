import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-accordion-panel.css.lit';
import { BreakpointController } from '../../controllers/breakpoint-controller';
import { OutlineAccordion } from '../outline-accordion/outline-accordion';
import '../outline-icon/outline-icon';

/**
 * The OutlineAccordionPanel component
 * @element outline-accordion-panel
 * @extends OutlineElement
 * @slot heading: The title text for the panel component.
 * @slot default slot: The main panel content, visible when the panel is open.
 * @todo: Consider the icon as a slot.
 */
@customElement('outline-accordion-panel')
export class OutlineAccordionPanel extends OutlineElement {
  private breakpointController = new BreakpointController(this);

  static styles: CSSResultGroup = [componentStyles];

  /**
   * Sets to 'clean' variant.
   * Controlled by parent accordion component.
   */
  @property({ type: Boolean })
  clean = false;

  /**
   * Wether the panel is active/open.
   * Controlled by parent accordion component.
   */
  @property({ type: Boolean, reflect: true, attribute: true })
  active = false;

  /**
   * Used to provided a unique ID
   * for accordion component and accessibility purposes.
   */
  @property({ type: String, reflect: true })
  id: string = Math.floor(Math.random() * 10000).toString();

  render(): TemplateResult {
    const isMobile = this.breakpointController.isMobile ? 'mobile' : null;
    const isClean = this.clean ? 'clean' : null;
    const isActive = this.active ? 'active' : 'inactive';

    return html` <div class="accordion-panel ${isClean}">
      <div class="accordion-heading">
        <button
          class="accordion-button ${isMobile} ${isActive} ${isClean}"
          id="${this.id}-button"
          aria-expanded=${this.active}
          aria-controls="${this.id}-info"
          @click=${this.setActive}
        >
          <span class="accordion-label ${isMobile}">
            <slot name="heading"> </slot>
          </span>
          <span class="accordion-icon ${isMobile} ${isActive} ${isClean}">
            <outline-icon
              name="${this.active ? 'chevron-up' : 'chevron-down'}"
              size="24px"
            ></outline-icon>
          </span>
        </button>
      </div>
      <div
        class="accordion-content ${isMobile}"
        role="region"
        aria-labelledby="${this.id}-button"
        id="${this.id}-info"
        aria-hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    </div>`;
  }

  setActive() {
    const parentWrapper = this.parentElement as OutlineAccordion;
    const singlePanel = parentWrapper.singlePanel;

    if (singlePanel) {
      const activePanels = [...parentWrapper.panels].filter(
        panel => panel.active == true
      );

      if (activePanels.length < 1) {
        this.active = true;
      }

      if (activePanels.length > 0) {
        activePanels.map(panel => {
          if (panel.id === this.id) {
            this.active = false;
          } else {
            panel.active = false;
            this.active = true;
          }
        });
      }
    } else {
      this.active = !this.active;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-accordion-panel': OutlineAccordionPanel;
  }
}
