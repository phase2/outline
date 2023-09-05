# AdoptedStyleSheets Controller

The `AdoptedStyleSheets` controller is a part of the `@phase2/outline-adopted-stylesheets-controller` package.  This controller helps components attach "global" document styles without duplication at the component level as well as de-duping any previous inclusions into `AdoptedStyleSheets`.

## Overview

Adopted stylesheets are a way to apply styles to a document or a shadow root. They are a part of the CSS Shadow Parts specification. You can read more about them [here](https://wicg.github.io/construct-stylesheets/).

## Methods

The `AdoptedStyleSheets` controller provides the following methods:

- `constructor(globalStyles: CSSResult)`: This method is used to create a new instance of the `AdoptedStyleSheets` controller. It takes a `CSSResult` object as a parameter, which represents the global styles to be adopted.

- `hostConnected()`: This method is called when the host element is connected to the DOM. It adds the document's stylesheet to the adopted stylesheets if it is not already present.

- `hostDisconnected()`: This method is called when the host element is disconnected from the DOM. It removes the document's stylesheet from the adopted stylesheets if it is present.

## Usage

Here is an example of how to use the `AdoptedStyleSheets` controller in a component:

```typescript
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';
import { css, CSSResult } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import globalStyles from './my-component.lightDom.css.lit';

class MyComponent extends OutlineElement {
  adoptedStylesheets: AdoptedStyleSheets;

  connectedCallback() {
    super.connectedCallback();
    this.adoptedStylesheets = new AdoptedStyleSheets(globalStyles);
    this.addController(this.adoptedStylesheets);
  }
}
```

In the provided example, the `connectedCallback` method is utilized. This method is invoked whenever the element is inserted into the DOM. Within this method, an instance of `AdoptedStyleSheets` is created and added as a controller. This is a more efficient approach than creating the instance and adding the controller within the `constructor`. The reason for this is that it delays these operations until the element is actually inserted into the DOM. If there are many such elements that are created but not immediately added to the DOM, this approach can significantly improve the startup performance of your application. Therefore, the `connectedCallback` method is a crucial part of managing the lifecycle of a web component, especially when dealing with adopted stylesheets.
