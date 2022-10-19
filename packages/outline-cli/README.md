Outline CLI
=================

> The command line tool for [Outline](https://github.com/phase2/outline).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/packages/outline-cli/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage

<!-- usage -->
```sh-session
$ npm install -g @phase2/outline-cli
$ outline COMMAND
running command...
$ outline (--version)
@phase2/outline-cli/0.0.7 darwin-x64 node-v18.7.0
$ outline --help [COMMAND]
USAGE
  $ outline COMMAND
...
```
<!-- usagestop -->
## Commands

<!-- commands -->
* [`outline help [COMMAND]`](#outline-help-command)
* [`outline init`](#outline-init)

### `outline help [COMMAND]`

Display help for outline.

```
USAGE
  $ outline help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for outline.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

### `outline init`

Scaffolds a new Outline Project

```
USAGE
  $ outline init

DESCRIPTION
  Scaffolds a new Outline Project

EXAMPLES
  $ outline init
```

_See code: [dist/commands/init.ts](https://github.com/phase2/outline/blob/v0.0.7/dist/commands/init.ts)_

