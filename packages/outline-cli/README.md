Outline CLI
=================

> The command line tool for [Outline](https://github.com/phase2/outline).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/packages/outline-cli/package.json)

## Features

The `@phase2/outline-cli` handles a multitude (1 presently) of common day to day tasks when using Outline.

- Scaffold new design system project(s) using the CLI.
- @todo: Scaffold new components using the CLI.
- @todo: Scaffold new controllers using the CLI.
- @debug: Do some things.
- @review: Do some things.
- @note: Do some things.
- @hack: Do some things.
- @todo: Do some things.

## Usage

### Using NPX (Recommended)

> Using `npx` will ensure you are always using the latest version of the CLI without having to ensure your global dependencies are up to date.

```shell
npx @phase2/outline-cli COMMAND
```

#### Checking the version being used via NPX

You will want this version to match up with the latest version at [npmjs](https://www.npmjs.com/package/@phase2/outline-cli) [![Version](https://img.shields.io/npm/v/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli).

```shell
npx @phase2/outline-cli --version
```

#### Updating Version used by NPX

Ensure cache is cleared if local environment is not looking for the latest version. Uses the [clear-npx-cache](https://www.npmjs.com/package/clear-npx-cache) package.

```shell
npx clear-npx-cache
```

#### Check the version with the cli again

```shell
npx @phase2/outline-cli --version
```

### Global NPM Installation

```shell
npm install -g @phase2/outline-cli
```

If you install `@phase2/outline-cli` locally, rather than running the commands with `npx @phase2/outline-cli`, you'd preface those commands with `outline COMMAND` instead.

```shell
outline --version
outline help init
outline init
```

## Commands

- `npx @phase2/outline-cli help [COMMAND]`
- [`npx @phase2/outline-cli init`](#outline-init)

### `outline init`

> Scaffolds a new [Outline](https://github.com/phase2/outline) project based on prompts or automated via arguments.

```text
Scaffolds a new Outline Project

USAGE
  $ outline init [-a] [-n <value>] [-s <value>] [-p <value>] [-d <value>] [-t <value>]

FLAGS
  -a, --automated            Enable/disable interactive mode.
  -d, --description=<value>  Project description.
  -n, --name=<value>         Project name.
  -p, --packageName=<value>  Project package name.
  -s, --slug=<value>         Project slug.
  -t, --template=<value>     Project template.

DESCRIPTION
  Scaffolds a new Outline Project

EXAMPLES
  $ outline init
  $ npx @phase2/outline-cli init
```

#### Interactive

The following is the simplest method that will prompt you step by step through providing the `name`, `slug`, `packageName`, `description`, and `template` that will be sent to the `init` functionality.

```shell
npx @phase2/outline-cli init
```

#### Automated

This method enables you to scaffold a design system by a set of provided values. The required `automated` flag must be provided in order to "disable" the default [inquirer](https://www.npmjs.com/package/inquirer#documentation) prompts.

When providing flags to the `init` command, it should be assumed that ALL prompts are provided through flags, and not just one. Using the `--automated` flag turns off the inquirer functionality and would otherwise provide default values for all missing flags.

##### Sample 1

```shell
npx @phase2/outline-cli init \
  --automated \
  --name="Design System: 1" \
  --slug="design-system-one" \
  --packageName="@phase2/design-system-one" \
  --description="Web component library powered by OutlineJS." \
  --template="default" 
```

##### Sample 2

```shell
npx @phase2/outline-cli init \
  --automated \
  --name="Design System: 2" \
  --slug="design-system-two" \
  --packageName="@phase2/design-system-two" \
  --description="Web component library powered by OutlineJS." \
  --template="default"
```

##### Sample 3

```shell
npx @phase2/outline-cli init \
  --automated \
  --name="Design System: 3" \
  --slug="design-system-three" \
  --packageName="@phase2/design-system-three" \
  --description="Web component library powered by OutlineJS." \
  --template="default"  
```
