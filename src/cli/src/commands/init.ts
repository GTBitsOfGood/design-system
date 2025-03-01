import { Command } from 'commander';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import prompts from 'prompts';
import { execSync } from 'child_process';
import path from 'path';

const DEV_DEPENDENCIES = ['tailwindcss', '@tailwindcss/postcss'];
const DEPENDENCIES = [
  '@phosphor-icons/react',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-icons',
  '@radix-ui/themes',
  'phosphor-react',
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
    const { root } = await prompts([
      {
        type: 'text',
        name: 'root',
        message: 'Where is the root of your project?',
        initial: './',
      },
    ]);
    if (!existsSync(root)) {
      console.error('The root directory does not exist.');
      return;
    }

    const { installDeps } = await prompts({
      name: 'installDeps',
      type: 'confirm',
      message: 'Do you want to install dependencies?',
      initial: true,
    });
    if (!installDeps) {
      console.error('Skipping dependencies. You will not be able to use the design system without additional setup.');
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

      console.log('installing dependencies...');
      execSync(`${packageManager} -D ${DEV_DEPENDENCIES.join(' ')}`);
      execSync(`${packageManager} ${DEPENDENCIES.join(' ')}`);
    }

    const { setupTailwind } = await prompts({
      name: 'setupTailwind',
      type: 'confirm',
      message: 'Do you want to set up Tailwind?',
      initial: true,
    });

    if (setupTailwind) {
      console.log('Setting up Tailwind v4 for Next.js...');
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
    }

    const { setupStyles } = await prompts({
      name: 'setupStyles',
      type: 'confirm',
      message: 'Do you want to set up the Bits of Good theme?',
      initial: true,
    });

    if (!setupStyles) {
      console.error('Skipping the Bits of Good theme setup. Your project may not look like the Design System Website.');
      if (setupTailwind) {
        console.error(
          'You will need to finish the Tailwind setup manually. Create a css file with `@import "tailwindcss"` in it, and make sure you import it into your src/app/layout.tsx or src/pages/_app.tsx.'
        );
      }
    } else {
      const { stylePath } = await prompts({
        name: 'stylePath',
        type: 'text',
        message: 'Where should the BOG theme and tailwindcss stylesheet live?',
        initial: 'src/styles/globals.css',
      });

      const response = await fetch(
        'https://raw.githubusercontent.com/GTBitsOfGood/design-system/refs/heads/main/src/styles/globals.css'
      );
      const styles = await response.text();

      await mkdir(path.dirname(stylePath), { recursive: true });
      await writeFile(stylePath, styles, 'utf8');
      console.log('BOG theme and tailwindcss stylesheet created.');
      console.log('make sure to import it into your src/app/layout.tsx or src/pages/_app.tsx');
    }

    const { setupFonts } = await prompts({
      name: 'setupFonts',
      type: 'confirm',
      message: 'Do you want to set up the Bits of Good fonts?',
      initial: true,
    });

    if (!setupFonts) {
      console.error('Skipping the Bits of Good fonts setup. Your project may not look like the Design System Website.');
    } else {
      const { fontPath } = await prompts({
        name: 'fontPath',
        type: 'text',
        message: 'Where is the public directory for your project?',
        initial: './public/',
      });
      await mkdir(path.join(fontPath, 'fonts'), { recursive: true });

      await Promise.all(
        FONTS.map(async (font) => {
          const response = await fetch(
            `https://raw.githubusercontent.com/GTBitsOfGood/design-system/main/public/fonts/${font}`
          );
          if (!response.ok) {
            throw new Error(`Failed to download font: ${font}, status: ${response.status}`);
          }
          const fontData = await response.arrayBuffer();
          await writeFile(path.join(fontPath, 'fonts', font), Buffer.from(fontData), 'binary');
        })
      );
      console.log('BOG fonts downloaded successfully.');
    }
  });
