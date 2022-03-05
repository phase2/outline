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
    size: {
      name: 'size',
      table: { category: 'Properties', defaultValue: { summary: '32px' } },
      description: 'The size of icon. Required when `library === \'system\'`. Omit for other libraries to allow parent text size to control icon sizing.',
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
    sizeEnabled: {
      description:
        'If `true`, the size of the icon will be controlled by the parent text size. If `false`, the size will be controlled by the `size` property.',
      control: {
        type: 'boolean',
      },
      name: 'Enable Size Property',
      table: { category: 'Custom Controls', defaultValue: { summary: 'false' } },
    }
  },
  args: {
    icon: 'chevron-right',
    library: 'default',
    size: false,
    sizeEnabled: false,
  },
};
export default configuration;

const inlineIconDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row text-2xl">
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
  size: '128px',
};
SystemIcon.decorators = inlineIconDecorator;
