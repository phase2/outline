[![Latest version for outline-controller-light-dom-styles-controller](https://img.shields.io/npm/v/@phase2/outline-core-link)](https://www.npmjs.com/package/@phase2/outline-controller-light-dom-styles-controller)

# `LightDomStyles` Controller

> This controller is deprecated, and the `StyleController` from `@phase2/outline-controller-style-controller` should be utilized in its place when possible.

## Using the `LightDomStyles` Controller

If you are using the `LightDomStyles` Controller, it is assumed you were likely using the original version supplied via the `@phase2/outline-core` package. In that case, the following should help you upgrade any components from the version of `light-dom-style.ts` from `outline-core`, to the newly packaged version.

This version will remain an active, but deprecated package to support legacy applications utilizing this method and controller.

## Installing the `LightDomStyles` Controller

Install the new package:

```bash
yarn add @phase2/outline-controller-light-dom-styles-controller --dev
```

Upgrade `outline-core` to `@phase2/outline-core@^2.0.0` to remove the original controller. `@phase2/outline-form` should also be updated.

```bash
yarn upgrade @phase2/outline-core @phase2/outline-form
```

## Upgrading existing components

In current components that are using the `LightDomStyles` controller, you may see a line such as this:

```typescript
import { OutlineElement, LightDomStyles } from '@phase2/outline-core';
```

This would be replaced with the following:

```typescript
import { OutlineElement } from '@phase2/outline-core';
import { LightDomStyles } from '@phase2/outline-controller-light-dom-styles-controller';
```

Beyond that, the typical implementation looks as follows:

```typescript
lightDomStyles = new LightDomStyles(this, globalStyles);
```

This line, implementing the reactive controller should not need to be changed on any application that is not upgrading to the `StyleController`.
