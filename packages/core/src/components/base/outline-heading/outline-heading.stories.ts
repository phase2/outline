import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import { argTypeSlotContent } from '../outline-element/utils/utils';

import { AllowedHeadingLevels, HeadingSizes, HeadingStyles } from './config';

import './outline-heading';
import '../outline-container/outline-container';

const levelOptions: AllowedHeadingLevels[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export default {
  title: 'Atoms/Heading',
  component: 'outline-heading',
  argTypes: {
    ...argTypeSlotContent,
    level: {
      description: 'HTML level. Used by screen readers.',
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    levelSize: {
      description: 'Presentation level. Used for styling.',
      control: {
        type: 'select',
        options: HeadingSizes,
      },
    },
    levelStyle: {
      description: 'Presentation style. Font weight variation.',
      control: {
        type: 'select',
        options: HeadingStyles,
      },
    },
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
}): TemplateResult =>
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

export const Heading = Template.bind({});
Heading.args = {
  level: 'h1',
  levelSize: '3xl',
  levelStyle: 'semibold',
};

export const DefaultHeading = Template.bind({});
DefaultHeading.args = {};

export const ThinHeading = Template.bind({});
ThinHeading.args = {
  level: 'h2',
  levelSize: '3xl',
  levelStyle: 'thin',
};
