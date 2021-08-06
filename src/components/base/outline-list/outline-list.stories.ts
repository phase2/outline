import { html, TemplateResult } from 'lit';
import './outline-list';

export default {
  title: 'Atoms/List',
  component: 'outline-list',
  argTypes: {
    listType: {
      description:
        '**Options: ol, ul, div** <br> Determines which type of list is rendered.',
      control: {
        type: 'select',
        options: ['ul', 'ol', 'div'],
      },
    },
    orientation: {
      description: '**Options: row, column** <br> Sets orientation of list',
      control: { type: 'select', options: ['row', 'column'] },
    },
    navLabel: {
      description:
        'If set will wrap list in a nav tag with the passed string set as the aria-label',
      control: { type: 'text' },
    },
  },
};

const Template = ({ listType, navLabel, orientation, items }): TemplateResult =>
  html`
    <outline-list
      .listType="${listType}"
      .navLabel="${navLabel}"
      .orientation="${orientation}"
    >
      ${items.map(
        item => html` <li style=${`padding: 1rem; list-style: none`}>
          <outline-link
            linkHref=${item.linkHref}
            linkText=${item.text}
          ></outline-link>
        </li>`
      )}
    </outline-list>
  `;

export const List = Template.bind({});
List.args = {
  listType: 'ul',
  orientation: 'row',
  navLabel: 'main nav',
  items: [
    { linkHref: '#', text: 'About' },
    { linkHref: '#', text: 'Contact' },
    { linkHref: '#', text: 'Jobs' },
    { linkHref: '#', text: 'News' },
    { linkHref: '#', text: 'FAQ' },
  ],
};
