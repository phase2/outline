/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';

// this import needs to be updated once the component is published
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import{ OutlineCoreBreadcrumb }from '../../../../../packages/components/outline-core-breadcrumb/src/outline-core-breadcrumb';

const configuration = {
    title: 'Navigation/ Core Breadcrumb',
    component: 'OutlineCoreBreadcrumb',
    parameters: {
      viewMode: 'docs',
      docs: { source: { state: 'open' } },
    },
    argTypes: {},
    args: {},
  };
  export default configuration;

    const Template = (): TemplateResult => {
        return html`<outline-core-breadcrumb> <nav class="breadcrumb">
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
      </nav></outline-core-breadcrumb>`;};

export const Breadcrumb: any = () => Template();