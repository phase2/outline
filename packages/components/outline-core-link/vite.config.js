import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNested from 'postcss-nested';
import postcssNestedImport from 'postcss-nested-import';
import postcssDiscardComments from 'postcss-discard-comments';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        /**
         * @see https://www.npmjs.com/package/postcss-preset-env
         * Applies a set of CSS transformations based on the latest CSS specifications.
         */
        postcssPresetEnv({ stage: 1 }),
        /**
         * @see https://www.npmjs.com/package/postcss-nested
         * Allows you to nest style rules inside each other, similar to Sass and Less.
         */
        postcssNested(),
        /**
         * @see https://www.npmjs.com/package/postcss-nested-import
         * Enables nested @import statements in CSS.
         */
        postcssNestedImport(),
        /**
         * @see https://www.npmjs.com/package/postcss-discard-comments
         * Discards comments in your CSS files during the PostCSS process.
         */
        postcssDiscardComments(),
      ],
    },
  },
  build: {
    lib: {
      formats: ['es'],
      entry: 'index.ts',
      fileName: format => `index.js`,
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
