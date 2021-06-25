# Outline Design System

Outline is a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) based design system starter kit. Outline is based on the latest technologies and tools to help your component authoring experience and facilitate adoption in your organization.

Outline is built with the following tools:

- [Lit](https://lit.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Custom Properties (CSS Vars)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS](https://tailwindcss.com/) (Optional)
- [Tailwind JIT Compiler](https://tailwindcss.com/docs/just-in-time-mode)
- [Storybook](https://storybook.js.org/)
- [Rollup](https://rollupjs.org/guide/en/)

## Setup

After pulling code to your local environment, run the following steps to ensure your environment is installed and up to date.

```bash
# Ensure you are using the correct version of `npm`.
nvm use
# Install project dependencies.
yarn install
```

## Storybook Development

Primary component development is done and demonstrated via [Storybook](https://storybook.js.org/).

```bash
# Start storybook instance.
yarn start
```

## Code Cleanup

Code is not automatically formatted upon commit. As a matter of best practices, you should run `yarn fmt` prior to committing code in order that pipelines will not fail in the `Test and Build` task.  

```bash
# Run all Prettier and SVG formatting.
yarn fmt
# Run Prettier formatting.
yarn fmt.code
# Run svgo formatting.
yarn fmt.svg
```

## Production builds

Runs both `tsc` and `yarn rollup` to handle the following:

- Packaging individual components to `dist` directory.
- Packaging modern and legacy builds of all components to `dist` directory.

```bash
yarn build
```

To only run the rollup build, which handles the component bundling into modern and legacy builds:

```bash
# One time build.
yarn rollup
# Enable in watch mode.
yarn rollup.watch
```

## Resetting local environment

The following commands help clean a local environment.

- Cleanup generated assets: `yarn clean`
- Cleanup node packages: `yarn reset`
- Full cleanup & restart: `yarn reboot`
