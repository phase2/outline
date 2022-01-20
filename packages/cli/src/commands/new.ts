import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import validateProjectName from 'validate-npm-package-name'
import {pipeline} from 'node:stream/promises'
import * as tar from 'tar'
import axios from 'axios'

export default class New extends Command {
  static description = 'Create Outline';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  validateNpmName = (value: string): boolean | string => {
    const nameValidation = validateProjectName(value)

    if (nameValidation.validForNewPackages) {
      return true
    }

    return 'Invalid NPM package name. Please try a new name'
  };

  downloadAndExtract = (
    directory: string,
    branch: string | (() => string) = 'next',
  ): Promise<void> => {
    axios({
      method: 'get',
      url: `https://codeload.github.com/phase2/outline/tar.gz/${branch}`,
      responseType: 'stream',
    })
  };

  public async run(): Promise<void> {
    const responses = await inquirer
    .prompt([
      {
        name: 'designSystemName',
        message: 'What should we call your design system?',
        type: 'input',
        default: 'outline',
        validate: async input => this.validateNpmName(input),
      },
    ])
    .catch(error => {
      this.log(error)
    })
    this.log(`${__dirname}/${responses.designSystemName}`)
    // need to handle existing file errors better...or at all
    fs.mkdir(`${__dirname}/../../${responses.designSystemName}`)
    // await this.downloadAndExtract(
    //   "next",
    //   `${__dirname}/../../${responses.designSystemName}`
    // );
    this.log(responses.designSystemName)
  }

  async catch(error: any) {
    throw error
  }
}
