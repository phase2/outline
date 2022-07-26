import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { XSelection } from './selection';
import { OutlineMapMarker } from './outline-map-marker';
import { OutlineUserMarker } from './outline-user-marker';

@customElement('map-selector')
export class MapSelector extends LitElement {
  @property({ type: String, attribute: 'activate-event' })
  activateEvent = 'tap';

  @property({ type: String, attribute: 'selected-attribute' })
  selectedAttribute: string | null = null;

  @property({ type: Number, reflect: true })
  selected: number | string | null = null;

  _selection: XSelection<Node> = new XSelection((item, isSelected) =>
    this.applySelection(item, isSelected)
  );

  _items: Array<OutlineMapMarker | OutlineUserMarker> = [];

  get items(): Array<OutlineMapMarker | OutlineUserMarker> {
    return this._items;
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('slotchange', event => {
      event.stopPropagation();
      this.updateItems();
      this.dispatchEvent(
        new CustomEvent('selector-items-changed', {
          detail: {},
          composed: true,
        })
      );
    });

    this.addListener(this.activateEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeListener(this.activateEvent);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributeChangedCallback(name: string, oldval: any, newval: any) {
    super.attributeChangedCallback(name, oldval, newval);
    switch (name) {
      case 'selected': {
        this.selectSelected();
        break;
      }
    }
  }

  applySelection(item: Node, isSelected: boolean) {
    if (this.selectedAttribute && item instanceof Element) {
      if (isSelected != (item as Element).hasAttribute(this.selectedAttribute))
        (item as Element).toggleAttribute(this.selectedAttribute);
    }
  }

  updateItems() {
    const slotElement = this.querySelector('slot');
    this._items =
      (slotElement?.assignedNodes() as Array<
        OutlineMapMarker | OutlineUserMarker
      >) ?? [];
  }

  addListener(eventName: string) {
    this.addEventListener(eventName, event => this.activateHandler(event));
  }

  removeListener(eventName: string) {
    this.removeEventListener(eventName, event => this.activateHandler(event));
  }

  activateHandler(event: Event) {
    const t = event.target as OutlineMapMarker | OutlineUserMarker;
    const i = this.items.indexOf(t);
    if (i >= 0) {
      this.itemActivate(i, t);
    }
  }

  itemActivate(value: number, item: Node) {
    if (
      this.dispatchEvent(
        new CustomEvent('selector-item-activate', {
          detail: { selected: value, item: item },
          composed: true,
          cancelable: true,
        })
      )
    )
      this.select(value);
  }

  select(value: string | number) {
    this.selected = value;
  }

  selectSelected() {
    if (!this._items) return;

    const item = this.valueToItem(this.selected);
    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    }
  }

  valueToItem(value: number | string | null): Node | null {
    return value == null ? null : this._items[this.valueToIndex(value)];
  }

  valueToIndex(value: number | string): number {
    return Number(value);
  }

  indexOf(item: OutlineMapMarker | OutlineUserMarker): number {
    return this._items ? this._items.indexOf(item) : -1;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-selector': MapSelector;
  }
}
