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
    accessibilityDescription: {
      name: 'slot="outline-modal--accessibility-description"',
      description: 'An description for accessibility. It is not visible.',
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
    elementToFocusSelector: {
      name: 'elementToFocusSelector',
      description:
        'An element to focus on when the modal is opened. This might be a primary call to action such as "accept". If no value is provided, the modal will try to find the best thing to focus on. Should be a valid CSS selector.',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a trigger and modal. When the trigger is active, the modal opens.

## Triggering the modal

You can add a trigger slot to the modal \`slot="outline-modal--trigger"\`.

You can also manually trigger the modal with the \`.open()\` method. Similarly, you can close the modal with \`.close()\`.

## Triggering the modal close with Javascript

You could make a button within the modal to close it.

Example:

\`\`\`HTML
<button class="accept" onClick="document.querySelectorAll('outline-modal').forEach((node) => {if(node.isOpen){node.close();}})">
\`\`\`

## Variations

You can set the \`size\` to change the size of the modal.

## Accessibility

Based on guidelines from [WAI-ARIA Authoring Practices 1.1: Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html).

### Accessible style
- Modal uses full screen on small devices

### Optional features
- If a header is supplied as a slot, it is referenced with \`aria-labelledby\`
- If an accessibility description is supplied by a slot, it is referenced with \`aria-describedby\`
- The system will try to focus the first focusable element. If you would like, you can provide a selector with the \`elementToFocusSelector\` attribute and this will be focused.

### Keyboard navigation
- If a trigger is supplied as a slot, that element can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- On open, the modal will focus on the first focusable element, or the modal wrapper if none can be focused.
- The \`Escape\` button can be used to close the modal
- The close button can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- When the modal is closed, the trigger is focused.

## Javascript interaction

### Events

Events are triggered by the modal.

- \`opened\`
- \`closed\`

### Properties

You can access the boolean \`isOpen\` property to determine if the modal is open.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-modal
  size="{{ size }}"
  elementToFocusSelector="{{ elementToFocusSelector }}"
>
  <outline-link slot="outline-modal--trigger">{{ triggerSlot}}</outline-link>
  <outline-heading slot="outline-modal--header">{{ headerSlot}}</outline-heading>
  <p slot="outline-modal--accessibility-description">{{ accessibilityDescription }}</p>
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
  accessibilityDescription,
  defaultSlot,
  size,
  elementToFocusSelector,
}): TemplateResult => {
  return html`
    <outline-modal
      size="${ifDefined(size)}"
      elementToFocusSelector="${ifDefined(elementToFocusSelector)}"
    >
      ${ifDefined(triggerSlot)} ${ifDefined(headerSlot)}
      ${ifDefined(defaultSlot)} ${ifDefined(accessibilityDescription)}
    </outline-modal>
  `;
};

export const Small = Template.bind({});
Small.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      <p>Open small modal.</p>
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
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
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
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
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
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
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal without header.</p>
    </outline-link>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

// This demonstrates an accessibility feature.
export const AccessibilityDescription = Template.bind({});
AccessibilityDescription.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      <p>Open a modal with an accessibility description.</p>
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  accessibilityDescription: html`
    <p slot="outline-modal--accessibility-description">
      This is an accessibility description about the modal.
    </p>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

// This demonstrates an accessibility feature.
// @todo I could not set focus on the `outline-button` element, but a standard `button` works.
export const CustomFocusElement = Template.bind({});
CustomFocusElement.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal and focus on accept button.</p>
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <outline-button class="cancel">Cancel</outline-button>
    <button
      class="accept"
      onClick="document.querySelectorAll('outline-modal').forEach((node) => {if(node.isOpen){node.close();}})"
    >
      Accept
    </button>
  `,
  elementToFocusSelector: '.accept',
};

// This demonstrates an accessibility feature.
export const AutoFocusedElement = Template.bind({});
AutoFocusedElement.args = {
  triggerSlot: html`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal and focus on accept button automatically.</p>
    </outline-link>
  `,
  headerSlot: html`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button
      onClick="document.querySelectorAll('outline-modal').forEach((node) => {if(node.isOpen){node.close();}})"
    >
      Accept
    </button>
  `,
};
