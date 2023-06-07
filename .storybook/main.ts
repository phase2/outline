import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
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
    '../packages/documentation/outline-docs/src/guides/**/*.stories.@(js|ts|mdx)',
    // Component stories.
    '../packages/documentation/outline-storybook/stories/**/*.stories.@(js|ts|mdx)',
  ],
  typescript: {
    check: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    {
      name: '@storybook/addon-essentials',
    },
  ],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation', // set to change the name of generated docs entries
  },
};

export default config;
