import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: '20ujrfez',
      dataset: 'production',
      useCdn: true,
    }),
  ],
  output: 'server',
  adapter: vercel(),
});
