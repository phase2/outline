import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import './outline-breadcrumbs';

export default {
  title: 'Molecules/Breadcrumbs',
  component: 'outline-breadcrumbs',
  argTypes: {
    crumbsLinks: {
      name: 'Array of links',
      description: 'An array of links to fill in the breadcrumbs',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ crumbsLinks }): TemplateResult =>
  html`
    <outline-breadcrumbs> ${ifDefined(crumbsLinks)} </outline-breadcrumbs>
  `;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  crumbsLinks: html`
    <li><a href="#">Home</a><span aria-hidden="true"></span></li>
    <li><a href="#">Federal Contracting</a><span aria-hidden="true"></span></li>
    <li>
      <a href="#">Contracting Assistance Programs</a
      ><span aria-hidden="true"></span>
    </li>
    <li>
      <a href="#" class="last"
        >Women-owned small business federal contracting program</a
      ><span aria-hidden="true"></span>
    </li>
  `,
};
