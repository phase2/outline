Outline CLI
=================

> The command line tool for [Outline](https://github.com/phase2/outline).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@phase2/outline-cli.svg)](https://npmjs.org/package/@phase2/outline-cli)
[![License](https://img.shields.io/npm/l/@phase2/outline-cli.svg)](https://github.com/phase2/outline/blob/next/packages/outline-cli/package.json)

<!-- toc -->

<!-- tocstop -->
## Usage

<!-- usage -->
```sh-session
$ npm install -g @phase2/outline-cli
$ outline COMMAND
running command...
$ outline (--version)
@phase2/outline-cli/0.0.11 darwin-x64 node-v18.7.0
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
* [`outline plugins`](#outline-plugins)
* [`outline plugins:install PLUGIN...`](#outline-pluginsinstall-plugin)
* [`outline plugins:inspect PLUGIN...`](#outline-pluginsinspect-plugin)
* [`outline plugins:install PLUGIN...`](#outline-pluginsinstall-plugin-1)
* [`outline plugins:link PLUGIN`](#outline-pluginslink-plugin)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin-1)
* [`outline plugins:uninstall PLUGIN...`](#outline-pluginsuninstall-plugin-2)
* [`outline plugins update`](#outline-plugins-update)

## `outline help [COMMAND]`

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

## `outline init`

Scaffolds a new Outline Project

```
USAGE
  $ outline init

DESCRIPTION
  Scaffolds a new Outline Project

EXAMPLES
  $ outline init
```

_See code: [dist/commands/init.ts](https://github.com/phase2/outline/blob/v0.0.11/dist/commands/init.ts)_

## `outline plugins`

List installed plugins.

```
USAGE
  $ outline plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ outline plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `outline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ outline plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ outline plugins add

EXAMPLES
  $ outline plugins:install myplugin 

  $ outline plugins:install https://github.com/someuser/someplugin

  $ outline plugins:install someuser/someplugin
```

## `outline plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ outline plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ outline plugins:inspect myplugin
```

## `outline plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ outline plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ outline plugins add

EXAMPLES
  $ outline plugins:install myplugin 

  $ outline plugins:install https://github.com/someuser/someplugin

  $ outline plugins:install someuser/someplugin
```

## `outline plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ outline plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ outline plugins:link myplugin
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ outline plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ outline plugins unlink
  $ outline plugins remove
```

## `outline plugins update`

Update installed plugins.

```
USAGE
  $ outline plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
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
