import { Command } from '@oclif/core';
import * as inquirer from 'inquirer';
import { execSync } from 'node:child_process';

import { initProject } from '../actions/init/init-project';
export default class Init extends Command {
  static description = 'Scaffolds a new Outline Project';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    let gitOrigin = null;
    let gitName = null;
    let gitDescription = null;
    let gitSetup = null;
    // const name = await CliUx.ux.prompt('What is your project name? Ex:"Phase2 Outline"')
    const name = await inquirer.prompt([
      {
        name: 'name',
        message: 'What is your project name? Ex:"Phase2 Outline"',
        type: 'input',
        validate: function (input) {
          if (input) {
            return true;
          }

          return false;
        },
      },
    ]);
    const starterTemplate: any = await inquirer.prompt([
      {
        name: 'template',
        message: 'What is your project starter template?',
        type: 'list',
        choices: [{ name: 'default' }],
      },
    ]);

    gitSetup = await inquirer.prompt([
      {
        name: 'gitSetup',
        message: 'Do you wish to setup git for this project?',
        type: 'confirm',
        default: true,
      },
    ]);

    if (gitSetup.gitSetup) {
      gitName = await inquirer.prompt([
        {
          name: 'gitName',
          message: 'What is your git project name? Ex:"@phase2/outline"',
          type: 'input',
          validate: function (input) {
            if (input) {
              return true;
            }

            return false;
          },
        },
      ]);
      gitDescription = await inquirer.prompt([
        {
          name: 'gitDescription',
          message:
            'What is your git project description? Ex:"Outline Component Design"',
          type: 'input',
          validate: function (input) {
            if (input) {
              return true;
            }

            return false;
          },
        },
      ]);

      gitOrigin = await inquirer.prompt([
        {
          name: 'gitOrigin',
          message:
            'What is your project git origin? Ex:"git@github.com:phase2/PROJECT-design.git"',
          type: 'input',
          validate: function (input) {
            try {
              execSync(`git ls-remote ${input} HEAD`);
              return true;
            } catch (error) {
              console.log(error);
              return false;
            }
          },
        },
      ]);
    }

    const octane = await inquirer.prompt([
      {
        name: 'octane',
        message: 'Do you want to include Devcloud tooling via Octane?',
        type: 'confirm',
        default: true,
      },
    ]);

    // const {args, flags} = await this.parse(Init)
    const prompts = {
      name: name.name,
      starterTemplate: starterTemplate.template,
      gitOrigin: gitOrigin?.gitOrigin || null,
      gitName: gitName?.gitName || null,
      gitDescription: gitDescription?.gitDescription || null,
      octane: octane.octane,
    };
    initProject(prompts);
  }
}
