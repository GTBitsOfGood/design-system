#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';

const program = new Command();

program
  .version('1.0.0')
  .description('A simple CLI tool to interact with the BoG Design System')
  .addCommand(init)
  .addCommand(add);

program.parse(process.argv);
