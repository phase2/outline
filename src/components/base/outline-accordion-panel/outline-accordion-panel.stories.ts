import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './outline-accordion-panel';
import '../outline-styled-text/outline-styled-text';
export default {
  title: 'Content/Accordion/Accordion Panel',
  component: 'outline-accordion-panel',
  parameters: {
    docs: {
      source: {
        code: `<outline-accordion-panel clean=clean active=active>
                <p slot="heading">Panel the First</p>
                <outline-styled-text>
                  <p>Etiam ut purus mattis mauris</p>
                  <p>Suspendisse eu ligula.Proin pretium,
                   leo ac pellentesque mollis, felis nunc ultrices eros,
                   sed gravida augue augue mollis justo.Maecenas ullamcorper,
                   dui et placerat feugiat, eros pede varius nisi,
                   condimentum viverra felis nunc et lorem.
                   Nam at tortor in tellus interdum sagittis.
                   </p>
                </outline-styled-text>
              </outline-accordion-panel>`,
      },
    },
  },
  argTypes: {
    clean: {
      control: {
        type: 'boolean',
      },
      description:
        '**`<Boolean>`**: Sets the panel to the "clean" variant. <br> Controlled by the parent `<outline-accordion>` component.',
    },
    active: {
      control: {
        type: 'boolean',
      },
      description:
        '**`<Boolean>`**: Sets the panel to active/open. <br> Controlled by the parent `<outline-accordion>` component.',
    },
    headingSlotContent: {
      name: 'Heading slot content',
      control: { type: 'text' },
      description: '**NOT A PROP**: Text for the heading.',
    },
    defaultSlotContent: {
      name: 'Default slot content',
      control: { type: 'text' },
      description: '**NOT A PROP**: Markup for the main panel content.',
    },
  },
  args: {
    clean: false,
    active: false,
    headingSlotContent: '<span slot="heading">Panel the First</span>',
    defaultSlotContent:
      '<outline-styled-text><p>Etiam ut purus mattis mauris</p><p>Suspendisse eu ligula.Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p></outline-styled-text>',
  },
};

const Template = ({
  clean,
  active,
  headingSlotContent,
  defaultSlotContent,
}): TemplateResult =>
  html`
    <outline-accordion-panel ?clean=${clean} ?active=${active}>
      ${unsafeHTML(`${headingSlotContent}`)}
      ${unsafeHTML(`${defaultSlotContent}`)}
    </outline-accordion-panel>
  `;

export const AccordionPanel = Template.bind({});
AccordionPanel.args = {
  clean: false,
  active: false,
};
