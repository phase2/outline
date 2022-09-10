// const path = require('path');
// const outlineConfig = require('@phase2/outline-templates/default/src/outline.config');

// const excludedStories = outlineConfig.excludedStories;
// const includedStories = outlineConfig.includedStories;

// function getExcluded() {
//   return excludedStories.join('|');
// }

module.exports = {
  core: {
    builder: {
      name: 'webpack5',
      options: {
        // lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  framework: '@storybook/web-components',
  features: { storyStoreV7: true },
  stories: [
    // Explicitly order the main documentation.
    // '../packages/outline-storybook/default/src/.storybook/stories/guides/welcome.stories.mdx',
    // '../packages/outline-storybook/default/src/.storybook/stories/guides/development/component-development/01-main.stories.mdx',
    //'../packages/outline-storybook/default/src/.storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    //'../packages/**/src/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../packages/outline-storybook/.storybook/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/outline-storybook/stories/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',

    // External Stories added to outlineConfig.
    // ...includedStories,
    // All other components in src directory except those excluded on outlineConfig.
    // ...(excludedStories.length
    //   ? [`../components/**/!(${getExcluded()})*.stories.@(js|ts|mdx)`]
    //   : [`../components/**/*.stories.@(js|ts|mdx)`]),
  ],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // '@storybook/addon-links',
    // @todo: Investigate why this is failing
    // '@storybook/addon-a11y',
  ],
  webpackFinal: async config => {
    /**
     * Delete the ProgressPlugin from Storybook to remove log file spam.
     */
    const progressKey = config.plugins.findIndex(
      v => v.constructor.name === 'ProgressPlugin'
    );
    config.plugins.splice(progressKey, 1);

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('postcss-import'),
                require('tailwindcss')('./tailwind.config.js'),
                require('postcss-nested'),
                require('postcss-custom-properties'),
                require('autoprefixer'),
                require('postcss-discard-comments'),
              ],
            },
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
};
