/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeSlotContent } from '@phase2/outline-core';
import { alertSizes, alertStatusTypes } from '../../../../outline-alert/src/outline-alert';
import '../../../../outline-alert/src/outline-alert';

export default {
  title: 'Content/Alert',
  component: 'outline-alert',
  argTypes: {
    headerSlot: {
      name: 'slot="outline-alert--header"',
      description: 'The header slot. For example a header title.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    // We aren't setting a control type here so we can edit the value using the infered object.
    defaultSlot: {
      ...argTypeSlotContent.defaultSlot,
      table: {
        category: 'Slots',
      },
    },
    statusType: {
      description:
        'The status type of the alert. Such as `information` or `warning`.',
      options: alertStatusTypes,
      control: { type: 'select' },
    },
    size: {
      description: 'The size of the alert.',
      options: alertSizes,
      control: { type: 'select' },
    },
    shouldShowIcon: {
      description: '(not yet implemented) Should we show the icon',
      control: { type: 'boolean' },
    },
    isInteractive: {
      description: 'Is there an interaction in the alert, such as a button.',
      control: { type: 'boolean' },
    },
  },
  args: {
    statusType: 'info',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders an alert.

## Variation

You can set the type of alert with \`statusType\`.

You can use a smaller alert with \`size\` of \`small\`.

You can remove the icon with \`shouldShowIcon\` set to \`false\`.

You can customize the header by adding a \`outline-alert--header\` slot.

## Accessibility

If the alert has an interaction, you should indicate this with \`isInteractive\` set to \`true\`.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-alert
  statusType="{{ statusType }}"
  size="{{ size }}"
  {{ shouldShowIcon }}
  {{ isInteractive }}
>
  <span slot="outline-alert--header">{{ headerSlot }}</span>
  {{ defaultSlot }}
</outline-alert>
        `,
      },
    },
  },
};


const Template = ({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive,
}: any): TemplateResult => {
  return html`
    <outline-alert
      statusType="${ifDefined(statusType)}"
      size="${ifDefined(size)}"
      ?shouldShowIcon="${shouldShowIcon}"
      ?isInteractive="${isInteractive}"
    >
      ${ifDefined(headerSlot)} ${ifDefined(defaultSlot)}
    </outline-alert>
  `;
};

export const Information: any = Template.bind({});
Information.args = {
  defaultSlot: html`Here is an informational message.`,
  statusType: 'info',
};

export const Warning: any = Template.bind({});
Warning.args = {
  defaultSlot: html`Here is a warning message.`,
  statusType: 'warning',
};

export const Error: any = Template.bind({});
Error.args = {
  defaultSlot: html`Here is an error message.`,
  statusType: 'error',
};

export const Success: any = Template.bind({});
Success.args = {
  defaultSlot: html`Here is a success message.`,
  statusType: 'success',
};

export const Small: any = Template.bind({});
Small.args = {
  defaultSlot: html`Here is a small alert message.`,
  size: 'small',
};

export const Header: any = Template.bind({});
Header.args = {
  headerSlot: html`
    <span slot="outline-alert--header">
      Here is an alert with a custom header.
    </span>
  `,
  defaultSlot: html` Here is a message. `,
};

export const NoIcon: any = Template.bind({});
NoIcon.args = {
  defaultSlot: html`Here is an alert with no icon.`,
  shouldShowIcon: false,
};

export const InteractiveAlert: any = Template.bind({});
InteractiveAlert.args = {
  defaultSlot: html`
    Here is an alert with an interaction.
    <outline-link link-href="#">Click here</outline-link>
  `,
  isInteractive: true,
};
