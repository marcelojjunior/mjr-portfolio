// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

import { SITE_URL, LOCALES, DEFAULT_LOCALE } from './src/config/site.ts'

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    react(),
    mdx(),
    sitemap({ i18n: { defaultLocale: DEFAULT_LOCALE, locales: { pt: 'pt-BR', en: 'en' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
})
