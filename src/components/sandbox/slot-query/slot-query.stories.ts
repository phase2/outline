import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './slot-query';

const configuration = {
  title: 'Sandbox/SlotQuery',
  component: 'slot-query',
  argTypes: {
    unnestedSlotContent: {
      description: 'Content that will not be in a nested slot.',
      name: 'slot="unnested"',
      table: {
        category: 'Slots',
      },
      control: { type: 'text' },
    },
    nestedSlotContent: {
      name: 'slot="nested"',
      description: 'Content that will be in a nested slot.',
      table: {
        category: 'Slots',
      },
      control: { type: 'text' },
    },
  },
  args : {
    unnestedSlotContent: `unnested slot content`,
    nestedSlotContent: `nested slot content`,
  },
  parameters: {
    docs: {
      description: {
        component: `
This demonstrates how element queries work with nested components and slots.

View the developer console to see messages.
        `,
      },
    },
  },
};

export default configuration;

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };

  return html`
    <slot-query>
      <div slot="unnested">
        ${unsafeHTML(args.unnestedSlotContent ?? '')}
      </div>
      <div slot="nested">
        <slot-query>
          <div slot="nested">
            ${unsafeHTML(args.nestedSlotContent ?? '')}
          <div/>
        </slot-query>
      </div>
    </slot-query>
  `;
};

export const SlotQuery = Template.bind({});
