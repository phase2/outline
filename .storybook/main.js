// const path = require('path');
// const outlineConfig = require('@phase2/outline-config/outline.config');
// const excludedStories = outlineConfig.excludedStories;
// const includedStories = outlineConfig.includedStories;
// function getExcluded() {
//   return excludedStories.join('|');
// }
module.exports = {
  // core: {
  //   builder: 'webpack5',
  // },
  // staticDirs: ['../static', '../assets'],
  stories: [
    // Explicitly order the main documentation.
    //'../packages/outline-storybook/stories/guides/welcome.stories.mdx',
    //'../packages/outline-storybook/stories/guides/development/component-development/01-main.stories.mdx',
    '../packages/outline-storybook/stories/!(guides|tokens|demonstration|examples)**/*.stories.@(js|jsx|ts|tsx|mdx)', // '../packages/outline-storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../packages/**/src/*.stories.@(js|jsx|ts|tsx|mdx)',
    // External Stories added to outlineConfig.
    // ...includedStories,
    // All other components in src directory except those excluded on outlineConfig.
    // ...(excludedStories.length
    //   ? [`../components/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
    //   : [`../components/**/*.stories.@(js|ts|mdx)`]),
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        transcludeMarkdown: true, //👈 Set transcludeMarkdown to true
      },
    },
    'storybook-addon-mdx-embed',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],

  features: {
    storyStoreV7: true,
    postcss: false,
    buildStoriesJson: true,
    modernInlineRender: true,
    previewMdx2: false,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docsPage: {
    docs: 'automatic',
  },
};
