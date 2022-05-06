import { html, TemplateResult } from 'lit';
import { listOrientations } from '../outline-list/outline-list';
import './outline-button-group';

export default {
  title: 'Navigation/Button Group',
  component: 'outline-button-group',
  argTypes: {
    orientation: {
      table: { category: 'Properties', defaultValue: { summary: 'row' } },
      description:
        'Sets the orientation of group of buttons.',
      options: listOrientations,
      control: { type: 'select' },
    },
    itemCount: {
      table: { category: 'Extra Controls', defaultValue: { summary: '3' } },
      control: { type: 'range', min: 1, max: 12, step: 1 },
    },
    navLabel: {
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'If set, will wrap list in a `nav` tag with the passed string set as the `aria-label`.',
      control: { type: 'text' },
      name: 'nav-label',
    },
  },
  args: {
    orientation: 'row',
    itemCount: 3,
  },
  parameters: {
    docs: {
      description: {
        component: `
## The \`outline-button-group\` element

<outline-alert statusType="warning" size="large" class="mb-6">
  <span slot="header">Status: Experimental</span>
  <div>This component is still in an experimental stage, and has additional work to be feature complete.</div>
</outline-alert>
        `,
      },
    },
  },
};
const items = itemCount => {
  const itemList = [];
  for (let i = 0; i < itemCount; i++) {
    itemList.push({ linkHref: '/', text: `Sample Button ${i + 1}` });
  }
  return itemList;
};

const Template = ({
  navLabel,
  itemCount,
  orientation
}): TemplateResult => {
  return html`
  <outline-button-group
    nav-label="${navLabel}"
    orientation="${orientation}"
  >
  ${items(itemCount).map(
    item => html`
      <outline-button>
        ${item.text}
      </outline-button>
    `
  )}
  </outline-button-group>
  `;
};

export const ButtonGroup = Template.bind({});
