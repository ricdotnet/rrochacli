oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rrochacli.svg)](https://npmjs.org/package/rrochacli)
[![Downloads/week](https://img.shields.io/npm/dw/rrochacli.svg)](https://npmjs.org/package/rrochacli)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rrochacli
$ rrochacli COMMAND
running command...
$ rrochacli (--version)
rrochacli/0.1.15 darwin-x64 node-v16.13.0
$ rrochacli --help [COMMAND]
USAGE
  $ rrochacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rrochacli help [COMMAND]`](#rrochacli-help-command)
* [`rrochacli plugins`](#rrochacli-plugins)
* [`rrochacli plugins:inspect PLUGIN...`](#rrochacli-pluginsinspect-plugin)
* [`rrochacli plugins:install PLUGIN...`](#rrochacli-pluginsinstall-plugin)
* [`rrochacli plugins:link PLUGIN`](#rrochacli-pluginslink-plugin)
* [`rrochacli plugins:uninstall PLUGIN...`](#rrochacli-pluginsuninstall-plugin)
* [`rrochacli plugins update`](#rrochacli-plugins-update)
* [`rrochacli publish`](#rrochacli-publish)

## `rrochacli help [COMMAND]`

Display help for rrochacli.

```
USAGE
  $ rrochacli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rrochacli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `rrochacli plugins`

List installed plugins.

```
USAGE
  $ rrochacli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rrochacli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `rrochacli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rrochacli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rrochacli plugins:inspect myplugin
```

## `rrochacli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rrochacli plugins:install PLUGIN...

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
  $ rrochacli plugins add

EXAMPLES
  $ rrochacli plugins:install myplugin 

  $ rrochacli plugins:install https://github.com/someuser/someplugin

  $ rrochacli plugins:install someuser/someplugin
```

## `rrochacli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ rrochacli plugins:link PLUGIN

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
  $ rrochacli plugins:link myplugin
```

## `rrochacli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rrochacli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rrochacli plugins unlink
  $ rrochacli plugins remove
```

## `rrochacli plugins update`

Update installed plugins.

```
USAGE
  $ rrochacli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `rrochacli publish`

Publish dist/ folder

```
USAGE
  $ rrochacli publish

DESCRIPTION
  Publish dist/ folder

EXAMPLES
  $ rrochacli publish
```

_See code: [dist/commands/publish.ts](https://github.com/ricdotnet/rrochacli/blob/v0.1.15/dist/commands/publish.ts)_
<!-- commandsstop -->
