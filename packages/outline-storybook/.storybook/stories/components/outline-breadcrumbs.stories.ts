/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import '../../../../outline-breadcrumbs/src/outline-breadcrumbs';

const configuration = {
  title: 'Navigation/Breadcrumb',
  component: 'outline-breadcrumb',
  parameters: {
    viewMode: 'docs',
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
