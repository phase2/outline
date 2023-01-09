module.exports = {
  stories: ['../packages/outline-storybook/stories/**/*.stories.@(js|ts)'],
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
};
