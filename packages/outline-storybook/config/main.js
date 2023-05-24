const path = require('path');
const outlineConfig = require('../../outline.config');
import { outlineStories } from '@phase2/outline-docs';

const excludedStories = outlineConfig.excludedStories;
function getExcluded() {
  return excludedStories.join('|');
}

module.exports = {
  features: {
    storyStoreV7: true,
    postcss: false,
    buildStoriesJson: true,
    modernInlineRender: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Full Documentation', // set to change the name of generated docs entries
  },
  staticDirs: ['../assets'],
  stories: [
    ...outlineStories,
    // // Explicitly order the main documentation.
    //'./stories/guides/welcome.stories.mdx',
    // // Intentionally order the Code Style Guide pages.
    // './stories/guides/development/component-development/01-main.stories.mdx',
    // //'./stories/guides/development/component-development/stories.@(js|ts|mdx)',
    // // Other stories in the .storybook directory.
    // './stories/**/*.stories.@(js|ts|mdx)',
    // // All other components in src directory except those excluded on outlineConfig.
    ...(excludedStories.length
      ? [`../components/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
      : [`../components/**/*.stories.@(js|ts|mdx)`]),
    './stories/!(guides|tokens|demonstration|examples)**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    '@storybook/addon-mdx-gfm',
  ],
};
