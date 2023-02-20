import { Flags, Command } from '@oclif/core';
import inquirer from 'inquirer';
import { initProject } from '../actions/init/init-project';
import type { Prompts } from '../actions/init/init-project';

export default class Init extends Command {
  static description = 'Scaffolds a new Outline Project';
  static examples = ['npx @phase2/outline-cli <%= command.id %>'];

  static flags = {
    automated: Flags.boolean({
      char: 'a',
      description: 'Enable/disable interactive mode.',
      default: false,
    }),
    name: Flags.string({ char: 'n', description: 'Project name.' }),
    slug: Flags.string({ char: 's', description: 'Project slug.' }),
    packageName: Flags.string({
      char: 'p',
      description: 'Project package name.',
    }),
    description: Flags.string({
      char: 'd',
      description: 'Project description.',
    }),
    template: Flags.string({ char: 't', description: 'Project template.' }),
  };

  public async run(): Promise<void> {
    // Get flags as an object.
    const { flags } = await this.parse(Init);
    if (!flags.automated) {
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

      // Enable "interactive mode".
      const prompts: Prompts = {
        name: name.name,
        slug: slug.slug,
        packageName: packageName.packageName,
        description: description.description,
        template: template.template,
      };
      initProject(prompts);
    } else {
      // Enable "manual mode".
      const prompts: Prompts = {
        name: flags.name ?? 'Design System',
        slug: flags.slug ?? 'design-system',
        packageName: flags.packageName ?? '@phase2/design-system',
        description: flags.description ?? 'Design system built with OutlineJS.',
        template: flags.template ?? 'default',
      };
      initProject(prompts);
    }
  }
}
