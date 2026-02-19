// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariadelavera.com',
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: []
});
