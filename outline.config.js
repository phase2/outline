const defaultConfig = require(`@phase2/outline-config/outline.config`);

// Used to process PostCSS plugins against Storybook specific styles.
const storybookPath = 'packages/documentation/outline-storybook/config';
const destBasePath = 'dist';
module.exports = {
  ...defaultConfig,
  css: {
    global: [
      {
        src: `${storybookPath}/storybook.outline.css`,
        dest: `${storybookPath}/storybook.main.css`,
      },
    ],
    fouc: {
      enabled: true,
      dest: `${destBasePath}/fouc.css`,
    },
  },
  excludedStories: [
    'outline-container',
    'outline-link',
    'outline-accordion',
    'outline-dropdown',
    'outline-list',
    'outline-admin-links',
    'outline-form',
    'outline-modal',
    'outline-alert',
    'outline-grid',
    'outline-styled-text',
    'outline-breadcrumbs',
    'outline-heading',
    'outline-tabs',
    'outline-button',
    'outline-icon',
    'outline-video-vimeo',
    'outline-button-group',
    'outline-image',
    'outline-video-youtube',
    'outline-card',
    'outline-image-slider',
    'outline-code-block',
    'outline-include',
  ],
};
