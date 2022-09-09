/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
// Import the component itself.
import '../../../outline-admin-links/src/outline-admin-links';

export default {
  title: 'Navigation/Administrative Links',
  component: 'outline-admin-links',
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: `
> Typically used in a Drupal consumer to display a horizontal list of administrative actions availble to any given piece of content.
`,
      },
    },
  },
};

const Template = (): TemplateResult =>
  html`
    <outline-admin-links>
      <ul>
        <li>
          <a href="#" class="is-active">
            View<span class="visually-hidden">(active tab)</span>
          </a>
        </li>
        <li>
          <a href="#">Edit</a>
        </li>
        <li>
          <a href="#">Layout</a>
        </li>
        <li>
          <a href="#">Translate</a>
        </li>
        <li>
          <a href="#">Revisions</a>
        </li>
        <li>
          <a href="#">Lasers</a>
        </li>
      </ul>
    </outline-admin-links>
  `;

export const AdministrativeLinks: any = Template.bind({});
AdministrativeLinks.parameters = {
  docs: {
    source: {
      code: `
<outline-admin-links>
  <ul>
    <li>
      <a href="#" class="is-active">
        View<span class="visually-hidden">(active tab)</span>
      </a>
    </li>
    <li>
      <a href="#">Edit</a>
    </li>
    <li>
      <a href="#">Layout</a>
    </li>
    <li>
      <a href="#">Translate</a>
    </li>
    <li>
      <a href="#">Revisions</a>
    </li>
    <li>
      <a href="#">Lasers</a>
    </li>
  </ul>
</outline-admin-links>
      `,
    },
  },
};
