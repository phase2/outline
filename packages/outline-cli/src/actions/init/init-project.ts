import { mkdirsSync, copySync } from 'fs-extra';
import { renameSync, readFileSync, writeFileSync } from 'node:fs';
import path = require('path');
import { execSync } from 'node:child_process';
import chalk = require('chalk');

type Prompts = {
  name: string;
  starterTemplate: string;
  gitOrigin: string | null;
  gitName: string | null;
  gitDescription: string | null;
  //octane: boolean;
};
/**
 * Creates story from custom element json file
 * @param {string} prompts - prompts: Object of the values from the prompt questions;
 * @returns Nothing, fixing lint warning
 */
export const initProject = (prompts: Prompts): void => {
  const nameSpace = prompts.name.replace(/[^\dA-Za-z]/g, '-').toLowerCase();
  const currDir = process.cwd();
  const resolvedPath = path.resolve(currDir, nameSpace);
  const storybookSource = path.resolve(
    resolvedPath,
    './node_modules/@phase2/outline-storybook'
  );
  const starterPath = path.resolve(
    `${resolvedPath + '/node_modules/@phase2/outline-templates/'}`,
    prompts.starterTemplate
  );

  mkdirsSync(resolvedPath);
  process.chdir(resolvedPath);
  console.log(
    `${chalk.blue('info')}: Downloading Outline ${
      prompts.starterTemplate
    } starter template`
  );
  execSync('yarn add @phase2/outline-templates @phase2/outline-storybook', {
    stdio: [0, 1, 2],
  });

  // Move the default files to the root directory.
  try {
    copySync(starterPath, resolvedPath);
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`);
  }

  try {
    mkdirsSync(`${resolvedPath}/src/.storybook`);
    mkdirsSync(`${resolvedPath}/src/.storybook/stories`);
    copySync(`${storybookSource}/config`, './src/.storybook');
    copySync(`${storybookSource}/stories`, './src/.storybook/stories');
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`);
  }

  console.log(`${chalk.blue('info')}: Installing Outline dependencies`);
  execSync('yarnpkg', { stdio: [0, 1, 2] });

  // NPM does not package .gitignore files. To include it we renamed it. Now rename it correctly.
  try {
    renameSync('gitignore', '.gitignore');
    console.log(`${chalk.green('success')}: Updated gitignore`);
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`);
  }

  // No longer needed with --discoverNodeModules in our wca commands.
  // execSync(
  //   `ln -sf ${resolvedPath}/node_modules/@phase2 ${resolvedPath}/src/components/outline`,
  //   {
  //     stdio: [0, 1, 2],
  //   }
  // );

  // Set Storybook name
  // Check for default or other starters that have storybook
  if (prompts.starterTemplate === 'default') {
    const themeFile = `${resolvedPath}/src/.storybook/CustomTheme.js`;
    console.log(`${chalk.blue('info')}: Updating CustomTheme.js`);
    try {
      const themeData = readFileSync(themeFile, {
        encoding: 'utf8',
        flag: 'r',
      });
      const replacedData = themeData.replace(
        /brandTitle: '.*',/g,
        `brandTitle: '${prompts.name}',`
      );
      writeFileSync(themeFile, replacedData, { encoding: 'utf8' });
      console.log(`${chalk.green('success')}: CustomTheme Renamed`);
    } catch (error) {
      throw console.error(`${chalk.red('error')}: ${error}`);
    }
  }

  // set up git
  if (prompts.gitOrigin) {
    // Update package.json to use project names.
    const jsonFile = './package.json';
    console.log(`${chalk.blue('info')}: Updating package.json`);
    try {
      let packageData =
        readFileSync(jsonFile, { encoding: 'utf8', flag: 'r' }) || null;

      if (packageData) {
        packageData = packageData.replace(
          /"name": ".*",/,
          `"name": "${prompts.gitName}",`
        );
        packageData = packageData.replace(
          /"description": ".*",/,
          `"description": "${prompts.gitDescription}",`
        );

        writeFileSync(jsonFile, packageData, { encoding: 'utf8' });
        console.log(`${chalk.green('success')}: package.json updated`);
      }
    } catch (error) {
      throw console.error(`${chalk.red('error')}: ${error}`);
    }

    // Run git commands for git setup
    const gitCmd1 = [
      'git init -b main',
      `git remote add origin ${prompts.gitOrigin}`,
      'git add .gitignore',
      'git commit -m "feat(init): main branch for semantic-release"',
      'git push origin main',
      'git checkout -b next',
      'git push origin next',
    ];

    console.log(`${chalk.blue('info')}: Initializing git`);

    for (const cmd of gitCmd1) {
      execSync(cmd, { stdio: [0, 1, 2] });
      console.log(`${chalk.magenta(cmd)}`);
    }
  }

  // // Execute octane cli if selected
  // if (prompts.octane) {
  //   console.log(`${chalk.blue('info')}: Initializing Octane`);
  //   execSync('npx github:phase2/octane-update.git', { stdio: [0, 1, 2] });
  // }

  // Commit all files in project and push to origin
  if (prompts.gitOrigin) {
    const gitCmd1 = [
      'git add .',
      'git commit -m "feat(init): Outline installation."',
      'git push origin next',
    ];

    console.log(`${chalk.blue('info')}: Committing all files to origin`);

    for (const cmd of gitCmd1) {
      execSync(cmd, { stdio: [0, 1, 2] });
      console.log(`${chalk.magenta(cmd)}`);
    }
  }

  console.log(
    `${chalk.green(
      'success'
    )}: Outline installed and initialized! Happy Coding!`
  );
};
