import { ReactiveControllerHost, ReactiveController } from 'lit';

export class SlottedController implements ReactiveController {
  host: ReactiveControllerHost;
  hostEl: HTMLElement;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
    this.hostEl = this.host as unknown as HTMLElement;
  }

  hostConnected() {
    this.hostEl.addEventListener('slotchange', this.onSlotChange);
    setTimeout(() => this.onSlotChange(), 0);
  }

  hostDisconnected() {
    this.hostEl.removeEventListener('slotchange', this.onSlotChange);
  }

  onSlotChange() {
    const elementName = this.hostEl.tagName;
    const myElement: HTMLElement | null = this.hostEl.parentElement
      ? this.hostEl.parentElement.querySelector(elementName)
      : null;
    if (myElement && myElement.shadowRoot) {
      const slot: HTMLElement | null = myElement.shadowRoot.querySelector(
        'slot'
      )
        ? myElement.shadowRoot.querySelector('slot')
        : null;
      if (slot) {
        slot.append(...myElement.children);
      }
    }
  }
}
