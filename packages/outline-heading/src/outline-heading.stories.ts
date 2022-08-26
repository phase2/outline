/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeSlotContent } from '@phase2/outline-core';

import { AllowedHeadingLevels, HeadingSizes, HeadingStyles } from './config';

import './outline-heading';
import '../../outline-container/src/outline-container';

const levelOptions: AllowedHeadingLevels[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export default {
  title: 'Content/Heading',
  component: 'outline-heading',
  argTypes: {
    level: {
      description: 'HTML level. Used by screen readers.',
      options: levelOptions,
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'h2' } },
    },
    levelSize: {
      description: 'Presentation level. Used for styling.',
      options: HeadingSizes,
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    levelStyle: {
      description: 'Presentation style. Font weight variation.',
      options: HeadingStyles,
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'bold' } },
    },
    ...argTypeSlotContent,
  },
  args: {
    defaultSlot:
      'Sample heading text that should take up multiple lines so we can test for proper size and leading.',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a heading.

## Difference from \`h1\`, \`h2\`, etc elements

This is rendered as various \`h1\`, etc elements, but is styled based on the \`level-size\`. This allows screen readers to properly read the structure of a page even when this diverges from the visual presentation of these headers.

## Variation

You can also set the font weight using the \`level-style\` attribute.

        `,
      },
      source: {
        code: `
<outline-heading
  level="{{ level }}"
  level-size="{{ level-size }}"
  level-style="{{ levelStyle }}"
>
  {{ defaultSlot}
</outline-heading>
        `,
      },
    },
  },
};

const Template = ({
  level,
  levelSize,
  levelStyle,
  defaultSlot,
}: any): TemplateResult =>
  html`
    <outline-container>
      <outline-heading
        level="${ifDefined(level)}"
        level-size="${ifDefined(levelSize)}"
        level-style="${ifDefined(levelStyle)}"
      >
        ${defaultSlot}
      </outline-heading>
    </outline-container>
  `;

export const Heading: any = Template.bind({});
Heading.args = {
  level: 'h1',
  levelSize: '3xl',
  levelStyle: 'semibold',
};

const StandardHeadingsTemplate = (): TemplateResult => {
  return html`
<outline-heading level="h1">This is a standard Heading 1.</outline-heading>
<outline-heading level="h2">This is a standard Heading 2.</outline-heading>
<outline-heading level="h3">This is a standard Heading 3.</outline-heading>
<outline-heading level="h4">This is a standard Heading 4.</outline-heading>
<outline-heading level="h5">This is a standard Heading 5.</outline-heading>
<outline-heading level="h6">This is a standard Heading 6.</outline-heading>
`;
};

export const StandardHeadings = () => StandardHeadingsTemplate();
StandardHeadings.parameters = {
  docs: {
    description: {
      story: `This example shows the standard heading elements. 
      This uses only the \`level\` attribute to declare the semantic level of the heading element.
      This also allows us to show the default shift of sizes between smaller and larger breakpoints.
      `,
    },
    source: {
      code: `
<outline-heading level="h1">This is a standard Heading 1 element.</outline-heading>
<outline-heading level="h2">This is a standard Heading 2 element.</outline-heading>
<outline-heading level="h3">This is a standard Heading 3 element.</outline-heading>
<outline-heading level="h4">This is a standard Heading 4 element.</outline-heading>
<outline-heading level="h5">This is a standard Heading 5 element.</outline-heading>
<outline-heading level="h6">This is a standard Heading 6 element.</outline-heading>
`
    }
  }
};

const DefaultHeadingTemplate = (): TemplateResult => {
  return html`
<outline-heading>Sample heading text that should take up multiple lines so we can test for proper size and leading.</outline-heading>
`;
};
export const DefaultHeading: any = DefaultHeadingTemplate.bind({});
DefaultHeading.args = {};
DefaultHeading.parameters = {
  docs: {
    description: {
      story: `This example shows an <code>outline-heading</code> element with no attributes being rendered.
      `,
    },
    source: {
      code: `
<outline-heading>Sample heading text that should take up multiple lines so we can test for proper size and leading.</outline-heading>
`
    }
  }
};
