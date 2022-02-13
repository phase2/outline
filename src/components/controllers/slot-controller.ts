import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * @todo MAKE THIS combine with SlottedController
 * @see SlottedController
 *
 * We can pass slot names via something like this:
 * slots = new SlotController(this, '[default]', 'another-slot', 'extra-slot');
 * What if we don't pass any slot names, or have to run a new function to
 * physically move only selected slots to the ShadowDOM.
 */
export class SlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  shadowShift = false;
  slotNames: string[] = [];
  defaultSlot: boolean;
  namedSlots: boolean;

  constructor(
    host: ReactiveControllerHost & Element,
    shadowShift: boolean
    //slotNames: string[]
  ) {
    (this.host = host).addController(this);
    this.shadowShift = shadowShift;
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
    this.slotNames = this.getSlots();
    this.host.shadowRoot!.addEventListener('slotchange', this.handleSlotChange);
  }

  firstUpdated(): void {
    // this.handleSlotChange()
  }

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener(
      'slotchange',
      this.handleSlotChange
    );
  }

  handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;

    if (
      (this.slotNames.includes('[default]') && !slot.name) ||
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
    if (this.hasDefaultSlot()) {
      slots.push('[default]');
    }
    const namedSlots: NodeListOf<HTMLElement> =
      this.host.querySelectorAll('[slot]');
    namedSlots.length ? (this.namedSlots = true) : (this.namedSlots = false);

    namedSlots.forEach((slot: HTMLElement) => {
      const name: string = slot.getAttribute('slot') as string;
      this.test(name) ? slots.push(name) : false;
    });

    // General debugging.
    /* eslint-disable */
    console.log(slots);
    console.log(`Default Slot: ${this.defaultSlot}`);
    console.log(`Named Slot(s): ${this.namedSlots}`);
    /* eslint-enable */
    return slots;
  }
}
