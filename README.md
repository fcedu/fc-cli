fc-cli
======

丰橙学院脚手架

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fc-cli.svg)](https://npmjs.org/package/fc-cli)
[![Downloads/week](https://img.shields.io/npm/dw/fc-cli.svg)](https://npmjs.org/package/fc-cli)
[![License](https://img.shields.io/npm/l/fc-cli.svg)](https://github.com/fc/fc-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fc-cli
$ fc COMMAND
running command...
$ fc (-v|--version|version)
fc-cli/0.0.0 darwin-x64 node-v10.9.0
$ fc --help [COMMAND]
USAGE
  $ fc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fc hello [FILE]`](#fc-hello-file)
* [`fc help [COMMAND]`](#fc-help-command)
* [`fc init [FILE]`](#fc-init-file)

## `fc hello [FILE]`

describe the command here

```
USAGE
  $ fc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ fc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/fc/fc-cli/blob/v0.0.0/src/commands/hello.ts)_

## `fc help [COMMAND]`

display help for fc

```
USAGE
  $ fc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `fc init [FILE]`

describe the command here

```
USAGE
  $ fc init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/fc/fc-cli/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
