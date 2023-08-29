
# OutlineJS

[![Version](https://img.shields.io/npm/v/@phase2/outline-core.svg)](https://npmjs.org/package/@phase2/outline-core)
[![GitPod](https://img.shields.io/badge/gitpod-development-lightgray?logo=gitpod&logoColor=ffffff&style=flat)](https://gitpod.io/#https://github.com/phase2/outline)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/package.json)

## Storybook Hosting

[![Netlify](https://img.shields.io/badge/netlify-outlinejs.style-success?logo=netlify&logoColor=ffffff&style=flat)](https://outlinejs.style/)
[![GitHub Pages](https://img.shields.io/badge/pages-outline.phase2tech.com-success?logo=github&logoColor=ffffff&style=flat)](https://outline.phase2tech.com/)
[![Chromatic](https://img.shields.io/badge/chromatic-next-success?logo=storybook&logoColor=ffffff&style=flat)](https://next--636082675ab89919e6bcfd40.chromatic.com/)

Outline is a both a growing [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) library as well as a toolkit for building out bespoke design systems for a wide variety of client and personal usages. Outline is based on the latest technologies and tools to help your component authoring experience and facilitate adoption in your organization.

## More than a Design System

Outline is much more than just you run of the mill design system. Outline provides an added benefit on top of multiple similar libraries available.

* Outline is a set of components
* Outline is a set of tooling and technology to scaffold design systems for a multitude of projects
* Outline is a set of rules for defining components
* Outline is a set of rules for integrating components
* Outline provides well curated documentation on many complex topics
* Outline grows with internal lessons learned project after project here [@phase2](https://github.com/phase2).

Outline and Outline design systems are built with many of the following notable tools:

* [![Turborepo](https://img.shields.io/badge/turborepo-v1.6.0-blue?logo=turborepo&logoColor=ffffff&style=flat)](https://lit.dev/)
* [![Lit](https://img.shields.io/badge/lit-v2-blue?logo=lit&logoColor=ffffff&style=flat)](https://lit.dev/)
* [![TypeScript](https://img.shields.io/badge/typescript-v4.8.4-blue?logo=typescript&logoColor=ffffff&style=flat)](https://www.typescriptlang.org/)
* [![CSS Custom Properties](https://img.shields.io/badge/CSS_Custom_Properties-Level_1-blue?logo=css3&logoColor=ffffff&style=flat)](https://www.w3.org/TR/css-variables-1/)
* [![Storybook](https://img.shields.io/badge/Storybook-v7-blue?logo=storybook&logoColor=ffffff&style=flat)](https://www.w3.org/TR/css-variables-1/)
* [![Postcss](https://img.shields.io/badge/PostCSS-v8-blue?logo=postcss&logoColor=ffffff&style=flat)](https://postcss.org/)
* [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&logoColor=ffffff&style=flat)](https://postcss.org/)

## Scaffolding a new Outline project

Outline is organized as a mono-repo and is available to use via NPM Packages and our CLI. The `outline-cli` simplifies the setup process using pre-defined templates available in the `outline-templates` package as guides on basic scaffolding of new Outline based projects.

### Using NPX (recommended)

> This method will load the latest version of the Outline CLI to cache, and prompt you when an update is available. This makes it easier than managing a local version to simply run `outline init` instead.

```bash
npx @phase2/outline-cli init
```


### Global Installation

This method will require manually updating from time to time for the latest updates on your system. If you are using [NVM](https://github.com/nvm-sh/nvm) appropriately, any version of node would need this installed. If you are using yarn, you can just install it once globally.

#### With NPM

```bash
npm install -g @phase2/outline-cli
outline init
```

#### With Yarn

```bash
yarn global add @phase2/outline-cli
outline init
```

## Contributing to Outline

Detailed information regarding how to contribute to Outline development, can be found in [CONTRIBUTING.md](./CONTRIBUTING.md). **Expect this information to be refined soon.**

Please see [Component Development Guide](.packages/outline-docs/src/guides/development/component-development) for information about developing for Outline.

[![Deploys by Netlify](https://www.netlify.com/v3/img/components/netlify-color-accent.svg 'Deploys by Netlify')](https://www.netlify.com)
