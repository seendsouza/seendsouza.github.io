import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc(), sitemap()]
});