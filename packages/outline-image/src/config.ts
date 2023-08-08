/**
 * @file src/data.ts
 * This file should contain various sample data and shared functions.
 */
import { html, TemplateResult } from 'lit';
import { aspectRatios } from '@phase2/outline-image';

export const argImageRatioProperty = (
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

export const argImageDisplayMethod = (
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

export const NarrowStoryDecorator = [
  (Story: () => unknown): TemplateResult =>
    html` <div class="block max-w-[600px]">${Story()}</div> `,
];
