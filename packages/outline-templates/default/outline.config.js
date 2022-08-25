/* Set a different path for compiled assets
 * if you change this value you must also change
 * "outDir" in your tsconfig.json
 */
const destBasePath = 'dist';
module.exports = {
  destBasePath,
  components: {
    // This should include an array of directories under
    // src/components/ that contain component files.
    // Currently used only in `js.output.lazy` mode.
    bundle: ['outline', 'utility'],
  },
  assets: {
    dir: ['src/assets'],
    sync: ['dist', 'src/.storybook/static/dist'],
  },
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px',
    xxxl: '2160px',
  },
  css: {
    global: [
      {
        src: 'src/shared.css',
        dest: `${destBasePath}/shared.css`,
      },
      {
        src: 'src/tailwind.css',
        dest: `${destBasePath}/tailwind.css`,
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
  js: {
    output: {
      // @see src/outline-lazy.ts
      // @status experimental
      lazy: true,
      // Export full library to `outline.js`.
      // @status stable
      full: true,
      // @see src/data.ts
      // @status stable
      data: false,
    },
  },
  // @todo: Importing this into swatch-sets causes issues.
  color: {
    sets: ['outline', 'primary', 'secondary', 'tertiary', 'neutral'],
  },
  icons: {
    libraries: {
      bootstrap: true,
      boxicons: true,
      fontawesome: true,
      heroicons: true,
      iconoir: true,
      ionicons: true,
      jam: true,
      lucide: true,
      material: true,
      remix: true,
      unicons: true,
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
  // Include stories not in the components directory by adding the directory they can be found in
  includedStories: [
    '../../node_modules/@phase2/outline-grid/dist/src/outline-grid.stories.js',
    '../../node_modules/@phase2/outline-link/dist/src/outline-link.stories.js',
    '../../node_modules/@phase2/outline-icon/dist/src/outline-icon.stories.js',
    '../../node_modules/@phase2/outline-alert/dist/src/outline-alert.stories.js',
    '../../node_modules/@phase2/outline-code-block/dist/src/outline-code-block.stories.mdx',
  ],
  // @see https://splidejs.com/guides/options
  // @todo: Ensure this config is utilized.
  splide: {
    keyboard: false,
    arrows: true,
  },
};
