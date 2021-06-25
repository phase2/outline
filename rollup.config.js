import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multi from '@rollup/plugin-multi-entry';
import typescript from 'rollup-plugin-typescript2';

export default {
  // Output all components to a single exported file.
  input: 'src/**/*[!(stories|lit)].ts{?,x}',
  output: [
    {
      // Modern bundle.
      file: 'dist/outline.js',
      format: 'esm',
    },
    {
      // Legacy bundle.
      file: 'dist/outline-legacy.js',
      format: 'cjs',
    },
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
  ],
};
