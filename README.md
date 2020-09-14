@skywap/hvm
===========

Hasura version manager.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@skywap/hvm.svg)](https://npmjs.org/package/@skywap/hvm)
[![Downloads/week](https://img.shields.io/npm/dw/@skywap/hvm.svg)](https://npmjs.org/package/@skywap/hvm)
[![License](https://img.shields.io/npm/l/@skywap/hvm.svg)](https://github.com/SkylarWapato/hvm/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @skywap/hvm
$ hvm COMMAND
running command...
$ hvm (-v|--version|version)
@skywap/hvm/0.1.4 darwin-x64 node-v12.14.1
$ hvm --help [COMMAND]
USAGE
  $ hvm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hvm help [COMMAND]`](#hvm-help-command)
* [`hvm list`](#hvm-list)
* [`hvm switch VERSION`](#hvm-switch-version)

## `hvm help [COMMAND]`

display help for hvm

```
USAGE
  $ hvm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `hvm list`

Returns a list of available clis

```
USAGE
  $ hvm list

EXAMPLE
  $ hvm switch v1.2.2
```

_See code: [src/commands/list.ts](https://github.com/SkylarWapato/hvm/blob/v0.1.4/src/commands/list.ts)_

## `hvm switch VERSION`

Pass the desired version as a command line argument.

```
USAGE
  $ hvm switch VERSION

EXAMPLE
  $ hvm switch v1.2.2
```

_See code: [src/commands/switch.ts](https://github.com/SkylarWapato/hvm/blob/v0.1.4/src/commands/switch.ts)_
<!-- commandsstop -->
