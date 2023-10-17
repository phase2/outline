import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Outline Documentation',
      social: {
        github: 'https://github.com/phase2/outline',
      },
      sidebar: [
        {
          label: 'Developer Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Product Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
    }),
  ],
});
