# `AdoptedStylesheets` Controller

[![Latest version for outline-adopted-stylesheets-controller](https://img.shields.io/npm/v/@phase2/outline-adopted-stylesheets-controller)](https://www.npmjs.com/package/@phase2/outline-adopted-stylesheets-controller) [![Node.js version](https://img.shields.io/node/v/@phase2/outline-adopted-stylesheets-controller)](https://nodejs.org/en/download/releases/) [![Lit 2](https://img.shields.io/badge/Lit-2-blue)](https://lit.dev/) [![Lit 3](https://img.shields.io/badge/Lit-3-blue)](https://lit.dev/)

## Overview

Adopted stylesheets offer a way to apply styles to a document or a shadow root, as part of the CSS Shadow Parts specification. The `AdoptedStylesheets` controller, a Lit Reactive Controller, is a robust tool for managing styles in web components. It provides a uniform method to manage both global and encapsulated styles, utilizing modern browser standards. This controller aids in preventing style duplication at the component level and ensures efficient style inclusion into `AdoptedStylesheets`. For more information on Lit Reactive Controllers, visit the [Lit documentation](https://lit.dev/docs/composition/controllers/).

## Installing the `AdoptedStylesheets` Controller

To install the new package, use the following command, specific to your package manager:

### With Yarn

> For more information on using Yarn, visit the [Yarn documentation](https://classic.yarnpkg.com/en/docs/).

```bash
yarn add @phase2/outline-adopted-stylesheets-controller
```

### With NPM

> For more information on using NPM, visit the [NPM documentation](https://docs.npmjs.com/).

```bash
npm i --save-dev @phase2/outline-adopted-stylesheets-controller
```

### With PNPM

> For more information on using PNPM, visit the [PNPM documentation](https://pnpm.io/usage).

```bash
pnpm add --save-dev @phase2/outline-adopted-stylesheets-controller
```

## Methods

The `AdoptedStylesheets` controller provides the following methods:

- `constructor(globalStyles: CSSResult, root: Document | ShadowRoot)`: This method is used to create a new instance of the `AdoptedStylesheets` controller. It takes a `CSSResult` object and a root (either a `Document` or `ShadowRoot`) as parameters.

- `hostConnected()`: This method is called when the host element is connected to the DOM. It adds the document's stylesheet to the adopted stylesheets if it is not already present.

- `hostDisconnected()`: This method is called when the host element is disconnected from the DOM. It removes the document's stylesheet from the adopted stylesheets if it is present.

## Usage

Here is an example of how to use the `AdoptedStylesheets` controller in a component. Samples will show incorporating two stylesheets, one to the `document` (global) and one to the `shadowRoot` (encapsulated).

### Importing the package

```typescript
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
```

### Importing your stylesheet(s)

```typescript
import globalStyles from './styles/global-styles.css?inline';
import encapsulatedStyles from './styles/encapsulated-styles.css?inline';
```

#### CSS Structure

The `globalStyles` and `encapsulatedStyles` are imported from their respective CSS files. These stylesheets are used to style the web component and the document respectively.

- `globalStyles`: This stylesheet is used to style the entire document.

- `encapsulatedStyles`: This stylesheet is used to style the web component itself.

By separating the styles into global and encapsulated stylesheets, you can manage the styles in a more organized and efficient way. It also allows for better encapsulation and control over the styles, as you can decide which styles should be applied globally and which should be scoped to the web component.

#### `CSSStyleSheet` instead of `CSSResultGroup`

The `?inline` flag is used when importing stylesheets in modern bundlers like Vite and Webpack. This flag tells the bundler to import the contents of the CSS file as a string, which can then be used directly in JavaScript or TypeScript code. This is particularly useful when working with web components, as it allows for the dynamic inclusion of styles.

The benefit of using the `CSSStyleSheet` type over the Lit-specific `CSSResultGroup` is that `CSSStyleSheet` is a web standard, while `CSSResultGroup` is specific to Lit. By using `CSSStyleSheet`, you're leveraging browser-native capabilities, which can lead to better performance and compatibility.

### Attaching a global stylesheet

```typescript
export class MyComponent extends LitElement {
  
  GlobalStylesheets: AdoptedStylesheets | undefined = new AdoptedStylesheets(
    this, // The host that this controller is associated with
    globalStyles, // A string that contains the CSS styles to be adopted
    document, // The root where the stylesheet will be adopted
  );
  
  EncapsulatedStylesheets: AdoptedStylesheets | undefined;
}
```

Above, the definition of `GlobalStylesheets` is calling the controller, and attaching immediately upon execution. Read on to understand why `EncapsulatedStylesheets` must be assigned differently.

### Attaching an encapsulated stylesheet via `createRenderRoot`

Because of the methods by which Adopted Stylesheets work, we must ensure that we have a `shadowRoot` prior to attaching styles to it. While this may seem overly verbose compared to using `static styles`, however, `static styles` is a Lit-ism, and then has us using the "Lit way" to attach our encapsulated styles, and "this way" to attach global ones. This consolidation is purposeful to ensure we are utilizing the same, modern, browser standards based methods when possible.

```typescript
createRenderRoot() {
  const root = super.createRenderRoot();
  this.EncapsulatedStylesheets = this.shadowRoot
    ? new AdoptedStylesheets(this, encapsulatedStyles, this.shadowRoot)
    : undefined;
  return root;
}
```

The `createRenderRoot` method is used here for a very specific reason. In Lit, the `createRenderRoot` method is used to specify the container to which the template is rendered. By default, Lit renders the template into the component's Shadow DOM. This is done by returning `this.shadowRoot` in the `createRenderRoot` method, which is the default behavior.

In this specific case, we are using `createRenderRoot` to adopt stylesheets into the shadow root of the component. This is done by creating a new instance of the `AdoptedStyleSheets` class and assigning it to `this.EncapsulatedStylesheets`. The `AdoptedStyleSheets` class is a controller that manages CSS stylesheets that are adopted into the document or a shadow root. By adopting the stylesheets into the shadow root, we ensure that the styles are scoped to this component and do not leak out to the rest of the page.

This could not be achieved with other lifecycle methods in Lit. The `createRenderRoot` method is the only method that gives us direct access to the shadow root before the template is rendered, which is necessary for adopting the stylesheets. Other lifecycle methods like `connectedCallback`, `disconnectedCallback`, `updated`, `firstUpdated`, etc., are called at different stages of the component's lifecycle and do not give us the opportunity to adopt the stylesheets into the shadow root before the template is rendered.

## Additional Information

For more information about adopted stylesheets and their usage in web components, refer to the following resources:

- [MDN Web Docs: Document adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `Document` interface.
- [MDN Web Docs: ShadowRoot adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets): This documentation provides an in-depth look at the `adoptedStyleSheets` property of the `ShadowRoot` interface.
