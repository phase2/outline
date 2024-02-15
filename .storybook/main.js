import { dirname, join } from 'path';

module.exports = {
  stories: [
    // Intentionally ordering welcome page first.
    '../packages/documentation/outline-docs/src/guides/welcome/00-welcome.mdx',
    '../packages/documentation/outline-docs/src/guides/welcome/more-information/*.mdx',
    // Tooling usage guides.
    '../packages/documentation/outline-docs/src/guides/development/tooling/**/*.mdx',
    // Component development guides.
    '../packages/documentation/outline-docs/src/guides/development/component-development/**/*.mdx',
    // Documentation stories.
    '../packages/documentation/outline-docs/src/guides/**/*.@(js|ts|mdx)',
    // Modern component stories.
    '../packages/**/docs/*.mdx',
  ],
  typescript: {
    check: false,
    checkOptions: {},
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
  ],
  features: {
    storyStoreV7: true,
    postcss: true,
    buildStoriesJson: true,
    modernInlineRender: false,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation', // set to change the name of generated docs entries
  },
};
