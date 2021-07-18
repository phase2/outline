import { html, TemplateResult } from 'lit-html';
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
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    levelSize: {
      control: {
        type: 'select',
        options: HeadingSizes,
      },
    },
    levelStyle: {
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
        levelsize="${ifDefined(levelSize)}"
        levelstyle="${ifDefined(levelStyle)}"
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
