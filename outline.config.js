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
  icons: {
    libraries: {
      bootstrap: true,
      fontawesome: true,
      boxicons: true,
      lucide: true,
      heroicons: true,
      iconoir: true,
      ionicons: true,
      material: true,
      jam: true,
    },
    defaults: {
      library: 'bootstrap',
      size: '16px',
      icon: 'chevron-right',
    },
  },
  youtube: {
    // Replace with the YouTube id of any video to replace the
    // default video in any storybook component.
    defaultVideo: 'xiqgG8HUZXE',
  },
  vimeo: {
    // Replace with the Vimeo id of any video to replace the
    // default video in any storybook component.
    defaultVideo: '432639001',
  },
  // Exclude stories by adding the directory they can be found in
  // ex ['outline-button'] this excludes any story in this directory
  excludedStories: [],
  // @see https://splidejs.com/guides/options
  // @todo: Ensure this config is utilized.
  splide: {
    keyboard: false,
    arrows: true,
  },
};
