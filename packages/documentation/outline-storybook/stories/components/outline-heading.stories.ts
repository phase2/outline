/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeSlotContent } from '@phase2/outline-core';

import {
  AllowedHeadingLevels,
  HeadingSizes,
  HeadingWeights,
} from '@phase2/outline-core-heading';

import '@phase2/outline-core-heading';
import '@phase2/outline-container';

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
  component: 'outline-core-heading',
  // Tags are a new feature coming in 7.1, that we are using to drive this behaviour.
  tags: ['docsPage'],
  argTypes: {
    level: {
      description:
        'level property. Using this property means your heading will be in the shadowDOM which IS NOT RECOMMENDED.',
      options: levelOptions,
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    size: {
      description: 'Presentation level. Used for styling.',
      options: HeadingSizes,
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    weight: {
      description: 'Presentation style. Font weight variation.',
      options: HeadingWeights,
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
This component renders styles for a heading as the default. You will need to hard define the appropriate <h> tag within your slot that wraps your content. This component is intended to have the <h> tag and the content within rendered to the light DOM. If you MUST use shadowDOM you can define the level prop but you must also remove the <h> tag from your slot content. This is not recommended.
        `,
      },
    },
  },
};

const Template = ({ level, size, weight, defaultSlot }: any): TemplateResult =>
  html`
    <outline-container>
      <outline-core-heading
        level="${ifDefined(level)}"
        size="${ifDefined(size)}"
        weight="${ifDefined(weight)}"
      >
        ${level ? defaultSlot : html`<h1>${defaultSlot}</h1>`} 

      </outline-core-heading>
    </outline-container>
  `;

export const Heading: any = Template.bind({});
Heading.args = {
  level: null,
  size: 'xxxl',
  weight: 'semibold',
};

const SlottedHeadingsWithAttributesTemplate = (): TemplateResult => {
  return html`
<outline-core-heading size="xxxl" weight="bold"><h1>This is a standard Heading 1.</h1></outline-core-heading>
<outline-core-heading size="xxl" weight="semibold"><h2>This is a standard Heading 2.</h2></outline-core-heading>
<outline-core-heading size="xl" weight="semibold"><h3>This is a standard Heading 3.</h3></outline-core-heading>
<outline-core-heading size="lg" weight="semibold"><h4>This is a standard Heading 4.</h4></outline-core-heading>
<outline-core-heading size="md" weight="semibold"><h5>This is a standard Heading 5.</h5></outline-core-heading>
<outline-core-heading size="md" weight="semibold"><h6>This is a standard Heading 6.</h6></outline-core-heading>
`;
};

export const SlottedHeadingsWithAttributes = () =>
  SlottedHeadingsWithAttributesTemplate();
SlottedHeadingsWithAttributes.parameters = {
  docs: {
    description: {
      story: `This example shows the recommended way of creating headings using slots. The size and weight attributes are optional and can be customized for each heading.
      `,
    },
  },
};

const SlottedHeadingsWithNoAttributesTemplate = (): TemplateResult => {
  return html`
<outline-core-heading><h1>This is a standard Heading 1.</h1></outline-core-heading>
<outline-core-heading><h2>This is a standard Heading 2.</h2></outline-core-heading>
<outline-core-heading><h3>This is a standard Heading 3.</h3></outline-core-heading>
<outline-core-heading><h4>This is a standard Heading 4.</h4></outline-core-heading>
<outline-core-heading><h5>This is a standard Heading 5.</h5></outline-core-heading>
<outline-core-heading><h6>This is a standard Heading 6.</h6></outline-core-heading>
`;
};

export const SlottedHeadingsWithNoAttributes = () =>
  SlottedHeadingsWithNoAttributesTemplate();
SlottedHeadingsWithNoAttributes.parameters = {
  docs: {
    description: {
      story: `This example shows the recommended way of creating headings using slots but with no attributes for styling.
      `,
    },
  },
};

const ShadowDomHeadingsWithAttributesTemplate = (): TemplateResult => {
  return html`
<outline-core-heading level="h1" size="xxxl" weight="bold">This is a standard Heading 1.</outline-core-heading>
<outline-core-heading level="h2" size="xxl" weight="semibold">This is a standard Heading 2.</outline-core-heading>
<outline-core-heading level="h3" size="xl" weight="semibold">This is a standard Heading 3.</outline-core-heading>
<outline-core-heading level="h4" size="lg" weight="semibold">This is a standard Heading 4.</outline-core-heading>
<outline-core-heading level="h5" size="md" weight="semibold">This is a standard Heading 5.</outline-core-heading>
<outline-core-heading level="h6" size="md" weight="semibold">This is a standard Heading 6.</outline-core-heading>
`;
};

export const ShadowDomHeadingsWithAttributes = () =>
ShadowDomHeadingsWithAttributesTemplate();
ShadowDomHeadingsWithAttributes.parameters = {
  docs: {
    description: {
      story: `This example shows how to use ShadowDOM if you must. Not recommended.
      `,
    },
  },
};
