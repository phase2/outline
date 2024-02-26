import { defineConfig } from 'vite';
import baseConfig from '../../../vite.config.js';

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      ...baseConfig.build.lib,
      entry: 'index.ts',
      fileName: format => `outline-core-link.js`,
    },
    rollupOptions: {
      ...baseConfig.build.rollupOptions,
    },
  },
});
