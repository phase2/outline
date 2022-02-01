/* Set a different path for compiled assets
 * if you change this value you must also change
 * "outDir" in your tsconfig.json
 */
const destBasePath = 'dist';
module.exports = {
  destBasePath,
  css: {
    global: [
      {
        src: 'src/shared.css',
        dest: `${destBasePath}/shared.css`,
      },
      {
        src: 'src/.storybook/storybook.css',
        dest: `${destBasePath}/storybook.css`,
      },
    ],
    fouc: {
      enabled: true,
      dest: `${destBasePath}/fouc.css`,
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
