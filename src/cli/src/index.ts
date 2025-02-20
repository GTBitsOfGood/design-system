#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';
import { diff } from './commands/diff';

const program = new Command();

program
  .version('1.0.0')
  .description('A simple CLI tool to interact with the BoG Design System')
  .addCommand(init)
  .addCommand(add)
  .addCommand(diff);

program.parse(process.argv);
