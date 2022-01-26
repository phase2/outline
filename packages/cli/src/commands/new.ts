import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'node:fs/promises'
import validateProjectName from 'validate-npm-package-name'
import axios from 'axios'
import tar from 'tar'

export default class New extends Command {
  static description = 'Create Outline';

  static flags = {
    branch: Flags.string(
      {
        default: 'next',
      },
    ),
  }

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
    branch: string,
  ): Promise<void> => {
    const dirMod =  `outline-${branch.replace('/', '-')}`
    return axios({
      method: 'get',
      url: `https://codeload.github.com/phase2/outline/tar.gz/${branch}`,
      responseType: 'stream',
    }).then(response => {
      response.data.pipe(tar.extract({cwd: directory, strip: 3}, [`${dirMod}/packages/core`]))
    }).catch(error => {
      throw error
    },
    )
  };

  public async run(): Promise<void> {
    const {flags} = await this.parse(New)
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
    await this.downloadAndExtract(
      `${__dirname}/../../${responses.designSystemName}`,
      flags.branch,
    )
    this.log(`created Outline design system called ${responses.designSystemName}`)
  }

  async catch(error: any) {
    throw error
  }
}
