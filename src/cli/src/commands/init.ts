import { Command } from 'commander';
import { existsSync, readFileSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import prompts from 'prompts';
import { execSync } from 'child_process';
import path from 'path';
import ora from 'ora';

const DEV_DEPENDENCIES = ['tailwindcss', '@tailwindcss/postcss'];
const DEPENDENCIES = [
  '@radix-ui/react-checkbox',
  '@radix-ui/react-icons',
  '@radix-ui/themes',
  '@phosphor-icons/react',
  'radix-ui',
];
const FONTS = [
  'visbyextrabold-webfont.woff2',
  'visbyextrabold-webfont.woff',
  'opensans-regular-webfont.woff2',
  'opensans-regular-webfont.woff',
];

export const init = new Command()
  .command('init')
  .description('Initialize a new project')
  .action(async () => {
    try {
      const { root } = await prompts([
        {
          type: 'text',
          name: 'root',
          message: 'Where is the root of your project?',
          initial: './',
        },
      ]);
      if (!existsSync(root)) {
        console.error('ERROR: The root directory does not exist.');
        return;
      }

      const { installDeps } = await prompts({
        name: 'installDeps',
        type: 'confirm',
        message: 'Do you want to install dependencies?',
        initial: true,
      });
      if (!installDeps) {
        console.error(
          'ERROR: Skipping dependencies. You will not be able to use the design system without additional setup.'
        );
      } else {
        const { packageManager } = await prompts({
          type: 'select',
          name: 'packageManager',
          message: 'Which package manager do you want to use?',
          choices: [
            // the value is the command to run to install a package
            { title: 'npm', value: 'npm install' },
            { title: 'yarn', value: 'yarn add' },
            { title: 'pnpm', value: 'pnpm add' },
            { title: 'bun', value: 'bun add' },
          ],
        });

        if (packageManager) {
          const spinner = ora('Installing dependencies...').start();
          execSync(`cd ${root} && ${packageManager} -D ${DEV_DEPENDENCIES.join(' ')}`);
          spinner.text = 'installing dependencies...';
          execSync(`cd ${root} && ${packageManager} ${DEPENDENCIES.join(' ')}`);
          spinner.succeed('dependencies installed!');
        } else {
          console.error('ERROR: Package manager selection was cancelled. Dependencies not installed.');
        }
      }

      const { setupTailwind } = await prompts({
        name: 'setupTailwind',
        type: 'confirm',
        message: 'Do you want to set up Tailwind v4 for Next.js?',
        initial: true,
      });

      if (setupTailwind) {
        const spinner = ora('setting up Tailwind v4 for Next.js...').start();
        await writeFile(
          path.join(root, 'postcss.config.mjs'),
          `
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
`.trim(),
          'utf8'
        );
        spinner.succeed('Tailwind v4 setup complete!');
      }

      const { setupStyles } = await prompts({
        name: 'setupStyles',
        type: 'confirm',
        message: 'Do you want to set up the Bits of Good Sunset theme?',
        initial: true,
      });

      if (!setupStyles) {
        console.error(
          'ERROR: Skipping the Bits of Good theme setup. Your project may not look like the Design System Website.'
        );
        if (!setupTailwind) {
          console.error(
            'ERROR: You will need to finish the Tailwind setup manually. Create a css file with `@import "tailwindcss"` in it, and make sure you import it into your src/app/layout.tsx or src/pages/_app.tsx.'
          );
        }
      } else {
        const { stylePath } = await prompts({
          name: 'stylePath',
          type: 'text',
          message:
            "Input the path relative to your project's root directory where the global stylesheet should be copied (e.g ./src/styles/globals.css)",
          initial: 'src/styles/globals.css',
        });

        const response = await fetch(
          'https://raw.githubusercontent.com/GTBitsOfGood/design-system/refs/heads/main/src/styles/globals.css'
        );
        const styles = await response.text();

        await mkdir(path.dirname(path.join(root, stylePath)), { recursive: true });
        if (existsSync(path.join(root, stylePath))) {
          const { overwrite } = await prompts({
            name: 'overwrite',
            type: 'confirm',
            message: `The file ${stylePath} already exists. Do you want to overwrite it?`,
            initial: true,
          });

          if (!overwrite) {
            // we failed to install the stylesheet which is an unrecoverable error
            console.error('BoG setup failed.');
            return;
          }
        }

        await writeFile(path.join(root, stylePath), styles, 'utf8');
        console.log('Bits of Good theme and tailwindcss stylesheet created.');
        console.log('Make sure to import it into your src/app/layout.tsx or src/pages/_app.tsx');

        // if we're in a next.js app router project
        if (existsSync(path.join(root, 'src', 'app', 'layout.tsx'))) {
          const contents = readFileSync(path.join(root, 'src', 'app', 'layout.tsx'), 'utf8');
          const relativePath = path.relative(path.join(root, 'src', 'app'), path.join(root, stylePath));

          // (somewhat naive) check if the stylesheet is already imported into the layout file
          if (contents.includes(relativePath)) {
            console.log(
              'It seems like the stylesheet you chose is already imported into your layout file correctly. Tailwind setup complete!'
            );
          } else {
            const { updateLayout } = await prompts({
              name: 'updateLayout',
              type: 'confirm',
              message: `It seems like the stylesheet you chose is not already imported into your layout file. Would you like to update it?`,
              initial: true,
            });

            if (!updateLayout) {
              console.log(
                'VERY IMPORTANT: make sure to import your css file into your layout file so the theme is applied correctly. Follow the instructions on the tailwind documentation: `https://tailwindcss.com/docs/installation/using-postcss`'
              );
            } else {
              // add the stylesheet import to the top of the layout file
              writeFile(path.join(root, 'src', 'app', 'layout.tsx'), `import "${relativePath}";\n${contents}`, 'utf8');
            }
          }
        } else {
          // not next.js app router project, so the user has to manually import the stylesheet
          console.log('non-next.js app router project detected.');
          console.log(
            // make "VERY IMPORTANT" red using ANSI escape codes
            '\x1b[31mVERY IMPORTANT\x1b[0m: make sure to import your css file into your code so the theme is applied correctly.\n' +
              'Follow the instructions on the tailwind documentation: `https://tailwindcss.com/docs/installation/using-postcss`'
          );
        }
      }

      const { setupFonts } = await prompts({
        name: 'setupFonts',
        type: 'confirm',
        message: 'Do you want to set up the Bits of Good fonts?',
        initial: true,
      });

      if (!setupFonts) {
        console.error(
          'ERROR: Skipping the Bits of Good fonts setup. Your project may not look like the Design System Website.'
        );
      } else {
        const { fontPath } = await prompts({
          name: 'fontPath',
          type: 'text',
          message: 'Input your public directory for your project relative to the root directory.',
          initial: './public/',
        });
        await mkdir(path.join(root, fontPath, 'fonts'), { recursive: true });

        await Promise.all(
          FONTS.map(async (font) => {
            const response = await fetch(
              `https://raw.githubusercontent.com/GTBitsOfGood/design-system/main/public/fonts/${font}`
            );
            if (!response.ok) {
              throw new Error(`ERROR: Failed to download font: ${font}, status: ${response.status}`);
            }
            const fontData = await response.arrayBuffer();
            await writeFile(path.join(root, fontPath, 'fonts', font), Buffer.from(fontData), 'binary');
          })
        );
        console.log('Bits of Good fonts downloaded successfully.');
      }

      console.log('Bits of Good design system init complete.');
    } catch (e: any) {
      console.error('ERROR: Bits of Good design system init failed.');
      console.error(e);
    }
  });
