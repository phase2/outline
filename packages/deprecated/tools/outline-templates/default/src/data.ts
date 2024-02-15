/**
 * @file src/data.ts
 * This file should contain various sample data and shared functions.
 */

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
