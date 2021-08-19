import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import './outline-list';
import '../outline-heading/outline-heading';
export default {
  title: 'Atoms/List',
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
      control: {
        type: 'select',
        options: ['ul', 'ol', 'div'],
      },
      name: 'list-type',
    },
    orientation: {
      description:
        '**`<ListOrientation>`("row" | "column"):** <br> Sets orientation of list',
      control: { type: 'select', options: ['row', 'column'] },
    },
    navLabel: {
      description:
        'If set will wrap list in a nav tag with the passed string set as the aria-label',
      control: { type: 'text' },
      name: 'nav-label',
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
    items: {
      description: '**NOT A PROP**',
    },
  },
  args: {
    headingSlotContent: '',
    footerSlotContent: '',
  },
};

const Template = ({
  listType,
  navLabel,
  orientation,
  items,
  headingSlotContent,
  footerSlotContent,
}): TemplateResult =>
  html`
    <outline-list
      list-type="${listType}"
      nav-label="${navLabel}"
      orientation="${orientation}"
    >
      <outline-heading slot="heading" level="h3" levelSize="3xl"
        >${headingSlotContent}</outline-heading
      >
      ${items.map(
        item => html`
          <li style=${`padding: 1rem; list-style: none`}>
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
