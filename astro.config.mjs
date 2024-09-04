import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: "20ujrfez",
    dataset: "production",
    useCdn: true
  }), sitemap()],
  output: "server",
  adapter: vercel()
});