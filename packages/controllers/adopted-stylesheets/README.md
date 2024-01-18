# `AdoptedStylesheets` Controller

[![Latest version for outline-adopted-stylesheets-controller](https://img.shields.io/npm/v/@phase2/outline-adopted-stylesheets-controller)](https://www.npmjs.com/package/@phase2/outline-adopted-stylesheets-controller)

> The `AdoptedStylesheets` controller is a part of the `@phase2/outline-adopted-stylesheets-controller` package. This controller assists components in attaching "global" document styles without duplication at the component level, as well as de-duping any previous inclusions into `AdoptedStylesheets`.

## Installing the `AdoptedStylesheets` Controller

To install the new package, use the following command, specific to your package manager:

```bash
# With Yarn
yarn add @phase2/outline-adopted-stylesheets-controller

# With NPM
npm i --save-dev @phase2/outline-adopted-stylesheets-controller

# With PNPM
pnpm add --save-dev @phase2/outline-adopted-stylesheets-controller
```

## Overview

Adopted stylesheets are a method to apply styles to a document or a shadow root. They are a part of the CSS Shadow Parts specification. For more information about adopted stylesheets and their usage in web components, refer to the following resources:

- [MDN Web Docs: Document adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `Document` interface.
- [MDN Web Docs: ShadowRoot adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `ShadowRoot` interface.

## Methods

The `AdoptedStylesheets` controller provides the following methods:

- `constructor(globalStyles: CSSResult, root: Document | ShadowRoot)`: This method is used to create a new instance of the `AdoptedStylesheets` controller. It takes a `CSSResult` object and a root (either a `Document` or `ShadowRoot`) as parameters.

- `hostConnected()`: This method is called when the host element is connected to the DOM. It adds the document's stylesheet to the adopted stylesheets if it is not already present.

- `hostDisconnected()`: This method is called when the host element is disconnected from the DOM. It removes the document's stylesheet from the adopted stylesheets if it is present.

## Usage

Here are examples of how to use the `AdoptedStylesheets` controller in a component:

### Sample 1: Attach a stylesheet to `document`

```typescript
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
import { css, CSSResult, LitElement } from 'lit';
import globalStyles from './global-styles';

class MyComponent extends LitElement {
  AdoptedStylesheets: AdoptedStylesheets;

  connectedCallback() {
    super.connectedCallback();
    this.AdoptedStylesheets = new AdoptedStylesheets(globalStyles, document);
    this.addController(this.AdoptedStylesheets);
  }
}
```

### Sample 2: Attach a stylesheet to `this.shadowRoot`

```typescript
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
import { css, CSSResult, LitElement } from 'lit';
import encapsulatedStyles from './encapsulated-styles';

class MyComponent extends LitElement {
  AdoptedStylesheets: AdoptedStylesheets;

  connectedCallback() {
    super.connectedCallback();
    this.AdoptedStylesheets = new AdoptedStylesheets(encapsulatedStyles, this.shadowRoot);
    this.addController(this.AdoptedStylesheets);
  }
}
```

### Sample 3: Attach stylesheets to both `document` and `this.shadowRoot`

```typescript
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
import { css, CSSResult, LitElement } from 'lit';
import globalStyles from './global-styles';
import encapsulatedStyles from './encapsulated-styles';

class MyComponent extends LitElement {
  GlobalStylesheets: AdoptedStylesheets;
  EncapsulatedStylesheets: AdoptedStylesheets;

  connectedCallback() {
    super.connectedCallback();
    this.GlobalStylesheets = new AdoptedStylesheets(globalStyles, document);
    this.addController(this.GlobalStylesheets);
    this.EncapsulatedStylesheets = new AdoptedStylesheets(encapsulatedStyles, this.shadowRoot);
    this.addController(this.EncapsulatedStylesheets);
  }
}
```

In the provided examples, the `connectedCallback` method is utilized. This method is invoked whenever the element is inserted into the DOM. Within this method, an instance of `AdoptedStylesheets` is created and added as a controller. This is a more efficient approach than creating the instance and adding the controller within the `constructor`. The reason for this is that it delays these operations until the element is actually inserted into the DOM. If there are many such elements that are created but not immediately added to the DOM, this approach can significantly improve the startup performance of your application. Therefore, the `connectedCallback` method is a crucial part of managing the lifecycle of a web component, especially when dealing with adopted stylesheets.
