# Outline Documentation

Developing for Outline has different considerations than developing with Outline.

## Developing With Outline

If you are using Outline to create a design system, you should refer to the scaffolding information in the main [../README.md](README.md) file along with the documentation in the [../packages/outline-docs](@phase2/outline-docs) package. This package should be added by default when you initialize your Outline project and its contents should show in your project's Storybook instance.

## Developing For Outline

If you are developing to improve Outline there are two modes to consider for Outline packages:

 * running in the context of the Outline project
 * running in the context of a project using Outline.

Running in the context of the Outline project is relatively straightforward as it simply involves running commands in this repo. For example, `yarn run start` will start Storybook in dev mode. Running in the context of a project, however, is more complicated. There are two techniques you should be aware of.

### Linking

If you want to test your work within the context of a project and your change doesn't involve the installation of a package or initialization of a project, [linking techniques](https://classic.yarnpkg.com/lang/en/docs/cli/link/) may be sufficient for your needs.

### Outline CLI and project template development

When adjusting the project initialization process it can be executed via direct reference instead of using the `@phase2/outline-cli` package. There is also a flag to the `init` command, `-l`, that will cause the templates used to come from the `../packages/outline-templates` and `../packages/outline-storybook` directories instead of the published `@phase2/outline-templates` and `@phase2/outline-storybook` packages.

For example, to spin up a project directory as a sibling to this repo run:

```bash
npx ./outline/packages/outline-cli init -l
```

> Note that this does not currently cause any initially installed packages to use linking technique above.
