/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { argTypeHidden } from '@phase2/outline-core';
import '@phase2/outline-accordion'
import '@phase2/outline-heading'

export default {
  title: 'Content/Accordion/Accordion',
  component: 'outline-accordion',
  // Tags are a new feature coming in 7.1, that we are using to drive this behaviour.
  tags: ['docsPage'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description:
        'Markup to be used as heading for the accordion. If not provided, the accordion will not have a heading.',
        table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
    },
    allOpen: {
      description:
        'Attribute that determines if all the accordion panels start open. Currently just for the editor experience. Defaults to false.',
      control: {
        type: 'boolean',
      },
      name: 'all open',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    singlePanel: {
      description:
        'Attribute that determines if the accordion can have multiple panels one at one time.',
      control: {
        type: 'boolean',
      },
      name: 'single-panel',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    clean: {
      control: {
        type: 'boolean',
      },
      description:
        '**`Boolean`**:<br> Sets the accordion to the "clean" variant.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    PanelsSlotContent: argTypeHidden,
  },
  args: {
    singlePanel: true,
    clean: false,
    allOpen: false,
    label: `<outline-heading level="h2" level-style="semibold" slot="label">Accordion Items</outline-heading>`
  },
};

const Template = ({
  clean,
  singlePanel,
  allOpen,
  label,
}: any): TemplateResult =>
  html`
<outline-accordion
  ?clean=${clean}
  ?single-panel=${singlePanel}
  ?allOpen=${allOpen}
>
  ${label ? html`${unsafeHTML(label)}` : null}
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 1</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 2</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
  
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 3</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 4</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 5</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
</outline-accordion>
`;

export const Accordion: any = Template.bind({});
Accordion.args = {
  singlePanel: true,
  clean: false,
  allOpen: false,
};
