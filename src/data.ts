/**
 * @file src/data.ts
 * This file should contain various sample data and shared functions.
 */
import { html, TemplateResult } from 'lit';
import { aspectRatios } from './components/base/outline-image/outline-image';

export const sampleData = {};

export const eyebrowSlotData = {
  name: 'slot="eyebrow"',
  description: 'The text for the eyebrow.',
  table: {
    category: 'Slots',
    defaultValue: { summary: 'NULL' },
  },
  control: {
    type: 'text',
  },
};

export const titleSlotData = {
  name: 'slot="title"',
  description: 'The text for the title.',
  table: {
    category: 'Slots',
    defaultValue: { summary: 'NULL' },
  },
  control: {
    type: 'text',
  },
};

export const summarySlotData = {
  name: 'slot="summary"',
  description: 'The summary for the card content.',
  table: {
    category: 'Slots',
    defaultValue: { summary: 'NULL' },
  },
  control: {
    type: 'text',
  },
};

export const contentSlotData = {
  name: 'slot="content"',
  description: 'The text for the card content.',
  table: {
    category: 'Slots',
    defaultValue: { summary: 'NULL' },
  },
  control: {
    type: 'text',
  },
};

export const ctaSlotData = {
  name: 'slot="cta"',
  description: 'The text for the button CTA.',
  table: {
    category: 'Slots',
    defaultValue: { summary: 'NULL' },
  },
  control: {
    type: 'text',
  },
};

export const backgroundPropertyData = (attributeName: string) => {
  return {
    name: attributeName,
    control: {
      type: 'select',
    },
    options: ['gray', 'blue', 'white', 'transparent'],
    table: {
      category: 'Properties',
      defaultValue: { summary: 'transparent' },
    },
    description: 'Color to apply to the card background.',
  };
};

export const paddingPropertyData = (attributeName: string) => {
  return {
    name: attributeName,
    control: {
      type: 'select',
    },
    options: ['none', 'small', 'medium', 'large'],
    table: {
      category: 'Properties',
      defaultValue: { summary: 'medium' },
    },
    description: 'An amount of padding to apply to a wrapper element.',
  };
};

export const imageRatioPropertyData = (
  attributeName: string,
  category = 'Properties'
) => {
  return {
    name: attributeName,
    control: {
      type: 'select',
    },
    options: aspectRatios,
    table: {
      category: category,
      defaultValue: { summary: 'default' },
    },
    description: 'The aspect ratio to apply to an image element.',
  };
};

export const imageDisplayMethodData = (
  attributeName: string,
  category = 'Other Controls'
) => {
  return {
    name: attributeName,
    control: {
      type: 'radio',
    },
    options: ['slot', 'prop'],
    table: {
      category: category,
      defaultValue: { summary: 'slot' },
    },
    description: `
 Which method to demonstrate when rendering the image. 
 This is not an actual property on the component, but a sample configuration for Storybook testing.
 - \`slot\`: Use the default slot to render the image.
 - \`prop\`: Use properties to render the image.`,
  };
};

// statusType: {
//   description:
//     'The status type of the alert. Such as `information` or `warning`.',
//   options: alertStatusTypes,
//   control: { type: 'select' },
// },

export const NarrowStoryDecorator = [
  (Story): TemplateResult =>
    html` <div class="block max-w-[600px]">${Story()}</div> `,
];
