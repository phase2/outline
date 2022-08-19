/* eslint-disable complexity */
import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import {execSync} from 'node:child_process'

import {initProject} from '../actions/init/init-project'
const allowedTemplates = ['minimal', 'standard', 'full']

export default class Init extends Command {
  static description = 'Scaffolds a new Outline Project';

  static flags = {
    // outline init -n="Phase2 Outline" -t="default"
    name: Flags.string({char: 'n'}),
    template: Flags.string({char: 't', options: allowedTemplates}),
    gitSetup: Flags.string({char: 'g', options: ['true', 'false']}),
    gitRepo: Flags.string({char: 'r'}),
    gitPackage: Flags.string({char: 'p'}),
    gitDescription: Flags.string({char: 'd'}),
    octane: Flags.string({char: 'o', options: ['true', 'false']}),
  }

  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    const {flags} = await this.parse(Init)
    let name = flags?.name || null
    let starterTemplate = flags?.template || null
    const gitSetupFlag = flags?.gitSetup === 'true' ? true : (flags?.gitSetup === 'false' ? false : null)
    let gitRepo = flags?.gitRepo || null
    let gitPackage = flags?.gitPackage || null
    let gitDescription = flags?.gitDescription || null
    const octaneFlag = flags?.octane === 'true' ? true : (flags?.octane === 'false' ? false : null)

    name = name === null ? (await inquirer.prompt([{
      name: 'name',
      message: 'What is your project name? Ex:"Phase2 Outline"',
      type: 'input',
      validate: function (input) {
        if (input) {
          return true
        }

        return false
      },
    }])) : {name: name}

    starterTemplate = starterTemplate === null ? (await inquirer.prompt([{
      name: 'template',
      message: 'What is your project starter template?',
      type: 'list',
      choices: allowedTemplates,
    }])) : {template: starterTemplate}

    // If all git flags are null and gitSetup flag is null trigger prompt
    // If all git flags are set, set gitSetup to false to skip additional prompts
    // If any one prompt is set but not all, set gitSetup true to gather remaining
    const gitSetup = (gitSetupFlag === null && gitRepo === null && gitPackage === null && gitDescription === null) ? (await inquirer.prompt([{
      name: 'gitSetup',
      message: 'Do you wish to setup git for this project?',
      type: 'confirm',
      default: true,
    }])) : (gitSetupFlag === true || (gitRepo !== null || gitPackage !== null || gitDescription !== null) ? {gitSetup: true} : {gitSetup: false})

    if (gitSetup.gitSetup) {
      gitPackage = gitPackage === null ? (await inquirer.prompt([{
        name: 'gitName',
        message: 'What is your git project name? Ex:"@phase2/outline"',
        type: 'input',
        validate: function (input) {
          if (input) {
            return true
          }

          return false
        },
      }])) : {gitPackage: gitPackage}

      gitDescription = gitDescription === null ? (await inquirer.prompt([{
        name: 'gitDescription',
        message: 'What is your git project description? Ex:"Outline Component Design"',
        type: 'input',
        validate: function (input) {
          if (input) {
            return true
          }

          return false
        },
      }])) : {gitDescription: gitDescription}

      gitRepo = gitRepo === null ? (await inquirer.prompt([{
        name: 'gitOrigin',
        message: 'What is your project git origin? Ex:"git@github.com:phase2/PROJECT-design.git"',
        type: 'input',
        validate: function (input) {
          try {
            execSync(`git ls-remote ${input} HEAD`)
            return true
          } catch (error) {
            console.log(error)
            return false
          }
        },
      }])) : {gitRepo: gitRepo}
    }

    const octane = octaneFlag === null ? (await inquirer.prompt([{
      name: 'octane',
      message: 'Do you want to include Devcloud tooling via Octane?',
      type: 'confirm',
      default: true,
    }])) : {octane: octaneFlag}

    // const {args, flags} = await this.parse(Init)
    const prompts = {
      name: name.name,
      starterTemplate: starterTemplate.template,
      gitRepo: gitRepo?.gitRepo || null,
      gitPackage: gitPackage?.gitPackage || null,
      gitDescription: gitDescription?.gitDescription || null,
      octane: octane.octane,
    }
    initProject(prompts)
  }
}
