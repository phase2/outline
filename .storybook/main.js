import { dirname, join } from 'path';
const outlineConfig = require('../outline.config');

const excludedStories = outlineConfig.excludedStories;
console.log(excludedStories);
function getExcluded() {
  return excludedStories.join('|');
}

module.exports = {
  stories: [
    // Intentionally ordering welcome page first.
    '../packages/documentation/outline-docs/src/guides/welcome.mdx',
    // Component development guides.
    '../packages/documentation/outline-docs/src/guides/development/component-development/**/*.mdx',
    // Component usage guides.
    '../packages/documentation/outline-docs/src/guides/consumers/**/*.mdx',
    // QA/UAT usage guides.
    '../packages/documentation/outline-docs/src/guides/qa-uat/**/*.mdx',
    // Tooling usage guides.
    '../packages/documentation/outline-docs/src/guides/tooling/**/*.mdx',
    // Documentation stories.
    '../packages/documentation/outline-docs/src/guides/**/*.@(js|ts|mdx)',
    // Modern component stories.
    //'../packages/**/docs/*.mdx',

    // Old component stories.
    ...(excludedStories.length
      ? [`../packages/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
      : [`../packages/**/*.stories.@(js|ts|mdx)`]),
    '../packages/documentation/outline-storybook/stories/**/*.stories.@(js|ts|mdx)',
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
    modernInlineRender: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation', // set to change the name of generated docs entries
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
