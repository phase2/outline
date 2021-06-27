# Contributing to Outline

> This document serves to help understand how to setup a local Outline environment, and how to contribute to the open source Outline project For project specific details, please consult the README.md in your project.

## Setup

Run the following steps to ensure your environment is installed and up to date. This assumes you are using [NVM](https://github.com/nvm-sh/nvm) locally to manage your NPM version(s).

```bash
# Checkout the repository.
git clone git@github.com:phase2/outline.git && cd outline
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

## Committing code

Outline uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
> The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

### Sample commit messages:

#### Patch releases

`fix: updated Storybook packages`
This will create a patch release. (1.0.0 --> 1.0.1)

#### Minor releases

`feat: added outline-something component`
This will create a minor release (1.0.0 --> 1.1.0)

`feat(ci): updated CI setup`
This will create a minor release (1.0.0 --> 1.1.0) and uses (ci) to 'tag' this as a feature related to the continuous integration setup.

#### Major releases

```bash
feat: refactoring the something component

BREAKING CHANGE - Requires a rewrite of all your code.
```

This will create a major release. (1.0.0 --> 2.0.0)

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
