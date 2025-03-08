import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
import { execSync } from 'child_process';

export const diff = new Command()
  .command('diff')
  .description('Update all components to the latest version')
  .action(async () => {
    const { componentDir } = await inquirer.prompt([
      {
        type: 'input',
        name: 'componentDir',
        message:
          'Enter the path to your component directory (this should be where the BoG components reside; if folders have been renamed, the command may not find them):',
        validate(input: string) {
          if (!input) return 'Component directory path is required.';
          if (!fs.existsSync(input)) return 'Directory does not exist.';
          return true;
        },
      },
    ]);

    // Fetch the latest remote production branch from GitHub
    try {
      console.log('Fetching latest remote production branch...');
      execSync('git fetch origin production', { stdio: 'inherit' });
    } catch (err) {
      console.error(
        'Failed to fetch remote production branch. Please ensure your remote repository is set up correctly.' + err
      );
      process.exit(1);
    }

    // Scan the provided directory for BoG component folders
    let componentFolders: string[] = [];
    try {
      componentFolders = fs
        .readdirSync(componentDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory() && /^Bog[A-Z]/.test(dirent.name))
        .map((dirent) => dirent.name);
    } catch (err) {
      console.error('Error reading the directory:', err);
      process.exit(1);
    }

    if (componentFolders.length === 0) {
      console.log('No BoG component folders found in the specified directory.');
      process.exit(0);
    }

    const upgradedComponents: string[] = [];

    // Loop through each component folder
    for (const folder of componentFolders) {
      const folderPath = path.join(componentDir, folder);
      console.log(`\nChecking ${folder} for differences...`);

      let diffOutput = '';
      try {
        // Run git diff command against the production branch for the component folder
        diffOutput = execSync(`git diff origin/production -- "${folderPath}"`, { encoding: 'utf8' });
      } catch (error: any) {
        diffOutput = error.stdout || '';
      }

      if (diffOutput && diffOutput.trim() !== '') {
        const { upgrade } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'upgrade',
            message: `Differences detected in ${folder}. Would you like to upgrade it to the current version from production?`,
            default: false,
          },
        ]);

        if (upgrade) {
          try {
            // Overwrite the local folder with the version from production
            execSync(`git checkout origin/production -- "${folderPath}"`, { stdio: 'inherit' });
            console.log(`${folder} successfully upgraded.`);
            upgradedComponents.push(folder);
          } catch (err) {
            console.error(`Failed to upgrade ${folder}:`, err);
          }
        } else {
          console.log(`Skipping upgrade for ${folder}.`);
        }
      } else {
        console.log(`${folder} is already up-to-date.`);
      }
    }

    console.log('\nSummary:');
    if (upgradedComponents.length > 0) {
      console.log(`Upgraded components: ${upgradedComponents.join(', ')}`);
    } else {
      console.log('No components were upgraded.');
    }
  });
