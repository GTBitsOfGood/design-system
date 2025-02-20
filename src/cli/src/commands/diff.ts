import { Command } from 'commander';

export const diff = new Command()
  .command('diff')
  .description('Update all components to the latest version')
  .action(() => {
    console.log('Checking for differences...');
  });
