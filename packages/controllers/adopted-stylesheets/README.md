# `AdoptedStylesheets` Controller

[![Latest version for outline-adopted-stylesheets-controller](https://img.shields.io/npm/v/@phase2/outline-adopted-stylesheets-controller)](https://www.npmjs.com/package/@phase2/outline-adopted-stylesheets-controller)

> The `AdoptedStylesheets` controller is a part of the `@phase2/outline-adopted-stylesheets-controller` package.  This controller helps components attach "global" document styles without duplication at the component level as well as de-duping any previous inclusions into `AdoptedStylesheets`.

## Installing the `AdoptedStylesheets` Controller

Install the new package:

```bash
yarn add @phase2/outline-adopted-stylesheets-controller
```

## Overview

Adopted stylesheets are a method to apply styles to a document or a shadow root. They are a part of the CSS Shadow Parts specification. Unfortunately, the original documentation link is no longer available. However, you can find more information about adopted stylesheets and their usage in web components in the following resources:

- [MDN Web Docs: Document adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `Document` interface.
- [MDN Web Docs: ShadowRoot adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `ShadowRoot` interface.

## Methods

The `AdoptedStylesheets` controller provides the following methods:

- `constructor(globalStyles: CSSResult)`: This method is used to create a new instance of the `AdoptedStylesheets` controller. It takes a `CSSResult` object as a parameter, which represents the global styles to be adopted.

- `hostConnected()`: This method is called when the host element is connected to the DOM. It adds the document's stylesheet to the adopted stylesheets if it is not already present.

- `hostDisconnected()`: This method is called when the host element is disconnected from the DOM. It removes the document's stylesheet from the adopted stylesheets if it is present.

## Usage

Here is an example of how to use the `AdoptedStylesheets` controller in a component:

```typescript
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
import { css, CSSResult } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import globalStyles from './my-component.lightDom.css.lit';

class MyComponent extends OutlineElement {
  AdoptedStylesheets: AdoptedStylesheets;

  connectedCallback() {
    super.connectedCallback();
    this.AdoptedStylesheets = new AdoptedStylesheets(globalStyles);
    this.addController(this.AdoptedStylesheets);
  }
}
```

In the provided example, the `connectedCallback` method is utilized. This method is invoked whenever the element is inserted into the DOM. Within this method, an instance of `AdoptedStylesheets` is created and added as a controller. This is a more efficient approach than creating the instance and adding the controller within the `constructor`. The reason for this is that it delays these operations until the element is actually inserted into the DOM. If there are many such elements that are created but not immediately added to the DOM, this approach can significantly improve the startup performance of your application. Therefore, the `connectedCallback` method is a crucial part of managing the lifecycle of a web component, especially when dealing with adopted stylesheets.