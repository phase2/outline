import { html, TemplateResult } from 'lit';
import './outline-icon';

const configuration = {
  title: 'Media/Outline Icon',
  component: 'outline-icon',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    icon: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    icon: 'chevron-right',
  },
};
export default configuration;

const Template = (icon): TemplateResult => {
  return html`
<outline-icon icon="${icon}"></outline-icon>
`;
};

export const Icon = () => Template(configuration.args.icon);
