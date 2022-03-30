import { html, TemplateResult } from 'lit';
import {
  listOrientations,
  columnsCount,
} from './outline-button-group';
import './outline-button-group';

export default {
  title: 'Navigation/Button Group',
  component: 'outline-button-group',
  argTypes: {
    orientation: {
      description:
        '**`<Orientation>`("row" | "column"):** <br> Sets orientation of list',
      options: listOrientations,
      control: { type: 'select' },
    },
    itemCount: {
      control: { type: 'range', min: 1, max: 4, step: 1 },
    },
    navLabel: {
      description:
        'If set will wrap list in a nav tag with the passed string set as the aria-label',
      control: { type: 'text' },
      name: 'nav-label',
    },
    columns: {
      description:
        '**`<ColumnCount>`("2", "3", "4"):** <br> If set, overrides orientation setting and renders list above mobile in selected number of columns',
      options: [...columnsCount, undefined],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    orientation: ' row',
    itemCount: 1,
    navLabel: '',
    columns: false,
  },
};
const items = itemCount => {
  const itemList = [];
  for (let i = 0; i < itemCount; i++) {
    itemList.push({ linkHref: '/', text: `button ${i + 1}` });
  }
  return itemList;
};

const Template = ({
  navLabel,
  itemCount,
  columns,
  orientation
}): TemplateResult => {
  return html`
    <outline-button-group
    nav-label="${navLabel}"
    orientation="${orientation}"
    .columns=${columns}
  >
    ${items(itemCount).map(
          item => html`
            <li style="padding: 0.5rem; list-style: none;">
              <outline-button>
                ${item.text}
              </outline-button>
            </li>
          `
        )}
    </outline-button-group>
  `;
};

export const ButtonGroup = Template.bind({});
