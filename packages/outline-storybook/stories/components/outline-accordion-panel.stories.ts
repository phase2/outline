/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../../../outline-accordion/src/outline-accordion-panel/outline-accordion-panel';
import '../../../outline-styled-text';
export default {
  title: 'Content/Accordion/Single Panel',
  component: 'outline-accordion-panel',
  argTypes: {
    clean: {
      control: {
        type: 'boolean',
      },
      description:
        'Sets the panel to the "clean" variant.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    active: {
      control: {
        type: 'boolean',
      },
      description:
        'Sets the panel to active/open.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    headingSlotContent: {
      name: 'Heading slot content',
      control: { type: 'text' },
      description: 'Markup for the heading.',
      table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
    },
    defaultSlotContent: {
      name: 'Default slot content',
      control: { type: 'text' },
      description: 'Markup for the panel content.',
      table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
    },
  },
  args: {
    clean: false,
    active: false,
    headingSlotContent: '<outline-heading level="h3" level-style="semibold" slot="heading">Accordion Panel</outline-heading>',
    defaultSlotContent:
      `<outline-styled-text>
        <outline-heading level="p" level-size="xl" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
      </outline-styled-text>`,
  },
};

const Template = ({
  clean,
  active,
  headingSlotContent,
  defaultSlotContent,
}: any): TemplateResult =>
  html`
<outline-accordion-panel ?clean=${clean} ?active=${active}>
  ${unsafeHTML(`${headingSlotContent}`)}
  ${unsafeHTML(`${defaultSlotContent}`)}
</outline-accordion-panel>
  `;

export const SinglePanel: any = Template.bind({});
SinglePanel.args = {
  clean: false,
  active: false,
};
