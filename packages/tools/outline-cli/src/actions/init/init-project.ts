import {mkdirsSync, copySync} from 'fs-extra'
import {renameSync, readFileSync, writeFileSync} from 'node:fs'
import path = require('path');
import {execSync} from 'node:child_process'
import chalk = require('chalk');

export type Prompts = {
  name: string;
  slug: string;
  packageName: string;
  template: string;
  description: string | null;
};
/**
 * @param {string} prompts - Object of the values from the prompt questions;
 * @param {boolean} [local=false] - Whether to run in local development mode;
 * @returns {void}
 */
export const initProject = (prompts: Prompts, local = false): void => {
  const currDir = process.cwd()
  const resolvedPath = path.resolve(currDir, prompts.slug)
  const storybookSource = local ?
    `${__dirname}/../../../../outline-storybook` :
    path.resolve(resolvedPath, './node_modules/@phase2/outline-storybook')
  const starterPath = local ?
    `${__dirname}/../../../../outline-templates/${prompts.template}` :
    path.resolve(
      `${resolvedPath + '/node_modules/@phase2/outline-templates/'}`,
      prompts.template,
    )

  mkdirsSync(resolvedPath)
  process.chdir(resolvedPath)
  console.log(`${chalk.blue('info')}: Moved to directory: ${resolvedPath}`)

  if (!local) {
    console.log(
      `${chalk.bold.blue('info')}: Downloading Outline ${
        prompts.template
      } starter template`,
    )
    execSync(
      'yarn add @phase2/outline-templates @phase2/outline-storybook --cwd=\'./\'',
      {
        stdio: [0, 1, 2],
      },
    )
  }

  // Move the default files to the root directory.
  try {
    copySync(starterPath, resolvedPath)
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`)
  }

  try {
    mkdirsSync(`${resolvedPath}/src/.storybook`)
    mkdirsSync(`${resolvedPath}/src/.storybook/stories`)
    copySync(`${storybookSource}/config`, './src/.storybook')
    copySync(`${storybookSource}/stories`, './src/.storybook/stories')
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`)
  }

  if (!local) {
    console.log(`${chalk.blue('info')}: Installing Outline dependencies`)
    execSync('yarnpkg', {stdio: [0, 1, 2]})
  }

  // NPM does not package .gitignore files. To include it we renamed it. Now rename it correctly.
  try {
    renameSync('gitignore', '.gitignore')
    console.log(`${chalk.green('success')}: Updated gitignore`)
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`)
  }

  // Update package.json to use project names.
  const jsonFile = './package.json'
  console.log(`${chalk.blue('info')}: Updating package.json`)
  try {
    let packageData =
      readFileSync(jsonFile, {encoding: 'utf8', flag: 'r'}) || null

    if (packageData) {
      packageData = packageData.replace(
        /"name": ".*",/,
        `"name": "${prompts.packageName}",`,
      )
      packageData = packageData.replace(
        /"description": ".*",/,
        `"description": "${prompts.description}",`,
      )

      writeFileSync(jsonFile, packageData, {encoding: 'utf8'})
      console.log(`${chalk.green('success')}: package.json updated`)
    }
  } catch (error) {
    throw console.error(`${chalk.red('error')}: ${error}`)
  }

  if (local) {
    console.log(
      `${chalk.blue('info')}: Linking outline packages for local development`,
    )
    execSync(`node scripts/link-for-local-dev.js ${__dirname}/../../../..`, {
      stdio: [0, 1, 2],
    })
  }

  console.log(
    `${chalk.green(
      'success',
    )}: Outline installed and initialized! Happy Coding!`,
  )
}
