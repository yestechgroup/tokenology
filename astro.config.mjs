import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tokenology-mu.vercel.app/docs/introduction",
  base: '/',
  integrations: [tailwind(), sitemap(), mdx()]
});