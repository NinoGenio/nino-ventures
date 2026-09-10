// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// nino.id — canonical domain (ninoventures.com redirects here).
// English is the default locale at the root; Bahasa Indonesia lives under /id/.
export default defineConfig({
  site: 'https://nino.id',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } } })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
