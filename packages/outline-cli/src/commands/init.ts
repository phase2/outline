import { Command, Flags } from '@oclif/core';
import { initProject } from '../actions/init/init-project';
export default class Init extends Command {
  static description = 'Scaffolds a new Outline Project';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    nameSpace: Flags.string({
      char: 'n',
      description:
        'name space for the project. Defaults to the base name used for the component',
    }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    template: Flags.boolean({
      char: 't',
      description: 'name of the starter template. Defaults to "default"',
    }),
  };

  static args = [
    { name: 'name', required: true, description: 'name of project' },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Init);
    initProject(args, flags);
  }
}
