import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-accordion-panel.css.lit';
import { MobileController } from '../../controllers/mobile-controller';
import '../outline-icon/outline-icon';

/**
 * The OutlineAccordionPanel component
 * @element outline-accordion-panel
 * @slot heading: The title text for the panel component.
 * @slot default slot: The main panel content, visible when the panel is open.
 */
@customElement('outline-accordion-panel')
export class OutlineAccordionPanel extends OutlineElement {
  private mobileController = new MobileController(this);

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
  @property({ type: Boolean })
  active = false;

  /**
   * Used to provided a unique ID
   * for accordion component and accessibility purposes.
   */
  @property({ type: String, reflect: true })
  id: string = Math.floor(Math.random() * 10000).toString();

  render(): TemplateResult {
    const isMobile = this.mobileController.isMobile ? 'mobile' : null;
    const isClean = this.clean ? 'clean' : null;
    const isActive = this.active ? 'active' : 'inactive';

    return html` <div class="accordion-panel ${isClean}">
      <h4 class="accordion-heading">
        <button
          class="accordion-button
        ${isMobile}
        ${isActive}
        ${isClean}
        "
          id="${this.id}-button"
          aria-expanded=${this.active}
          aria-controls="${this.id}-info"
        >
          <span class="accordion-label ${isMobile}">
            <slot name="heading"> </slot>
          </span>
          <span
            class="accordion-icon
          ${isMobile}
          ${isActive}
          ${isClean}
          "
          >
            <outline-icon
              name="${this.active ? 'chevron-up' : 'chevron-down'}"
            ></outline-icon>
          </span>
        </button>
      </h4>
      <div
        class="accordion-content ${isMobile}"
        role="region"
        aria-labelledby="${this.id}-button"
        id="${this.id}-info"
        .hidden=${!this.active}
        aria-hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    </div>`;
  }
}
