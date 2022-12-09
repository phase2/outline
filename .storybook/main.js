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
  stories: ['../packages/outline-storybook/stories/**/*.stories.@(js|ts)'],

  typescript: {
    check: false,
    checkOptions: {},
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: prop =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
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
    docsPage: 'automatic',
  },
};
