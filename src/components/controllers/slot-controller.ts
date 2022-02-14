import type {
  ReactiveController,
  ReactiveControllerHost,
  ReactiveElement,
} from 'lit';

// @todo remove this disabling of no-console.
/* eslint-disable no-console */

/**
 * @todo MAKE THIS combine with SlottedController
 * @see SlottedController
 * @see https://github.com/shoelace-style/shoelace/blob/next/src/internal/slot.ts
 */
export class SlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  hostEl: ReactiveElement;
  shadowShift: boolean;
  slotNames: string[] = [];
  defaultSlot: boolean;
  namedSlots: boolean;

  constructor(
    host: ReactiveControllerHost & Element,
    shadowShift?: boolean
    //slotNames: string[]
  ) {
    (this.host = host).addController(this);
    this.hostEl = this.host as unknown as ReactiveElement;
    this.shadowShift =
      shadowShift && typeof shadowShift === 'boolean' ? shadowShift : false;
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  private hasDefaultSlot() {
    return [...this.host.childNodes].some(node => {
      if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '') {
        return (this.defaultSlot = true);
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (!el.hasAttribute('slot')) {
          return (this.defaultSlot = true);
        }
      }

      return (this.defaultSlot = false);
    });
  }

  private hasNamedSlot(name: string) {
    return (this.namedSlots =
      this.host.querySelector(`:scope > [slot="${name}"]`) !== null);
  }

  test(slotName?: string | undefined) {
    const slot = slotName ? slotName : '';
    return slot === '' ? this.hasDefaultSlot() : this.hasNamedSlot(slot);
  }

  hostConnected() {
    this.host.shadowRoot!.addEventListener('slotchange', this.handleSlotChange);
    this.slotNames = this.getSlots();
    setTimeout(() => this.moveSlots(), 0);
  }

  firstUpdated(): void {}

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener(
      'slotchange',
      this.handleSlotChange
    );
  }

  handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;

    if (
      (this.defaultSlot && !slot.name) ||
      (slot.name && this.slotNames.includes(slot.name))
    ) {
      this.host.requestUpdate();
    }
  }

  /**
   * Function to return an array of slots on an element.
   *
   * @returns string[]
   */
  getSlots() {
    const slots: string[] = [];
    // Only adding named slots to our string array.
    // We have the actual presence of the unnamed slot known
    // via this.hasDefaultSlot.
    const namedSlots: NodeListOf<HTMLElement> =
      this.host.querySelectorAll('[slot]');
    namedSlots.length ? (this.namedSlots = true) : (this.namedSlots = false);

    namedSlots.forEach((slot: HTMLElement) => {
      const name: string = slot.getAttribute('slot') as string;
      // Add the slot name to the array of strings.
      this.test(name) ? slots.push(name) : false;
    });

    // General debugging.
    //console.log(slots);
    // console.log(`Default Slot: ${this.defaultSlot}`);
    // console.log(`Named Slot(s): ${this.namedSlots}`);

    return slots;
  }

  /**
   * Method to move a named slot's content into the ShadowDOM.
   *
   * @todo: Continue improvement and performance in this method.
   * @todo: Observe slot changes and adding new elements to the slot.
   *
   * @param slotName string The name of the named slot.
   */
  private moveNamedSlot(slotName: string) {
    console.group(`Running moveNamedSlot method on the ${slotName} slot.`);

    // Reassign host for better typing.
    const host = this.host as unknown as ReactiveElement;

    const shadowSlotLocation = host.renderRoot
      ? host.renderRoot.querySelector(`slot[name="${slotName}"]`)
      : false;

    console.groupCollapsed('Logging the host element.');
    console.log(host);
    console.groupEnd();

    console.groupCollapsed('Logging the host.renderRoot.');
    console.log(host.renderRoot);
    console.groupEnd();

    console.group('Logging the other things.');
    console.log(shadowSlotLocation);
    console.groupEnd();

    if (shadowSlotLocation) {
      console.log('EUREKA!!!!');
      // The contents OF the slot.
      const slotLightDom = host.querySelector('[slot=' + slotName + ']');

      console.log(slotLightDom);
      // Only if named slot found in light dom - move it into shadow DOM
      if (slotLightDom) {
        console.log('TRYING TO MOVE THE CONTENT!!!');
        // @todo Not moving it properly yet.
        shadowSlotLocation.before(slotLightDom);
      }
    }
    console.groupEnd();
  }

  /**
   * Function to move all named or unnamed slots to the ShadowDOM.
   */
  private moveSlots() {
    if (this.shadowShift) {
      // Move named slots.
      this.slotNames.map(name => {
        this.moveNamedSlot(name);
      });
      // @todo move default slot items.
    }
  }
}
