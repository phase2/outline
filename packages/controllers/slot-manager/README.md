# SlotsController

The `SlotsController` is a reactive controller that allows cloning slots into the shadow DOM of a component. It provides methods for managing slots, adding annotations, and dispatching events from cloned slots in the shadow DOM to the equivalent slots in the light DOM.

## Installation

To use the `SlotsController`, you need to install the required dependencies:

```bash
npm install lit
```

## Usage

Import the `SlotsController` and instantiate it in your component:

```javascript
import { SlotsController } from './SlotsController';

class MyComponent extends HTMLElement {
  constructor() {
    super();
    const slotsController = new SlotsController(this);
    // ... @todo Add more usage examples
    // default slot example
    // slot exist function
    // renderInShadow example
    // conditionalSlot example
  }
}
```

## API

### SlotsController(host: ReactiveControllerHost & HTMLElement)

Creates a new instance of the `SlotsController` for the given host element.

- `host`: The host element that will be controlled by the `SlotsController`.

#### Methods

##### getSlottedNodes(slotName?: string | null): Array<Node>

Returns an array of slotted nodes for the specified slot name.

- `slotName`: The name of the slot. If not provided, returns the default slot nodes.

##### exist(slotName?: string | null): boolean

Checks if a slot exists.

- `slotName`: The name of the slot. If not provided, checks for the default slot.

##### addAnnotations(slotName: string, lightDomSlot: ChildNode): HTMLElement

Adds annotations to a slot, such as cloned-slot attributes and comments in the light DOM.

- `slotName`: The name of the slot.
- `lightDomSlot`: The light DOM slot to annotate.

##### dispatchEventsToLightDom(eventsToDispatch: string[], clonedSlot: HTMLElement): void

Dispatches events from cloned slots in the shadow DOM to the equivalent slots in the light DOM.

- `eventsToDispatch`: An array of event types to dispatch.
- `clonedSlot`: The cloned slot in the shadow DOM.

##### renderInShadow(slotName?: string, wrapperElement?: string | null, eventsToDispatch?: string[], addAnnotations?: boolean): Array<HTMLElement> | null

Renders the specified slot in the shadow DOM.

- `slotName`: The name of the slot. If not provided, renders the default slot.
- `wrapperElement`: Optional wrapper element for each slot.
- `eventsToDispatch`: An array of event types to dispatch from the cloned slots.
- `addAnnotations`: Whether to add annotations to the slot. Defaults to `true`.

##### conditionalSlot(slotName: string, renderInShadow?: boolean, extraClasses?: string | null, extraAttributes?: { name: string, value: string }[]): TemplateResult | null

Conditionally renders a slot with a wrapper and additional classes.

- `slotName`: The name of the slot.
- `renderInShadow`: Whether to render the slot in the shadow DOM. Defaults to `true`.
- `extraClasses`: Additional classes to add to the wrapper element. Defaults to `null`.
- `extraAttributes`: Additional attributes to add to the wrapper element. Defaults to an empty array.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.