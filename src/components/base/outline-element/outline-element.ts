import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-element.base.css.lit';
import { bubbledEvents } from '../../../../outline.config.js';

@customElement('outline-element')
export class OutlineElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles];

  connectedCallback() {
    super.connectedCallback();

    this.addBubbledEventHandlers();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  /**
   * Some events like `submit` do not reach outside of the shadow DOM. We want to redispatch these events so they can travel up the tree and be used by things like Google Tag Manager.
   * Please note: Since we are redispatching these events listeners up the tree cannot do things like prevent the default action of the event, they can only watch the copies.
   */
  addBubbledEventHandlers() {
    bubbledEvents.forEach(eventName => {
      this.shadowRoot?.addEventListener(eventName, event => {
        // eslint-disable-next-line
        // @ts-ignore
        const eventForLightDOM: Event = new event.constructor(
          event.type,
          event
        );
        this.dispatchEvent(eventForLightDOM);
      });
    });
  }

  /**
   * Create a conditional slot.
   *
   * Generates the slot if there is slotted content. Includes a wrapper:
   * ```
   * <div id="header">
   *   <slot name="outline-element--header"></slot>
   * </div>
   * ```
   */
  protected _conditionalSlotTemplate({
    elementName,
    slotNameStub,
    wrapperElementType = 'div',
    ariaLabel = null,
  }: {
    elementName: string;
    slotNameStub: string;
    wrapperElementType?: string;
    ariaLabel?: string | null;
  }): TemplateResult | null {
    const namespacedSlotName = `${elementName}--${slotNameStub}`;

    return this.querySelector(`[slot="${namespacedSlotName}"]`) !== null
      ? html`<${unsafeStatic(
          wrapperElementType
        )} id="${slotNameStub}" aria-label="${ifDefined(ariaLabel)}">
          <slot
            name="${namespacedSlotName}"
            @slotchange="${() => this.requestUpdate()}"
          ></slot>
        </${unsafeStatic(wrapperElementType)}>`
      : null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-element': OutlineElement;
  }
}
