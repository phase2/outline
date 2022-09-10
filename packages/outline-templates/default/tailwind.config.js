const defaultConfig = require(`@phase2/outline-config/tailwind.config`);
module.exports = {
  ...defaultConfig,
  // Ensure we scan appropriate package(s) and files for Tailwind classes.
  content: [
    './packages/outline-storybook/.storybook/stories/**/*.{ts,tsx,mdx,html,txt,css}',
  ],
};
