const defaultConfig = require(`@phase2/outline-config/outline.config`);
module.exports = {
  ...defaultConfig,
  css: {
    global: [
      {
        src: 'src/.storybook/storybook.outline.css',
        dest: 'src/.storybook/storybook.main.css',
      },
    ],
  },
};
