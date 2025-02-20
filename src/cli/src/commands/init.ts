import { Command } from 'commander';

export const init = new Command()
  .command('init')
  .description('Initialize a new project')
  .action(() => {
    console.log('Initializing the project');
  });
