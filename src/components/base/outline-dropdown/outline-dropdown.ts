import { html, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit, waitForEvent } from '../../../internal/event';
import { watch } from '../../../internal/watch';
import componentStyles from './outline-dropdown.css.lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import '../outline-button/outline-button';
import '../outline-icon/outline-icon';
import { SlotController } from '../../controllers/slot-controller';
import { LinkTargetType } from '../outline-link/config';
import { ButtonVariant } from '../outline-button/outline-button';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @element outline-dropdown
 * @since 1.0.0
 * @status experimental
 *
 * @slot header - Content to be rendered in the header of the dropdown.
 * @slot dropdown - Content to be rendered in the dropdown.
 * @slot footer - Content to be rendered in the footer of the dropdown.
 *
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

  @query('.dropdown__trigger')
  trigger: HTMLElement;

  @query('.dropdown__panel')
  panel: HTMLElement;

  /**
   * Indicates whether or not the dropdown is open.
   * You can use this in lieu of the show/hide methods.
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-open' })
  isOpen = false;

  /**
   * Disables the dropdown so the panel will not open.
   */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  /**
   * Determines if the dropdown trigger is a link or not.
   */
  @property({ type: Boolean, attribute: false })
  isLink = false;

  /**
   * The dropdown will close when the user interacts outside of this element (e.g. clicking).
   */
  @property({ attribute: false })
  containingElement?: HTMLElement;

  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  @property({ type: String, attribute: 'trigger-url' })
  triggerUrl: string;

  /**
   * Visible text for the button/link of the trigger element.
   */
  @property({ type: String, attribute: 'trigger-text' })
  triggerText: string;

  /**
   * ARIA label attribute to pass down to the resulting button or a
   * element. This is required for accessibility if we use a button
   * with an icon only.
   */
  @property({ type: String, attribute: 'trigger-label' })
  triggerLabel: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @property({ type: String, attribute: 'trigger-target' })
  triggerTarget: LinkTargetType;

  /**
   * The button style variant to use.
   */
  @property({ type: String, attribute: 'trigger-variant' })
  triggerVariant: ButtonVariant = 'none';

  @state() hasHeader: boolean;
  @state() hasDropdown: boolean;
  @state() hasFooter: boolean;

  connectedCallback() {
    super.connectedCallback();
    this.hasDropdown = this.slots.test('dropdown');
    this.hasHeader = this.slots.test('header');
    this.hasFooter = this.slots.test('footer');
    // @todo: Is any of this needed?
    this.handleButtonTrigger = this.handleButtonTrigger.bind(this);
    this.handleIconTrigger = this.handleIconTrigger.bind(this);
    this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
    this.handleEscKeyDown = this.handleEscKeyDown.bind(this);
    this.handleTabKeyDown = this.handleTabKeyDown.bind(this);

    if (!this.containingElement) {
      this.containingElement = this;
    }
  }

  debugSlots() {
    // console.log(this.slots);
    // console.log(`Dropdown Slot: ${this.hasDropdown}`);
    // console.log(`Header Slot: ${this.hasHeader}`);
    // console.log(`Footer Slot: ${this.hasFooter}`);
  }

  updated() {
    // This check is required for "dropdown" without
    // a panel slot.
    if (this.panel) {
      this.panel.hidden = !this.isOpen;
    }
    this.debugSlots();
  }

  firstUpdated() {}

  disconnectedCallback() {
    super.disconnectedCallback();
    this.hide();
  }

  /**
   * Shows the dropdown panel.
   */
  async show() {
    // If the dropdown is already open, do nothing.
    // If the dropdown is disabled, do nothing.
    if (this.isOpen || this.isDisabled) {
      return undefined;
    }

    this.panel.hidden = false;
    this.isOpen = true;
    return waitForEvent(this, 'outline-after-show');
  }

  /**
   * Hides the dropdown panel
   */
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
      // Show the panel.
      emit(this, 'outline-show');
      emit(this, 'outline-after-show');
    } else {
      // Hide the panel.
      emit(this, 'outline-hide');
      emit(this, 'outline-after-hide');
    }
  }

  handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the containing element
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }

  handleEscKeyDown(event: KeyboardEvent) {
    // Close when escape is pressed.
    if (event.key === 'Escape') {
      this.hide();
      return;
    }
  }

  handleTabKeyDown(event: KeyboardEvent) {
    // Handle tabbing
    if (event.key === 'Tab') {
      // Tabbing within an open menu should close the dropdown and refocus the trigger
      if (this.isOpen) {
        event.preventDefault();
        this.hide();
        return;
      }

      // Tabbing outside of the containing element closes the panel
      //
      // If the dropdown is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(() => {
        const activeElement =
          this.containingElement?.getRootNode() instanceof ShadowRoot
            ? document.activeElement?.shadowRoot?.activeElement
            : document.activeElement;

        if (
          !this.containingElement ||
          activeElement?.closest(
            this.containingElement.tagName.toLowerCase()
          ) !== this.containingElement
        ) {
          this.hide();
        }
      });
    }
  }

  handleEnterKeyDown(event: KeyboardEvent, isIcon = false) {
    if (event.key === 'Enter') {
      // This button is disabled.
      // Prevent the panel from being opened via keyboard.
      if (this.isDisabled) {
        event.preventDefault();
        return;
      }

      // This button is a link.
      // Prevent the panel from being opened via keyboard.
      // Instead, the Enter key will navigate to the trigger url.
      if (this.triggerUrl && !isIcon) {
        return;
      }

      this.isOpen ? this.hide() : this.show();
      //this.isOpen ? this.focusOnPanel() : null;
      return;
    }
  }

  handlePanelKeystrokes(event: KeyboardEvent) {
    this.handleEscKeyDown(event);
    this.handleTabKeyDown(event);
    // Wait for the next element to be selected.
    setTimeout(() => {
      if (document.activeElement !== this) {
        this.hide();
      }
    }, 0);
  }

  handleIconTrigger(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.isOpen ? this.hide() : this.show();
    }
  }

  handleButtonTrigger(event: KeyboardEvent) {
    this.handleEnterKeyDown(event);
  }

  /**
   * @todo: Ensure there IS a dropdown before triggering the functionality.
   * @returns {TemplateResult}
   */
  render(): TemplateResult {
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
        >
          <outline-button
            button-variant="${ifDefined(this.triggerVariant)}"
            button-target="${ifDefined(this.triggerTarget)}"
            button-url="${ifDefined(this.triggerUrl)}"
            button-label="${ifDefined(this.triggerLabel)}"
            @keydown="${this.handleButtonTrigger}"
            ?is-disabled=${this.isDisabled}
          >
            <span>${this.triggerText}</span> ${this.iconTemplate()}
          </outline-button>
          ${this.dropdownTemplate()}
        </span>
      </div>
    `;
  }

  /**
   * Template partial for the dropdown rendering.
   * @returns TemplateResult | null
   */
  dropdownTemplate(): TemplateResult | null {
    //console.log(this.hasDropdown);
    if (!this.hasDropdown) return null;
    //tabindex="${this.isOpen ? '0' : '-1'}"
    // console.log(this.panel);
    return html`
      <div
        class="dropdown__panel"
        aria-hidden=${this.isOpen ? 'false' : 'true'}
        aria-labelledby="dropdown"
        @keydown="${this.handlePanelKeystrokes}"
      >
        ${this.headerTemplate()}
        <slot name="dropdown"></slot>
        ${this.footerTemplate()}
      </div>
    `;
  }

  /**
   * Template partial for the icon rendering.
   * @todo: something fishy with that label attribute.
   * @returns TemplateResult | null
   */
  iconTemplate(): TemplateResult | null {
    if (!this.hasDropdown) return null;

    return html`
      <outline-icon
        slot="right"
        name="chevron-down"
        library="system"
        size="1em"
        label="${ifDefined(this.triggerUrl) ? this.triggerLabel : false}"
        @keydown="${this.handleIconTrigger}"
        tabindex="${this.triggerUrl ? '0' : '-1'}"
      ></outline-icon>
    `;
  }

  /**
   * Template partial for the header rendering.
   * @returns TemplateResult | null
   */
  headerTemplate(): TemplateResult | null {
    if (!this.hasHeader) return null;
    return html`<slot name="header"></slot>`;
  }

  /**
   * Template partial for the footer rendering.
   * @returns TemplateResult | null
   */
  footerTemplate(): TemplateResult | null {
    if (!this.hasFooter) return null;
    return html`<slot name="footer"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-dropdown': OutlineDropdown;
  }
}
