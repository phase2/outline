module.exports = {
  stories: ['../packages/outline-storybook/stories/**/*.stories.@(js|ts|mdx)'],
  typescript: {
    check: false,
    checkOptions: {},
  },

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        transcludeMarkdown: true, //👈 Set transcludeMarkdown to true
      },
    },
    'storybook-addon-mdx-embed',
  ],

  features: {
    storyStoreV7: true,
    postcss: false,
    buildStoriesJson: true,
    modernInlineRender: true,
    previewMdx2: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    docsPage: 'automatic',
  },
};
