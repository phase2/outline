// const path = require('path');
// const outlineConfig = require('@phase2/outline-temnplates/default/src/outline.config');

// const excludedStories = outlineConfig.excludedStories;
// const includedStories = outlineConfig.includedStories;
// function getExcluded() {
//   return excludedStories.join('|');
// }

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    // Explicitly order the main documentation.
    //'../packages/outline-templates/default/src/.storybook/stories/guides/welcome.stories.mdx',
    //'../packages/outline-templates/default/src/.storybook/stories/guides/development/component-development/01-main.stories.mdx',
    '../packages/!(dist)**/*.stories.@(ts|mdx)',
    // Intentionally order the Code Style Guide pages.
    //'./stories/guides/development/component-development/01-main.stories.mdx',
    // './stories/guides/development/component-development/stories.@(js|ts|mdx)',
    // Other stories in the .storybook directory.
    //'./stories/**/*.stories.@(js|ts|mdx)',
    // External Stories added to outlineConfig.
    // ...includedStories,
    // All other components in src directory except those excluded on outlineConfig.
    // ...(excludedStories.length
    //   ? [`../components/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
    //   : [`../components/**/*.stories.@(js|ts|mdx)`]),
  ],
  addons: [
    '@storybook/addon-essentials',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
    //'@storybook/addon-links',
    //'@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components',
};
