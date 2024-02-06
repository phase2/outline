# Slot Manager

The `SlotManager` is a utility class for managing slots in Lit web components. It provides several methods to interact with and manipulate slots.

## Installation

To use the `SlotManager`, you need to install the required dependencies:

```bash
yarn add -D @phase2/outline-controller-slot-manager
```

## Usage

### Importing `SlotManager`

```typescript
import { SlotManager } from '@phase2/outline-controller-slot-manager';
```

### Instantiating `SlotManager`

```typescript
import { LitElement, html } from 'lit';
import { SlotManager } from '@phase2/outline-controller-slot-manager';

class MyElement extends LitElement {
  slotManager: SlotManager;

  constructor() {
    super();
    this.slotManager = new SlotManager(this);
  }
}
```

## Details

- `getSlottedNodes(slotName: SlotName = null)`: This method retrieves all nodes slotted under the given slot name. If the slot name is null or an empty string, it returns the default slot nodes. If no slotted nodes are found, it returns `false`.

- `doesSlotExist(slotName: SlotName = null)`: This method checks if a slot with the given name exists in the host element. It returns `true` if the slot exists, `false` otherwise.

- `isDefaultSlotText(node: Node)`: This method checks if a given node is a default slot text. It returns `true` if the node is a default slot text, `false` otherwise.

- `isDefaultSlotElement(node: Node)`: This method checks if a given node is a default slot element. It returns `true` if the node is a default slot element, `false` otherwise.

- `conditionalSlot(slotName: SlotName = null, extraClasses: string | null = null)`: This method conditionally renders a slot with a wrapper and additional classes. It returns the rendered slot or `null` if the slot does not exist.
