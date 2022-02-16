import {
  ReactiveControllerHost,
  ReactiveController,
  ReactiveElement,
} from 'lit';

export class SlottedController implements ReactiveController {
  host: ReactiveControllerHost;
  hostEl: ReactiveElement;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
    this.hostEl = this.host as unknown as ReactiveElement;
  }

  hostConnected() {
    this.hostEl.addEventListener('slotchange', this.onSlotChange);
    setTimeout(() => this.onSlotChange(), 0);
  }

  hostDisconnected() {
    this.hostEl.removeEventListener('slotchange', this.onSlotChange);
  }

  onSlotChange() {
    if (this.hostEl) {
      // Search for all slots provided by the Web Component.
      const slotsArray = this.hostEl.renderRoot.querySelectorAll('slot');

      // If any slots found
      if (slotsArray.length > 0) {
        const currentElement = this.hostEl;
        // Go through each slot shadow dom position
        slotsArray.forEach(slot => {
          // Process named slot
          if (slot.name) {
            // Fetch the corresponding named slot in the lightDom
            const slotLightDom = currentElement.querySelector(
              '[slot=' + slot.name + ']'
            );
            // Only if named slot found in light dom - move it into shadow DOM
            if (slotLightDom) {
              slot.before(slotLightDom);
            }
          }
          // Process default (unnamed) slot
          else {
            // Get all content that doesn't have slot as attribute
            const slotLightDomArray = Array.from(
              currentElement.children
            ).filter(node => {
              return !node.getAttributeNode('slot');
            });

            // Move all unnamed slot content to the corresponding position in shadow DOM
            slotLightDomArray.forEach(slotLightDom => {
              slot.before(slotLightDom);
            });
          }
        });
      }
    }
  }
}
