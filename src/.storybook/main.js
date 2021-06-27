const path = require('path');

module.exports = {
  // Issues still with incorporating latest Webpack.
  // Leaving here for sample of switching builders.
  core: {
    builder: 'webpack5',
  },
  stories: [
    // Explicitly order the main documentation.
    './stories/documentation/tooling.stories.mdx',
    './stories/documentation/contributing.stories.mdx',
    './stories/documentation/roadmap.stories.mdx',
    // // Other stories in the .storybook directory.
    './stories/**/*.stories.@(js|ts|mdx)',
    // All other components in src directory.
    '../components/**/*.stories.@(js|ts|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    //'storybook-addon-themes',
    // Add everything below here
    // Incompatible with addon-docs (the show code button on Docs pages)
    //'@storybook/addon-storysource',
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
                require('postcss-preset-env')({ stage: 1 }),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
