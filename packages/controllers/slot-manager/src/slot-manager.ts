import { ReactiveControllerHost } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit/static-html.js';

/**
 * @typedef SlotName
 * @type {string | null}
 * @description A type for slot name.
 */
type SlotName = string | null;

/**
 * @class SlotManager
 * @description The SlotManager ReactiveController.
 * This controller allows cloning slots into the shadow DOM,
 * by calling a function inside render() of the component.
 * Any changes in the light DOM trigger requestUpdate() and thus re-cloning
 * of the slots into the shadow DOM.
 * The controller dispatches any events that were specified when they are triggered
 * in the cloned slots in shadow DOM to the equivalent light DOM slot.
 * @param {ReactiveControllerHost & Element} host - The host element.
 */
export class SlotManager {
  host: ReactiveControllerHost & Element;

  /**
   * @constructor
   * @description Store a reference to the host.
   * @param {ReactiveControllerHost & Element} host - The host element.
   */
  constructor(host: ReactiveControllerHost & Element) {
    this.host = host;
  }

  /**
   * @method getSlottedNodes
   * @description Get slotted nodes by slot name.
   * @param {SlotName} slotName - The name of the slot to search for. If null or empty string, the method will return the default slot nodes.
   * @returns {Node[] | false} An array of slotted nodes if any are found, or `false` if no slotted nodes are found.
   */
  getSlottedNodes(slotName: SlotName = null) {
    const defaultSlot = slotName === '' || slotName === null;
    let slottedNodes = [];

    if (defaultSlot) {
      slottedNodes = Array.from(this.host.childNodes).filter(
        node => this.isDefaultSlotText(node) || this.isDefaultSlotElement(node)
      );
    } else {
      slottedNodes = Array.from(
        this.host.querySelectorAll(`[slot=${slotName}]`)
      );
    }

    if (slottedNodes.length) {
      return slottedNodes;
    } else {
      return false;
    }
  }

  /**
   * @method doesSlotExist
   * @description Check if a slot exists.
   * @param {SlotName} slotName - The slot name to check for.
   * @returns {boolean} True if the slot exists, false otherwise.
   */
  doesSlotExist(slotName: SlotName = null) {
    return Boolean(this.getSlottedNodes(slotName));
  }

  /**
   * @method isDefaultSlotText
   * @description Check if a node is a default slot text.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot text, false otherwise.
   */
  isDefaultSlotText(node: Node) {
    return node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '';
  }

  /**
   * @method isDefaultSlotElement
   * @description Check if a node is a default slot element.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot element, false otherwise.
   */
  isDefaultSlotElement(node: Node) {
    return (
      node.nodeType === node.ELEMENT_NODE &&
      (node as HTMLElement).getAttribute('slot') === null
    );
  }

  /**
   * @method conditionalSlot
   * @description Conditionally render a slot with a wrapper and additional classes.
   * @param {SlotName} slotName - The slot name.
   * @param {string | null} [extraClasses=null] - Additional classes to add to the wrapper.
   * @returns {TemplateResult | null} The rendered slot or null if the slot does not exist.
   */
  conditionalSlot(
    slotName: SlotName = null,
    extraClasses: string | null = null
  ) {
    const defaultSlot = slotName === '' || slotName === null;
    const wrapperClasses = {
      'slot-default': defaultSlot,
      [`slot-${slotName}`]: !defaultSlot,
      [`${extraClasses}`]: extraClasses !== null,
    };

    if (this.doesSlotExist(slotName)) {
      return html`<div class="${classMap(wrapperClasses)}">
        <slot name="${ifDefined(defaultSlot ? undefined : slotName)}"></slot>
      </div>`;
    } else {
      return null;
    }
  }
}
