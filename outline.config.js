module.exports = {
  css: {
    global: [
      {
        src: 'src/shared.css',
        dest: 'dist/shared.css',
      },
      {
        src: 'src/.storybook/storybook.css',
        dest: 'dist/storybook.css',
      },
    ],
    fouc: {
      enabled: true,
      dest: 'dist/fouc.css',
    },
  },
  color: {
    sets: ['primary', 'secondary', 'tertiary', 'neutral', 'demo'],
  },
  youtube: {
    // Replace with the YouTube id of any video to replace the
    // default video in any storybook component.
    defaultVideo: 'xiqgG8HUZXE',
  },
};
