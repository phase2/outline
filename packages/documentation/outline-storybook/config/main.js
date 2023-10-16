const outlineConfig = require('../../outline.config');

const excludedStories = outlineConfig.excludedStories;
function getExcluded() {
  return excludedStories.join('|');
}

const nodePath = '../../node_modules/@phase2/outline-docs';
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
    // Welcome guide.
    `${nodePath}/src/guides/welcome.mdx`,
    // Component development guides.
    `${nodePath}/src/guides/development/component-development/**/*.mdx`,
    // Component usage guides.
    `${nodePath}/src/guides/consumers/**/*.mdx`,
    // QA/UAT usage guides.
    `${nodePath}/src/guides/qa-uat/**/*.mdx`,
    // Tooling usage guides.
    `${nodePath}/src/guides/tooling/**/*.mdx`,
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
  ],
};
