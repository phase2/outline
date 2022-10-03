import { ReactiveControllerHost } from 'lit';

/**
 * The SlotsController ReactiveController.
 *
 * This controller allows cloning slots into the shadow DOM,
 * by calling a function inside render() of the component.
 * Any changes in the light DOM trigger requestUpdate() and thus re-cloning
 * of the slots into the shadow DOM.
 * The controller dispatches Click events that are triggered in the cloned slots
 * in shadow DOM to the equivalent light DOM slot.
 *
 * @param host The host element
 */

export class SlotsController {
  host: ReactiveControllerHost & Element;
  /**
   * Watches for changes to components childlist and clones nodes to shadow dom.
   */
  _mutationObserver = new MutationObserver(this._handleMutation.bind(this));

  constructor(host: ReactiveControllerHost & Element) {
    // Store a reference to the host
    this.host = host;
    // Register for lifecycle updates
    host.addController(this);
  }

  hostConnected(): void {}

  /**
   * MutationObserver callback.
   */
  _handleMutation() {
    // disconnect observer before making updates (to avoid infinite loop when adding comment)
    this._mutationObserver.disconnect();
    this.host.requestUpdate();
  }

  slotExists(slotName = '') {
    let slottedNodes = [];

    // Replacing Outline's test function
    if (slotName !== '') {
      slottedNodes = Array.from(
        this.host.querySelectorAll(`[slot=${slotName}]`)
      );
    } else {
      slottedNodes = Array.from(this.host.childNodes).filter(
        node => this.isDefaultSlotText(node) || this.isDefaultSlotElement(node)
      );
    }

    return slottedNodes;
  }

  isDefaultSlotText(node: Node) {
    return node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '';
  }

  isDefaultSlotElement(node: Node) {
    return (
      node.nodeType === node.ELEMENT_NODE &&
      (node as HTMLElement).getAttribute('slot') === null
    );
  }

  addAnnotations(slotName: string, lightDomSlot: ChildNode) {
    // Create cloned-node element
    const clonedSlot = lightDomSlot.cloneNode(true) as HTMLElement;

    // Add a comment above the slot in light DOM, to indicate it was cloned to shadow DOM
    const annotationComment =
      `slotsController cloned this ` +
      (slotName === '' ? 'default-slot' : `named-slot '${slotName}'`) +
      ` into the shadow DOM`;

    // Add the comment only once, avoid duplicate comments when requestUpdate() runs
    // Check if a light DOM comment already exist
    const commentExist = Array.from(this.host.childNodes).some(
      node => node.nodeValue === annotationComment
    );
    if (!commentExist) {
      lightDomSlot.before(document.createComment(annotationComment));
    }

    if (slotName !== '') {
      clonedSlot.setAttribute('cloned-slot-type', 'named-slot');
      clonedSlot.setAttribute('cloned-slot-name', slotName);
      clonedSlot.removeAttribute('slot');
      return clonedSlot;
    }

    if (this.isDefaultSlotElement(lightDomSlot)) {
      clonedSlot.setAttribute('cloned-slot-type', 'default-slot--element');
      clonedSlot.setAttribute('cloned-slot-name', 'default');
      clonedSlot.removeAttribute('slot');
      return clonedSlot;
    } else {
      // Insert the text-only default slot into a node element
      const slotWrapper = document.createElement('cloned-slot');
      clonedSlot.parentNode?.insertBefore(slotWrapper, clonedSlot);
      slotWrapper.appendChild(clonedSlot);
      slotWrapper.setAttribute('cloned-slot-type', 'default-slot--text');
      slotWrapper.setAttribute('cloned-slot-name', 'default');
      return slotWrapper;
    }
  }

  renderInShadow(slotName = '', asIs = false) {
    // Cloning node allow us to re-use slots, as well a keep a copy in the light DOM.
    const allClonedSlots = this.slotExists(slotName).map(slot => {
      const lightDomSlot = slot;
      let clonedSlot: HTMLElement;

      if (asIs) {
        // Clone the slot into the shadow DOM as is
        clonedSlot = lightDomSlot.cloneNode(true) as HTMLElement;
      } else {
        // Add additional annotations - cloned-slot attributes and a comment in light DOM
        clonedSlot = this.addAnnotations(slotName, lightDomSlot);
      }
      // Dispatch click events from shadow DOM to original node in light DOM
      clonedSlot.addEventListener('click', () => {
        const clickEvent = new Event('click');
        lightDomSlot.dispatchEvent(clickEvent);
      });

      return clonedSlot;
    });

    // Add mutation observer to watch for changes in the light DOM
    this._mutationObserver.observe(this.host, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    return allClonedSlots;
  }
}
