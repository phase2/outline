import { LitElement, TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { queryAll, queryAssignedNodes, customElement } from 'lit/decorators.js';
//import componentStyles from './outline-element.base.css.lit';

@customElement('outline-element')
export class OutlineElement extends LitElement {
  //static styles: CSSResultGroup = [componentStyles];

  // Get all slots on an element.
  @queryAll('slot')
  _slots: NodeListOf<HTMLElement>;

  // get this._slots.forEach((slot) => {

  // });
  // Get all nodes inside the header slot.
  // @queryAssignedNodes('header')
  // _headerNodes: NodeListOf<HTMLElement>;

  // Get all the nodes inside of the default (unnamed) slot.
  @queryAssignedNodes()
  _defaultSlotNodes: NodeListOf<HTMLElement>;

  // private _shadowShim() {
  //   const slotContent;
  //   return slotContent: NodeListOf<HTMLElement>
  // }

  // get _slottedChildren() {
  //   const slot = this.shadowRoot.querySelector('slot');
  //   const childNodes = slot.assignedNodes({flatten: true});
  //   return Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
  // }

  // Empty render function. Cool.
  // render(): TemplateResult {
  //   return html``;
  // }

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
