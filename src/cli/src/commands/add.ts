import { Command } from 'commander';

export const add = new Command()
  .command('add')
  .description('Add a new component')
  .action(() => {
    console.log('Adding a new component');
  });
