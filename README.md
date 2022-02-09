This is a WIP!!!! Not production ready and currently closed beta!!!
==================================================================

[comment]: <> (oclif-hello-world)

[comment]: <> (=================)

[comment]: <> (oclif example Hello World CLI)

[comment]: <> ([![oclif]&#40;https://img.shields.io/badge/cli-oclif-brightgreen.svg&#41;]&#40;https://oclif.io&#41;)

[comment]: <> ([![Version]&#40;https://img.shields.io/npm/v/rrochacli.svg&#41;]&#40;https://npmjs.org/package/rrochacli&#41;)

[comment]: <> ([![Downloads/week]&#40;https://img.shields.io/npm/dw/rrochacli.svg&#41;]&#40;https://npmjs.org/package/rrochacli&#41;)

[comment]: <> (<!-- toc -->)

[comment]: <> (* [Usage]&#40;#usage&#41;)

[comment]: <> (* [Commands]&#40;#commands&#41;)

[comment]: <> (<!-- tocstop -->)

[comment]: <> (# Usage)

[comment]: <> (<!-- usage -->)

[comment]: <> (```sh-session)

[comment]: <> ($ npm install -g rrochacli)

[comment]: <> ($ rrochacli COMMAND)

[comment]: <> (running command...)

[comment]: <> ($ rrochacli &#40;--version&#41;)

[comment]: <> (rrochacli/0.3.0 darwin-x64 node-v16.13.0)

[comment]: <> ($ rrochacli --help [COMMAND])

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli COMMAND)

[comment]: <> (...)

[comment]: <> (```)

[comment]: <> (<!-- usagestop -->)

[comment]: <> (# Commands)

[comment]: <> (<!-- commands -->)

[comment]: <> (* [`rrochacli help [COMMAND]`]&#40;#rrochacli-help-command&#41;)

[comment]: <> (* [`rrochacli plugins`]&#40;#rrochacli-plugins&#41;)

[comment]: <> (* [`rrochacli plugins:inspect PLUGIN...`]&#40;#rrochacli-pluginsinspect-plugin&#41;)

[comment]: <> (* [`rrochacli plugins:install PLUGIN...`]&#40;#rrochacli-pluginsinstall-plugin&#41;)

[comment]: <> (* [`rrochacli plugins:link PLUGIN`]&#40;#rrochacli-pluginslink-plugin&#41;)

[comment]: <> (* [`rrochacli plugins:uninstall PLUGIN...`]&#40;#rrochacli-pluginsuninstall-plugin&#41;)

[comment]: <> (* [`rrochacli plugins update`]&#40;#rrochacli-plugins-update&#41;)

[comment]: <> (* [`rrochacli publish`]&#40;#rrochacli-publish&#41;)

[comment]: <> (## `rrochacli help [COMMAND]`)

[comment]: <> (Display help for rrochacli.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli help [COMMAND] [-n])

[comment]: <> (ARGUMENTS)

[comment]: <> (  COMMAND  Command to show help for.)

[comment]: <> (FLAGS)

[comment]: <> (  -n, --nested-commands  Include all nested commands in the output.)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Display help for rrochacli.)

[comment]: <> (```)

[comment]: <> (_See code: [@oclif/plugin-help]&#40;https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts&#41;_)

[comment]: <> (## `rrochacli plugins`)

[comment]: <> (List installed plugins.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins [--core])

[comment]: <> (FLAGS)

[comment]: <> (  --core  Show core plugins.)

[comment]: <> (DESCRIPTION)

[comment]: <> (  List installed plugins.)

[comment]: <> (EXAMPLES)

[comment]: <> (  $ rrochacli plugins)

[comment]: <> (```)

[comment]: <> (_See code: [@oclif/plugin-plugins]&#40;https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts&#41;_)

[comment]: <> (## `rrochacli plugins:inspect PLUGIN...`)

[comment]: <> (Displays installation properties of a plugin.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins:inspect PLUGIN...)

[comment]: <> (ARGUMENTS)

[comment]: <> (  PLUGIN  [default: .] Plugin to inspect.)

[comment]: <> (FLAGS)

[comment]: <> (  -h, --help     Show CLI help.)

[comment]: <> (  -v, --verbose)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Displays installation properties of a plugin.)

[comment]: <> (EXAMPLES)

[comment]: <> (  $ rrochacli plugins:inspect myplugin)

[comment]: <> (```)

[comment]: <> (## `rrochacli plugins:install PLUGIN...`)

[comment]: <> (Installs a plugin into the CLI.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins:install PLUGIN...)

[comment]: <> (ARGUMENTS)

[comment]: <> (  PLUGIN  Plugin to install.)

[comment]: <> (FLAGS)

[comment]: <> (  -f, --force    Run yarn install with force flag.)

[comment]: <> (  -h, --help     Show CLI help.)

[comment]: <> (  -v, --verbose)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Installs a plugin into the CLI.)

[comment]: <> (  Can be installed from npm or a git url.)

[comment]: <> (  Installation of a user-installed plugin will override a core plugin.)

[comment]: <> (  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command)

[comment]: <> (  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in)

[comment]: <> (  the CLI without the need to patch and update the whole CLI.)

[comment]: <> (ALIASES)

[comment]: <> (  $ rrochacli plugins add)

[comment]: <> (EXAMPLES)

[comment]: <> (  $ rrochacli plugins:install myplugin )

[comment]: <> (  $ rrochacli plugins:install https://github.com/someuser/someplugin)

[comment]: <> (  $ rrochacli plugins:install someuser/someplugin)

[comment]: <> (```)

[comment]: <> (## `rrochacli plugins:link PLUGIN`)

[comment]: <> (Links a plugin into the CLI for development.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins:link PLUGIN)

[comment]: <> (ARGUMENTS)

[comment]: <> (  PATH  [default: .] path to plugin)

[comment]: <> (FLAGS)

[comment]: <> (  -h, --help     Show CLI help.)

[comment]: <> (  -v, --verbose)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Links a plugin into the CLI for development.)

[comment]: <> (  Installation of a linked plugin will override a user-installed or core plugin.)

[comment]: <> (  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello')

[comment]: <> (  command will override the user-installed or core plugin implementation. This is useful for development work.)

[comment]: <> (EXAMPLES)

[comment]: <> (  $ rrochacli plugins:link myplugin)

[comment]: <> (```)

[comment]: <> (## `rrochacli plugins:uninstall PLUGIN...`)

[comment]: <> (Removes a plugin from the CLI.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins:uninstall PLUGIN...)

[comment]: <> (ARGUMENTS)

[comment]: <> (  PLUGIN  plugin to uninstall)

[comment]: <> (FLAGS)

[comment]: <> (  -h, --help     Show CLI help.)

[comment]: <> (  -v, --verbose)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Removes a plugin from the CLI.)

[comment]: <> (ALIASES)

[comment]: <> (  $ rrochacli plugins unlink)

[comment]: <> (  $ rrochacli plugins remove)

[comment]: <> (```)

[comment]: <> (## `rrochacli plugins update`)

[comment]: <> (Update installed plugins.)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli plugins update [-h] [-v])

[comment]: <> (FLAGS)

[comment]: <> (  -h, --help     Show CLI help.)

[comment]: <> (  -v, --verbose)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Update installed plugins.)

[comment]: <> (```)

[comment]: <> (## `rrochacli publish`)

[comment]: <> (Publish dist/ folder)

[comment]: <> (```)

[comment]: <> (USAGE)

[comment]: <> (  $ rrochacli publish)

[comment]: <> (DESCRIPTION)

[comment]: <> (  Publish dist/ folder)

[comment]: <> (EXAMPLES)

[comment]: <> (  $ rrochacli publish)

[comment]: <> (```)

[comment]: <> (_See code: [dist/commands/publish.ts]&#40;https://github.com/ricdotnet/rrochacli/blob/v0.3.0/dist/commands/publish.ts&#41;_)

[comment]: <> (<!-- commandsstop -->)
