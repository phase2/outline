# Outline Design System
[![Version](https://img.shields.io/npm/v/@phase2/outline-core.svg)](https://npmjs.org/package/@phase2/outline-core)
[![Netlify](https://img.shields.io/badge/netlify-outline.style-success?logo=netlify&logoColor=ffffff&style=flat)](https://outlinejs.style/)
[![GitHub Pages](https://img.shields.io/badge/pages-outline.phase2tech.com-success?logo=github&logoColor=ffffff&style=flat)](https://outline.phase2tech.com/)
[![GitPod](https://img.shields.io/badge/gitpod-development-lightgray?logo=gitpod&logoColor=ffffff&style=flat)](https://gitpod.io/#https://github.com/phase2/outline)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/package.json)

Outline is a both a growing [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) library as well as a toolkit for building out bespoke design systems for a wide variety of client and personal usages. Outline is based on the latest technologies and tools to help your component authoring experience and facilitate adoption in your organization.

Outline and Outline design systems are built with many of the following notable tools:

[![Lit](https://img.shields.io/badge/lit-v2-blue?logo=lit&logoColor=ffffff&style=flat)](https://lit.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-v4.8.4-blue?logo=typescript&logoColor=ffffff&style=flat)](https://www.typescriptlang.org/)
[![CSS Custom Properties](https://img.shields.io/badge/CSS_Custom_Properties-Level_1-blue?logo=css3&logoColor=ffffff&style=flat)](https://www.w3.org/TR/css-variables-1/)
[![Storybook](https://img.shields.io/badge/Storybook-v7-blue?logo=storybook&logoColor=ffffff&style=flat)](https://www.w3.org/TR/css-variables-1/)
[![Postcss](https://img.shields.io/badge/PostCSS-v8-blue?logo=postcss&logoColor=ffffff&style=flat)](https://postcss.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&logoColor=ffffff&style=flat)](https://postcss.org/)

## Scaffolding a new Outline project

Outline is organized as a mono-repo and is available to use via NPM Packages and our CLI. The `outline-cli` simplifies the setup process using pre-defined templates available in the `outline-templates` package as guides on basic scaffolding of new Outline based projects.

### Using NPX (recommended)

> This method will load the latest version of the Outline CLI to cache, and prompt you when an update is available. This makes it easier than managing a local version to simply run `outline init` instead.

```bash
npx @phase2/outline-cli init
```

The `init` command will clone Outline's starter files then run `yarn install`

```bash
cd project-name
yarn start
```

## Contributing to Outline

Detailed information regarding how to contribute to Outline development, can be found in [CONTRIBUTING.md](./CONTRIBUTING.md). **Expect this information to be refined soon.**

[![Deploys by Netlify](https://www.netlify.com/v3/img/components/netlify-color-accent.svg 'Deploys by Netlify')](https://www.netlify.com)
