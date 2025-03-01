import { Command } from 'commander';
import { copy } from 'fs-extra';
import { existsSync } from 'fs';
import path from 'path';
import prompts from 'prompts';

const COMPONENTS = ['checkbox', 'radio-group', 'radio-item'];

export const add = new Command()
  .command('add')
  .description('Add a new component')
  .option('-a, --all', 'add all components')
  .action(async (options) => {
    try {
      let selectComponents: string[] = [];
      if (options.all) {
        selectComponents = [...COMPONENTS];
        console.log(`adding all components: ${selectComponents.join(', ')}`);
      } else {
        const { components } = await prompts({
          type: 'multiselect',
          name: 'components',
          message: 'select the components you want to install:',
          choices: COMPONENTS.map((component) => ({
            title: component,
            value: component,
          })),
          validate: (components) =>
            components.length > 0 ? true : 'please select atleast one component from the list',
        });

        selectComponents = components || [];

        if (selectComponents.length === 0) {
          console.log('no components selected.');
          return;
        }
      }

      const { installPath } = await prompts({
        type: 'text',
        name: 'installPath',
        message: 'please enter the path where the components should be installed:',
        validate: (input) => (input.trim().length > 0 ? true : 'please enter a valid path'),
      });

      if (!installPath) {
        console.log('no valid path inputted.');
        return;
      }

      if (!existsSync(installPath)) {
        console.error(`ERROR: invalid path ${installPath} does not exist.`);
        return;
      }

      const validComponents: string[] = [];
      const invalidComponents: string[] = [];

      selectComponents.forEach((component) => {
        if (COMPONENTS.includes(component)) {
          validComponents.push(component);
        } else {
          invalidComponents.push(component);
        }
      });

      if (validComponents.length === 0) {
        console.error('ERROR: no valid components have been selected.');
        return;
      }

      for (const component of validComponents) {
        const folderName = `Bog${component
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')}`;

        const sourcePath = path.join(__dirname, '../../../components', folderName);
        const destPath = path.join(installPath, folderName);

        await copy(sourcePath, destPath);
        console.log(`Added ${folderName} to ${installPath}.`);
      }

      if (invalidComponents.length > 0) {
        console.log(
          `ERROR: the following components are invalid and were not installed: ${invalidComponents.join(', ')}`
        );
      }

      console.log(`successfully installed ${validComponents.length} component(s)!`);
    } catch (error) {
      console.error(`Error: ${error.message || 'unknown error occured'}`);
    }
  });
