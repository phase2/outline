import { Command } from '@oclif/core';
import inquirer from 'inquirer';
import { initProject } from '../actions/init/init-project';
export default class Init extends Command {
  static description = 'Scaffolds a new Outline Project';
  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    const name = await inquirer.prompt([
      {
        name: 'name',
        message: 'What is your project name?',
        default: 'Design System',
        type: 'input',
        validate: function (input) {
          if (input) {
            return true;
          }

          return false;
        },
      },
    ]);

    const slug = await inquirer.prompt([
      {
        name: 'slug',
        message: 'What is your project short name (slug)?',
        default: 'design-system',
        type: 'input',
        validate: function (input) {
          if (input) {
            return true;
          }

          return false;
        },
      },
    ]);

    const packageName = await inquirer.prompt([
      {
        name: 'packageName',
        message: 'What is your project package name (NPM Package)?',
        type: 'input',
        default: `@phase2/${slug.slug}`,
        validate: function (input) {
          if (input) {
            return true;
          }

          return false;
        },
      },
    ]);

    const description = await inquirer.prompt([
      {
        name: 'description',
        message: 'Describe your project in a few words',
        type: 'input',
        default: 'Design system built with OutlineJS.',
        validate: function (input) {
          if (input) {
            return true;
          }

          return false;
        },
      },
    ]);

    const template = await inquirer.prompt([
      {
        name: 'template',
        message: 'What is your project starter template?',
        type: 'list',
        choices: [{ name: 'default' }],
      },
    ]);

    const prompts = {
      name: name.name,
      slug: slug.slug,
      packageName: packageName.packageName,
      description: description.description,
      template: template.template,
    };
    initProject(prompts);
  }
}
