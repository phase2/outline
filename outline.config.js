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
};
