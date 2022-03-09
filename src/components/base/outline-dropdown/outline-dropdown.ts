import { html, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit, waitForEvent } from '../../../internal/event';
import { watch } from '../../../internal/watch';
import componentStyles from './outline-dropdown.css.lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import '../outline-button/outline-button';
import { SlotController } from '../../controllers/slot-controller';

/**
 * @slot trigger - The dropdown's trigger, usually a `<outline-button>` element.
 * @slot - The dropdown's content.
 * @event outline-show - Emitted when the dropdown opens.
 * @event outline-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event outline-hide - Emitted when the dropdown closes.
 * @event outline-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 */
@customElement('outline-dropdown')
export default class OutlineDropdown extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  @query('.dropdown__panel') panel: HTMLElement;

  /**
   * Indicates whether or not the dropdown is open.
   * You can use this in lieu of the show/hide methods.
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-open' })
  isOpen = false;

  /** Disables the dropdown so the panel will not open. */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  firstUpdated() {
    this.panel.hidden = !this.isOpen;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.hide();
  }

  /** Shows the dropdown panel. */
  async show() {
    if (this.isOpen || this.isDisabled) {
      return undefined;
    }
    this.panel.hidden = false;
    this.isOpen = true;
    return waitForEvent(this, 'outline-after-show');
  }

  // /** Hides the dropdown panel */
  async hide() {
    if (!this.isOpen) {
      return undefined;
    }
    this.panel.hidden = true;
    this.isOpen = false;
    return waitForEvent(this, 'outline-after-hide');
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.isDisabled) {
      this.isOpen = false;
      return;
    }
    if (this.isOpen) {
      // Show
      emit(this, 'outline-show');
      emit(this, 'outline-after-show');
    } else {
      // Hide
      emit(this, 'outline-hide');
      emit(this, 'outline-after-hide');
    }
  }

  handleTriggerKeyUp() {
    // Wait for the next element to be selected.
    setTimeout(() => {
      if (document.activeElement !== this) {
        this.hide();
      }
    }, 0);
  }

  render() {
    return html`
      <div
        id="dropdown"
        class=${classMap({
          'dropdown': true,
          'dropdown--open': this.isOpen,
        })}
      >
        <span
          class="dropdown__trigger"
          @mouseenter="${this.show}"
          @mouseleave="${this.hide}"
          @keydown="${this.handleTriggerKeyUp}"
        >
          <slot name="trigger"></slot>
          <div
            class="dropdown__panel"
            aria-hidden=${this.isOpen ? 'false' : 'true'}
            aria-labelledby="dropdown"
          >
            <slot name="dropdown"></slot>
            <slot name="footer"></slot>
          </div>
        </span>
      </div>
    `;
  }
}
