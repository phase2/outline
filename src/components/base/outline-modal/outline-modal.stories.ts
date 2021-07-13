import { html, TemplateResult } from 'lit';
import './outline-modal';
import { argTypeSlotContent } from '../../base/outline-element/utils/utils';
import { modalSizes } from './outline-modal';
import { ifDefined } from 'lit/directives/if-defined';

export default {
  title: 'Molecules/Modal',
  component: 'outline-modal',
  argTypes: {
    triggerSlot: {
      name: 'slot="outline-modal--trigger"',
      description: 'The trigger slot. For example, an "open modal" button.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    headerSlot: {
      name: 'slot="outline-modal--header"',
      description: 'The header slot. For example a header title.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    // This is the modal content.
    // We aren't setting a control type here so we can edit the value using the infered object.
    defaultSlot: {
      ...argTypeSlotContent.defaultSlot,
      table: {
        category: 'Slots',
      },
    },
    size: {
      name: 'size',
      description: 'The size of the modal.',
      options: modalSizes,
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Accessibility

- If a trigger is supplied as a slot, that element can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- The \`Escape\` button can be used to close the modal
- The close button can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)

## Variations

You can set the \`size\` to change the size of the modal.

## Events

Events are triggered by the modal.

- \`opened\`
- \`closed\`

## Properties

You can access the boolean \`isOpen\` property to determine if the modal is open.

## Triggering the modal

You can add a trigger slot to the modal \`slot="outline-modal--trigger"\`.

You can also manually trigger the modal with the \`.open()\` method. Similarly, you can close the modal with \`.close()\`.

`,
      },
      source: {
        code: `
<outline-modal size="{{ size }}">
  <outline-link slot="outline-modal--trigger">{{ triggerSlot}}</outline-link>
  <outline-heading slot="outline-modal--header">{{ headerSlot}}</outline-heading>
  {{ defaultSlot }}
</outline-modal>
        `,
      },
    },
  },
};

const Template = ({
  triggerSlot,
  headerSlot,
  defaultSlot,
  size,
}): TemplateResult => {
  return html`
    <outline-modal size="${ifDefined(size)}">
      ${ifDefined(triggerSlot)} ${ifDefined(headerSlot)}
      ${ifDefined(defaultSlot)}
    </outline-modal>
  `;
};

export const Small = Template.bind({});
Small.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      Open small modal
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`<p>A small modal.</p>`,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      Open medium modal
    </outline-link>
  `,
  headerSlot: html` <outline-heading slot="outline-modal--header">
    The modal header
  </outline-heading>`,
  defaultSlot: html`<p>A medium modal.</p>`,
  size: 'medium',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      Open full screen modal
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`<p>A full screen modal.</p>`,
  size: 'full-screen',
};

export const ButtonTrigger = Template.bind({});
ButtonTrigger.args = {
  triggerSlot: html`
    <outline-button slot="outline-modal--trigger">
      Open modal with button trigger
    </outline-button>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`<p>A small modal.</p>`,
};
