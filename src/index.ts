#!/usr/bin/env node

import 'reflect-metadata';

import * as yargs from 'yargs';

import { ICommand } from './commands/command.interface';
import { container, TYPES } from './ioc';

yargs
  .command(container.getNamed<ICommand>(TYPES.Command, 'sayHello'))
  .demandCommand(1, 'At least one command is required.')
  .help()
  .argv;
