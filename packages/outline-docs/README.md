# outline-docs

This provides a base set of documentation about Outline for projects to include in their storybook instances.

The following shows a very minimal sample of how to get the included stories into your Storybook instance.

Use it as a guide to modify your `src/.storybook/main.js` file or wherever your project is defining config for storybook.

```js
module exports {
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
  stories: [
    '../components/**/*.stories.@(js|ts|mdx)',
    './stories/!(guides|tokens|demonstration|examples)**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
}
```
