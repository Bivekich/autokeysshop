import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: '20ujrfez',
    dataset: 'production',
    useCdn: true
  })],
  output: "server",
  adapter: netlify()
});