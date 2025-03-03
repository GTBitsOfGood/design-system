import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Octokit } from '@octokit/rest';
import ora from 'ora';

// Promisify fs functions
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
// const mkdir = promisify(fs.mkdir);
// const stat = promisify(fs.stat);

// GitHub repository information
const REPO_OWNER = 'gtbitsofgood';
const REPO_NAME = 'design-system';
const BRANCH = 'main'; // or whatever your production branch is named

// Component directory in the repository
const COMPONENTS_DIR = 'src/components';

export const diff = new Command()
  .command('diff')
  .description('Update all components to the latest version')
  .action(async () => {
    console.log(chalk.blue('Checking for differences in BoG components...'));

    // Ask for the component directory
    const { componentDir } = await inquirer.prompt([
      {
        type: 'input',
        name: 'componentDir',
        message:
          'Where is your component directory? (This should be where the components from the design system are located. If component folders have been renamed, our command will not find them to check)',
        validate: (input) => {
          if (!input) return 'Component directory is required';
          if (!fs.existsSync(input)) return 'Directory does not exist';
          return true;
        },
      },
    ]);

    const spinner = ora('Scanning for BoG components...').start();

    try {
      // Initialize GitHub API client
      const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN, // Optional: Use if you need higher rate limits
      });

      // Get list of components from the repository
      const { data: repoContents } = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: COMPONENTS_DIR,
        ref: BRANCH,
      });

      // Filter for directories that start with "Bog"
      const bogComponents = Array.isArray(repoContents)
        ? repoContents.filter((item) => item.type === 'dir' && item.name.startsWith('Bog'))
        : [];

      spinner.succeed(`Found ${bogComponents.length} BoG components in the repository`);

      // Scan local directory for matching components
      const localDirs = await readdir(componentDir);
      const localBogComponents = localDirs.filter(
        (dir) => dir.startsWith('Bog') && fs.statSync(path.join(componentDir, dir)).isDirectory()
      );

      console.log(chalk.green(`Found ${localBogComponents.length} local BoG components`));

      // Track components that were upgraded
      const upgradedComponents = [];

      // Check each local component against the repository version
      for (const component of localBogComponents) {
        spinner.text = `Checking ${component}...`;
        spinner.start();

        // Get component files from repository
        try {
          const { data: componentContents } = await octokit.repos.getContent({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: `${COMPONENTS_DIR}/${component}`,
            ref: BRANCH,
          });

          const repoFiles = Array.isArray(componentContents) ? componentContents : [componentContents];
          const localComponentPath = path.join(componentDir, component);
          const localFiles = await readdir(localComponentPath);

          let hasDifferences = false;
          const fileDiffs = [];

          // Check each file in the component
          for (const repoFile of repoFiles) {
            if (repoFile.type !== 'file') continue;

            const localFilePath = path.join(localComponentPath, repoFile.name);

            // Check if file exists locally
            if (!localFiles.includes(repoFile.name)) {
              fileDiffs.push(`Missing file: ${repoFile.name}`);
              hasDifferences = true;
              continue;
            }

            // Get file content from repository
            const { data: repoFileData } = await octokit.repos.getContent({
              owner: REPO_OWNER,
              repo: REPO_NAME,
              path: repoFile.path,
              ref: BRANCH,
            });

            const repoContent = Buffer.from(repoFileData.content, 'base64').toString('utf-8');
            const localContent = await readFile(localFilePath, 'utf-8');

            // Compare content
            if (repoContent !== localContent) {
              fileDiffs.push(`Different content in: ${repoFile.name}`);
              hasDifferences = true;
            }
          }

          // Check for local files that don't exist in the repository
          for (const localFile of localFiles) {
            const exists = repoFiles.some((file) => file.name === localFile);
            if (!exists) {
              fileDiffs.push(`Extra local file: ${localFile}`);
              hasDifferences = true;
            }
          }

          if (hasDifferences) {
            spinner.warn(`Found differences in ${component}:`);
            fileDiffs.forEach((diff) => console.log(`  - ${diff}`));

            // Ask user if they want to upgrade
            const { shouldUpgrade } = await inquirer.prompt([
              {
                type: 'confirm',
                name: 'shouldUpgrade',
                message: `Would you like to upgrade ${component} to the current version?`,
                default: false,
              },
            ]);

            if (shouldUpgrade) {
              spinner.text = `Upgrading ${component}...`;
              spinner.start();

              // Update each file from the repository
              for (const repoFile of repoFiles) {
                if (repoFile.type !== 'file') continue;

                const { data: repoFileData } = await octokit.repos.getContent({
                  owner: REPO_OWNER,
                  repo: REPO_NAME,
                  path: repoFile.path,
                  ref: BRANCH,
                });

                const repoContent = Buffer.from(repoFileData.content, 'base64').toString('utf-8');
                const localFilePath = path.join(localComponentPath, repoFile.name);

                await writeFile(localFilePath, repoContent, 'utf-8');
              }

              // Remove local files that don't exist in the repository
              for (const localFile of localFiles) {
                const exists = repoFiles.some((file) => file.name === localFile);
                if (!exists) {
                  const localFilePath = path.join(localComponentPath, localFile);
                  fs.unlinkSync(localFilePath);
                }
              }

              upgradedComponents.push(component);
              spinner.succeed(`Upgraded ${component} to the latest version`);
            } else {
              spinner.info(`Skipped upgrading ${component}`);
            }
          } else {
            spinner.succeed(`${component} is already up to date`);
          }
        } catch (error) {
          spinner.fail(`Error checking ${component}: ${error.message}`);
        }
      }

      // Display summary
      console.log('\n' + chalk.blue('Upgrade Summary:'));
      if (upgradedComponents.length > 0) {
        console.log(chalk.green(`Upgraded ${upgradedComponents.length} components:`));
        upgradedComponents.forEach((component) => {
          console.log(`  - ${component}`);
        });
      } else {
        console.log(
          chalk.yellow('No components were upgraded. All components are already up to date or were skipped.')
        );
      }
    } catch (error) {
      spinner.fail(`Error: ${error.message}`);
      console.error(error);
    }
  });
