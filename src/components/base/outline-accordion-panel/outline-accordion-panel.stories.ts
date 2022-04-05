import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './outline-accordion-panel';

export default {
  title: 'Content/Accordion/Accordion Panel',
  component: 'outline-accordion-panel',
  parameters: {
    docs: {
      source: {
        code: `<outline-accordion-panel clean=clean active=active>
                <h3 slot="heading">Panel the First</h3>
                <div class="wysiwyg">
                  <h3>Etiam ut purus mattis mauris</h3>
                  <p>Suspendisse eu ligula.Proin pretium,
                   leo ac pellentesque mollis, felis nunc ultrices eros,
                   sed gravida augue augue mollis justo.Maecenas ullamcorper,
                   dui et placerat feugiat, eros pede varius nisi,
                   condimentum viverra felis nunc et lorem.
                   Nam at tortor in tellus interdum sagittis.
                   Morbi ac felis.Etiam ultricies nisi vel augue.
                   Praesent venenatis metus at tortor pulvinar varius.
                   Sed cursus turpis vitae tortor.Donec elit libero,
                   sodales nec, volutpat a, suscipit non, turpis.
                   Fusce vulputate eleifend sapien.
                   </p>
                </div >
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
      '<div class="wysiwyg"><h6>Etiam ut purus mattis mauris</h6><p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.</p></div>',
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
