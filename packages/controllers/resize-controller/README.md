# Resize Controller

The `resize-controller` is a utility module that allows you to observe and react to changes in the size of a web component. It provides a simple way to handle resize events and perform actions based on the new size of the component.

## Installation

You can install the `resize-controller` package using yarn:

```
yarn add -D @phase2/outline-controller-resize-controller
```

## Usage

To use the `resize-controller` in your web component, follow these steps:

1. Import the necessary classes and functions from the `lit` package:

```javascript
import { ResizeController } from '@phase2/outline-controller-resize-controller';
```

2. Create an instance of the `ResizeController` and pass the host element and options:

```javascript
resizeController = new ResizeController(this);
```

## API Reference

### `ResizeController`

The `ResizeController` class provides methods to observe resize events and perform actions based on the new size of the host element.

#### Constructor

```javascript
new ResizeController(host: ReactiveControllerHost & HTMLElement, options?: ResizeControllerOptions)
```

- `host`: The host element of the web component.
- `options` (optional): An object specifying the options for the `ResizeController`. It can include the following properties:
  - `debounce`: The delay in milliseconds to debounce the resize event. Defaults to `200`.
  - `breakpoints`: An array of breakpoints for different size ranges. Defaults to `[768]`.
  - `elementToRerender`: The element to trigger a re-render when the size changes. Defaults to the `host` element.

#### Properties

- `onResize`: A callback function that will be called when the element is resized. Override this method in your component to handle the resize event.

#### Methods

- `hostConnected()`: Called when the host element is connected to the DOM. Observes the element for size changes.
- `hostDisconnected()`: Called when the host element is disconnected from the DOM. Stops observing size changes.

## Example

Here's an example that demonstrates how to use the `resize-controller` in a web component:

```javascript
@customElement('my-component')
export class MyComponent extends LitElement {
  resizeController = new ResizeController(this, {
    breakpoints: [768, 1440],
  });

  render() {
    const Classes = {
      'mobile': this.resizeController.currentBreakpointRange === 0,
      'medium': this.resizeController.currentBreakpointRange === 1,
      'large': this.resizeController.currentBreakpointRange === 2,
    };
    return html`
      <div class="${classMap(Classes)}">
        Hello World
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
```

In this example, `resizeController` is initialized to support the following breakpoints:

- 0: 0-767px
- 1: 768px-1439px
- 2: 1440px - 100000px

When my-component's width crosses from one range to another, the resize controller will call the component's `render()` function.
