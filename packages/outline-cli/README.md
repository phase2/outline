Outline CLI
=================

> The command line tool for [Outline](https://github.com/phase2/outline).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/packages/outline-cli/package.json)

## Usage

### Using NPX (Recommended)

> Using `npx` will ensure you are always using the latest version of the CLI without having to ensure your global dependencies are up to date.

```shell
npx @phase2/outline-cli COMMAND
```

### Global NPM Instalation

```shell
npm install -g @phase2/outline-cli
```

## Commands

* `outline help [COMMAND]`
* [`outline init`](#outline-init)

### `outline init`

> Scaffolds a new [Outline](https://github.com/phase2/outline) project based on prompts or automated via arguments.

#### NPX (Interactive)

The following is the simplest method that will prompt you step by step through providing the `name`, `slug`, `packageName`, `description`, and `template` that will be sent to the `init` functionality.

```shell
npx @phase2/outline-cli init
```

#### NPX (Automated)

This method enables you to scaffold a design system by a set of provided values. The required `automated` flag must be provided in order to "disable" the default [inquirer](https://www.npmjs.com/package/inquirer#documentation) prompts.

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
#### Globally

```shell
outline init
```
