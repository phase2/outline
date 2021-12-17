import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  listOrientations,
  listTypes,
  columnsCount,
  dividerColors,
} from './outline-list';
import './outline-list';
import '../outline-heading/outline-heading';
export default {
  title: 'Content/List',
  component: 'outline-list',
  parameters: {
    docs: {
      source: {
        code: `
        const items = someLogic

          <outline-list
            listType="ol"
            navLabel="main_navigation"
            orientation="row"
          >
            items.map(item => html\`
             <li style={padding: 1rem; list-style: none}>
              <outline-link
                linkHref="{item.linkHref}"
                linkText="{item.text}"
              ></outline-link>
            </li>\`
          )}

          // Alternative example

          </outline-list>
            <outline-list
            listType="ul"
            orientation="column"
            >
              <outline-heading slot="heading" level="h3" levelSize="3xl">Links List</outline-heading>
              <li style=${`padding: 1rem; list-style: none`}>
                  <outline-link linkHref='#' linkText="link 1"></outline-link>
              </li>
              <li style=${`padding: 1rem; list-style: none`}>
                  <outline-link linkHref='#' linkText="link 2"></outline-link>
              </li>
              <li style=${`padding: 1rem; list-style: none`}>
                  <outline-link linkHref='#' linkText="link 3"></outline-link>
              </li>
            )}
            <outline-button slot="footer" @click={this.orderBy}>Order by criteria</outline-button>
            <outline-button slot="footer" @click={this.orderByOther}>Order by other criteria</outline-button>
          </outline-list>
      
    `,
      },
    },
  },
  argTypes: {
    listType: {
      description:
        '**`<ListType>`("ol" | "ul" | "div"):** <br> Determines which type of list is rendered.',
      options: listTypes,
      control: {
        type: 'select',
      },
      name: 'list-type',
    },
    orientation: {
      description:
        '**`<ListOrientation>`("row" | "column"):** <br> Sets orientation of list',
      options: listOrientations,
      control: { type: 'select' },
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
    divider: {
      description:
        '**`<ListDividerColors>` ("orange","green","blue","teal","purple","white"):** <br>If set adds a pseudo element divider of chose color between all list items. Currently only setup for `<ul/>`. Best only for row.',
      options: [...dividerColors, undefined],
      control: {
        type: 'select',
      },
    },
    headingSlotContent: {
      control: { type: 'text' },
      name: 'heading slot content',
      description: '**slot="heading"**',
    },
    footerSlotContent: {
      control: { type: 'text' },
      name: 'footer slot content',
      description: '**slot="footer"**',
    },
    itemCount: {
      control: { type: 'range', min: 0, max: 30, step: 1 },
    },
  },
  args: {
    divider: false,
    columns: false,
    listType: 'ul',
    navLabel: '',
    orientation: ' row',
    itemCount: 6,
    headingSlotContent: '',
    footerSlotContent: '',
  },
};
const items = itemCount => {
  const itemList = [];
  for (let i = 0; i < itemCount; i++) {
    itemList.push({ linkHref: '/', text: `link ${i + 1}` });
  }
  return itemList;
};

const Template = ({
  listType,
  navLabel,
  orientation,
  itemCount,
  headingSlotContent,
  footerSlotContent,
  divider,
  columns,
}): TemplateResult => {
  return html`
    <outline-list
      list-type="${listType}"
      nav-label="${navLabel}"
      orientation="${orientation}"
      .divider=${divider}
      .columns=${columns}
    >
      <outline-heading slot="heading" level="h3" levelSize="3xl"
        >${headingSlotContent}</outline-heading
      >
      ${items(itemCount).map(
        item => html`
          <li style=${`padding: 0.5rem; list-style: none`}>
            <outline-link
              linkHref=${item.linkHref}
              linkText=${item.text}
            ></outline-link>
          </li>
        `
      )}
      <slot slot="footer">${ifDefined(unsafeHTML(footerSlotContent))}</slot>
    </outline-list>
  `;
};

export const List = Template.bind({});
