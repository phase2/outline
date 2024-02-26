import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
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
