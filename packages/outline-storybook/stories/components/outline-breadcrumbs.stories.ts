/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import '@phase2/outline-breadcrumbs';

const configuration = {
  title: 'Navigation/Breadcrumb',
  component: 'outline-breadcrumb',
  // Tags are a new feature coming in 7.1, that we are using to drive this behavior.
  tags: ['docsPage'],
  parameters: {
    viewMode: 'docs',
    docs: {source: { state: 'open' },},
  },
  argTypes: {},
  args: {},
};
export default configuration;

const Template = (): TemplateResult => {
  return html`
<outline-breadcrumbs>
  <nav class="breadcrumb">
    <span>
      <a href="#">Home</a>
    </span>
    <span>
      <a href="#">About Us</a>
    </span>
    <span>
      <a href="#">Our History</a>
    </span>
    <span class="last">The current page title</span>
  </nav>
</outline-breadcrumbs>
`;
};

export const Breadcrumb: any = () => Template();
