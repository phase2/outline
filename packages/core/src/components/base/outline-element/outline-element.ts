import { LitElement } from 'lit';
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
}
