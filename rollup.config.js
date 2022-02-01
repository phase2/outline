import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multi from '@rollup/plugin-multi-entry';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-svg';
const outline = require('./outline.config');

export default {
  // Output all components to a single exported file.
  input: {
    include: ['src/components/**/*.ts'],
    exclude: [
      'src/components/**/*.stories.ts',
      'src/components/**/*.css.lit.ts',
      'src/components/**/*.test.ts',
      'src/components/examples/**/*',
    ],
  },
  output: [
    {
      // Modern bundle.
      file: `{$outline.destBasePath}/outline.js`,
      format: 'esm',
    },
    // {
    //   // Legacy bundle.
    //   file: `{$outline.destBasePath}/outline-legacy.js`,
    //   format: 'cjs',
    // },
  ],
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ 'Reflect.decorate': 'undefined', 'preventAssignment': true }),
    resolve(),
    typescript(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
    multi(),
    svg(),
  ],
};
