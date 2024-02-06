/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { listOrientations, listTypes } from '@phase2/outline-list';
import '@phase2/outline-list';
import '@phase2/outline-heading';
export default {
  title: 'Navigation/List',
  component: 'outline-list',
  // Tags are a new feature coming in 7.1, that we are using to drive this behaviour.
  tags: ['docsPage'],
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
                link-href="{item.linkHref}"
                link-text="{item.text}"
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
                  <outline-link link-href='#' link-text="link 1"></outline-link>
              </li>
              <li style=${`padding: 1rem; list-style: none`}>
                  <outline-link link-href='#' link-text="link 2"></outline-link>
              </li>
              <li style=${`padding: 1rem; list-style: none`}>
                  <outline-link link-href='#' link-text="link 3"></outline-link>
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
      table: { category: 'Properties', defaultValue: { summary: 'div' } },
      description: 'Determines which type of list is rendered.',
      options: listTypes,
      control: {
        type: 'select',
      },
      name: 'list-type',
    },
    orientation: {
      table: { category: 'Properties', defaultValue: { summary: 'row' } },
      description: 'Sets orientation of list',
      options: listOrientations,
      control: { type: 'select' },
    },
    navLabel: {
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'If set will wrap list in a `nav` tag with the passed string set as the `aria-label`',
      control: { type: 'text' },
      name: 'nav-label',
    },
    headingSlotContent: {
      table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
      control: { type: 'text' },
      name: 'heading',
      description: '**slot="heading"**',
    },
    footerSlotContent: {
      table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
      control: { type: 'text' },
      name: 'footer',
      description: '**slot="footer"**',
    },
    itemCount: {
      table: { category: 'Other Controls', defaultValue: { summary: '4' } },
      control: { type: 'range', min: 0, max: 30, step: 1 },
    },
  },
  args: {
    listType: 'div',
    navLabel: '',
    orientation: 'row',
    itemCount: 4,
    headingSlotContent: '',
    footerSlotContent: '',
  },
};
const items = (itemCount: any) => {
  const itemList = [];
  for (let i = 0; i < itemCount; i++) {
    itemList.push({ linkHref: '/', text: `Sample Link ${i + 1}` });
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
}: any): TemplateResult => {
  return html`
    <outline-list
      list-type="${listType}"
      nav-label="${navLabel}"
      orientation="${orientation}"
      .divider=${divider}
    >
      ${
        headingSlotContent
          ? html`
      <outline-heading slot="heading" level="h3" levelSize="3xl"
        >${headingSlotContent}</outline-heading
      >
      `
          : ``
      }
      ${items(itemCount).map(
        item => html`
          <outline-link
            link-href=${item.linkHref}
            link-text=${item.text}
          ></outline-link>
        `
      )}
      <slot slot="footer">${ifDefined(unsafeHTML(footerSlotContent))}</slot>
    </outline-list>
  `;
};

export const List = Template.bind({});
