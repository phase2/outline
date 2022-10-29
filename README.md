# Outline Design System

Outline is a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) based design system starter kit. Outline is based on the latest technologies and tools to help your component authoring experience and facilitate adoption in your organization.

Outline is built with the some of the following tools:

- [Lit](https://lit.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Custom Properties (CSS Vars)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS](https://tailwindcss.com/) (Optional)
- [Storybook](https://storybook.js.org/)

## Contributing to Outline

Information regarding how to contribute to Outline development, can be found in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Setting up a new Outline project

Outline is organized as a mono-repo and is available to use via NPM Packages and our CLI. The `outline-cli` simplifies the setup process using pre-defined templates available in the `outline-templates` package as guides on basic scaffolding of new projects.

### Using NPX (recommended)

```bash
npx @phase2/outline-cli init
```

The `init` command will clone Outline's starter files then run `yarn install`

```bash
cd project-name
yarn start
```

[![Deploys by Netlify](https://www.netlify.com/v3/img/components/netlify-color-accent.svg 'Deploys by Netlify')](https://www.netlify.com)
