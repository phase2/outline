import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './outline-accordion';
import '../outline-accordion-panel/outline-accordion-panel';

export default {
  title: 'Content/Accordion/Accordion',
  component: 'outline-accordion',
  parameters: {
    docs: {
      source: {
        code: `
  <outline-accordion label=label clean=clean single-panel=singlePanel>
    <outline-accordion-panel slot="panels">
      <h5 slot="heading">Heading 1</h5>
      <div class="wysiwyg">
        <h6>Etiam ut purus mattis mauris</h6>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.
        </p>
      </div>
    </outline-accordion-panel>
      <h5 slot="heading">Heading 2</h5>
      <div class="wysiwyg">
        <h6>Etiam ut purus mattis mauris</h6>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.
        </p>
      </div>
    </outline-accordion-panel>
      <h5 slot="heading">Heading 3</h5>
      <div class="wysiwyg">
        <h6>Etiam ut purus mattis mauris</h6>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.
        </p>
      </div>
    </outline-accordion-panel>
      <h5 slot="heading">Heading 4</h5>
      <div class="wysiwyg">
        <h6>Etiam ut purus mattis mauris</h6>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.
        </p>
      </div>
    </outline-accordion-panel>
      <h5 slot="heading">Heading 5</h5>
      <div class="wysiwyg">
        <h6>Etiam ut purus mattis mauris</h6>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.
        </p>
      </div>
    </outline-accordion-panel>
</outline-accordion>`,
      },
    },
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description:
        '**`String`**:<br> If a value is passed will create h4 header as title.',
    },
    allOpen: {
      description:
        '**`Boolean`**:<br> Attribute that determines if all the accordion panels start open. Currently just for the editor experience. Defaults to false.',
      control: {
        type: 'boolean',
      },
      name: 'all open',
      table: { defaultValue: { summary: 'false' } },
    },
    singlePanel: {
      description:
        '**`Boolean`**:<br> Attribute that determines if the accordion can have multiple panels one at one time. Defaults to false.',
      control: {
        type: 'boolean',
      },
      name: 'single-panel',
    },
    clean: {
      control: {
        type: 'boolean',
      },
      description:
        '**`Boolean`**:<br> Sets the accordion to the "clean" variant.',
    },
    PanelsSlotContent: {
      description:
        '**Slot="panels"`<outline-accordion-panel>`**: <br> The only slot, named for query purposes. <br>Use only `<outline-accordion-panel>` components.',
      name: 'Panels slot content',
    },
  },
  args: {
    label: 'Frequently Asked Questions',
    PanelsSlotContent: `
    <outline-accordion-panel slot="panels">
    <h5 slot="heading">Heading 1</h5>
    <div class='wysiwyg'>
      <h6>Etiam ut purus mattis mauris</h6>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.</p>
    </div>
    </outline-accordion-panel>

<outline-accordion-panel slot="panels">
    <h5 slot="heading">Heading 2</h5>
    <div class="wysiwyg">
      <h6>Etiam ut purus mattis mauris</h6>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.</p>
  </div>
</outline-accordion-panel>

<outline-accordion-panel slot="panels">
    <h5 slot="heading">Heading 3</h5>
    <div class="wysiwyg">
      <h6>Etiam ut purus mattis mauris</h6>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.</p>
  </div>
</outline-accordion-panel>

<outline-accordion-panel slot="panels">
    <h5 slot="heading">Heading 4</h5>
    <div class="wysiwyg">
      <h6>Etiam ut purus mattis mauris</h6>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis. Morbi ac felis. Etiam ultricies nisi vel augue. Praesent venenatis metus at tortor pulvinar varius. Sed cursus turpis vitae tortor. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Fusce vulputate eleifend sapien.</p>
  </div>
</outline-accordion-panel>`,
    clean: false,
    singlePanel: true,
    allOpen: false,
  },
};

const Template = ({
  label,
  clean,
  singlePanel,
  PanelsSlotContent,
  allOpen,
}): TemplateResult =>
  html`
    <outline-accordion
      label=${label}
      ?clean=${clean}
      ?single-panel=${singlePanel}
      ?allOpen=${allOpen}
    >
      ${unsafeHTML(`${PanelsSlotContent}`)}
    </outline-accordion>
  `;

export const Accordion = Template.bind({});
Accordion.args = {
  singlePanel: true,
  clean: false,
  allOpen: false,
};
