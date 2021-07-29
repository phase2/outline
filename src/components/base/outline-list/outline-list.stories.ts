import { html, TemplateResult } from 'lit';
import './outline-list';

export default {
  title: 'Atoms/List',
  component: 'outline-list',
  argTypes: {
    listType: {
      control: {
        type: 'select',
        options: ['ul', 'ol', 'div'],
      },
    },
    navLabel: {
      control: { type: 'text' },
    },
    orientation: {
      control: { type: 'select', options: ['row', 'column'] },
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
