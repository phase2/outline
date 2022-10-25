const defaultConfig = require(`@phase2/outline-config/outline.config`);
const destBasePath = 'dist';
module.exports = {
  ...defaultConfig,
  global: [
    // {
    //   src: 'src/shared.css',
    //   dest: `${destBasePath}/shared.css`,
    // },
    {
      src: 'src/tailwind.css',
      dest: `${destBasePath}/tailwind.css`,
    },
    {
      src: 'src/.storybook/storybook.css',
      dest: `${destBasePath}/storybook.css`,
    },
  ],
};
