import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './outline-icon';

const configuration = {
  title: 'Media/Outline Icon',
  component: 'outline-icon',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    icon: {
      name: 'name',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description: 'The name of the icon to draw. https://icons.getbootstrap.com/',
      control: {
        type: 'text',
      },
    },
    library: {
      name: 'library',
      table: { category: 'Properties', defaultValue: { summary: 'default' } },
      description: 'The icon library to use.',
      control: {
        type: 'select',
      },
      options: ['default', 'system'],
    },
  },
  args: {
    icon: 'chevron-right',
    library: 'default',
    size: false,
  },
};
export default configuration;

const inlineIconDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row text-4xl">
${Story()}
</div> `,
];

const Template = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-icon 
  name="${ifDefined(args.icon)}"
  library="${ifDefined(args.library)}"
  size="${ifDefined(args.size)}"
></outline-icon>
`;
};

export const CDNBootstrapIcon = (customArguments = {}) =>
  Template(customArguments);
CDNBootstrapIcon.decorators = inlineIconDecorator;

export const SystemIcon = (customArguments = {}) =>
Template(customArguments);
SystemIcon.args = {
  library: 'system', 
  icon: 'chevron-down',
  size: '256px',
};
SystemIcon.decorators = inlineIconDecorator;
