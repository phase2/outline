[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

For quick browser-based development, open this project in Gitpod. It will automatically build an environment and run Storybook.

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

## Contributing to Outline

Information regarding how to contribute to Outline development, can be found in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Local Setup

Outline is organized as a mono-repo and is available to use via NPM Packages and our CLI.

### Install the cli:
```bash
npm install -g @phase2/outline-cli
```
Then run the command:
```bash
outline init project-name
```

### Optionally use npx:
```bash
npx @phase2/outline-cli init project-name
```

The `init` command will clone Outline's starter files then run `yarn install`
```bash
cd project-name
```

### Ensure you are using the correct version of `npm`

```bash
nvm use
```

If you need to update your node version, see the [usage documentation](https://github.com/nvm-sh/nvm#usage) for nvm.

---

## Storybook Development

Primary component development is done and demonstrated via [Storybook](https://storybook.js.org/).

### Start storybook instance.

```bash
yarn start
```

---

## Production builds

Runs both `tsc` and `yarn rollup` to handle the following:

- Packaging individual components to `dist` directory.
- Packaging modern and legacy builds of all components to `dist` directory.

```bash
yarn build
```

---
> To only run the rollup build, which handles the component bundling into modern and legacy builds:

### One time build

```bash
yarn rollup
```

---

### Enable in watch mode

```bash
yarn rollup.watch
```

---

## Resetting local environment

The following commands help clean a local environment.

- Cleanup generated assets: `yarn clean`
- Cleanup node packages: `yarn reset`
- Full cleanup & restart: `yarn reboot`
