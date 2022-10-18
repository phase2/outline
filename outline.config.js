const defaultConfig = require(`@phase2/outline-config/outline.config`);

// Used to process PostCSS plugins against Storybook specific styles.
const storybookPath = 'packages/outline-storybook/config';
module.exports = {
  ...defaultConfig,
  css: {
    global: [
      {
        src: `${storybookPath}/storybook.outline.css`,
        dest: `${storybookPath}/storybook.main.css`,
      },
    ],
  },
};
