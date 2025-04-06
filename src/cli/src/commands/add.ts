import { Command } from 'commander';
import fs, { existsSync, mkdirSync } from 'fs';
import path from 'path';
import prompts from 'prompts';

const COMPONENTS = [
  'checkbox',
  'radio-group',
  'radio-item',
  'button',
  'icon',
  'form',
  'switch',
  'text-input',
  'dropdown',
];

export const add = new Command()
  .command('add')
  .description('Add a new component')
  .option('-a, --all', 'add all components')
  .action(async (options) => {
    try {
      let selectComponents: string[] = [];
      if (options.all) {
        selectComponents = [...COMPONENTS];
        console.log(`Adding all components: ${selectComponents.join(', ')}`);
      } else {
        const { components } = await prompts({
          type: 'multiselect',
          name: 'components',
          message: 'Select the components you want to copy from the design system:',
          choices: COMPONENTS.map((component) => ({
            title: component,
            value: component,
          })),
          validate: (components) =>
            components.length > 0 ? true : 'Please select at least one component from the list',
        });

        selectComponents = components || [];

        if (selectComponents.length === 0) {
          console.log('No components selected.');
          return;
        }
      }

      const { installPath } = await prompts({
        type: 'text',
        name: 'installPath',
        initial: './src/components/',
        message:
          'Input the path relative to your current directory to copy the components to (e.g ./desktop/design-system/)',
        validate: (input) => (input.trim().length > 0 ? true : 'Please enter a valid path'),
      });

      if (!installPath) {
        console.log('No valid path inputted.');
        return;
      }

      if (!existsSync(installPath)) {
        mkdirSync(installPath, { recursive: true });
        console.error(`creating ${installPath} directory...`);
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
        console.error('ERROR: No valid components have been selected.');
        return;
      }

      for (const component of validComponents) {
        const folderName = `Bog${component
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')}`;
        const destPath = path.join(installPath, folderName);

        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }

        const componentContent = await fetch(
          `https://raw.githubusercontent.com/GTBitsOfGood/design-system/refs/heads/production/src/components/${folderName}/${folderName}.tsx`
        );
        const styles = await fetch(
          `https://raw.githubusercontent.com/GTBitsOfGood/design-system/refs/heads/production/src/components/${folderName}/styles.module.css`
        );
        const componentText = await componentContent.text();
        const stylesText = await styles.text();
        fs.writeFileSync(path.join(destPath, `${folderName}.tsx`), componentText);
        fs.writeFileSync(path.join(destPath, 'styles.module.css'), stylesText);
        console.log(`Added ${folderName} to ${installPath}.`);
      }

      if (invalidComponents.length > 0) {
        console.error(
          `ERROR: The following components are invalid and were not installed: ${invalidComponents.join(', ')}`
        );
      }

      console.log(`Successfully copied ${validComponents.length} component(s)!`);
    } catch (error: any) {
      console.error(`ERROR: ${error.message || 'Unknown error occurred'}`);
    }
  });
