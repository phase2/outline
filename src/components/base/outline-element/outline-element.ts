import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-element.base.css.lit';

@customElement('outline-element')
export class OutlineElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles];

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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
