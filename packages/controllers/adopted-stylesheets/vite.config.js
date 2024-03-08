import { defineConfig } from 'vite';

export default defineConfig({
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
