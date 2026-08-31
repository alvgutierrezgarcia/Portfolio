// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto a tu dominio final cuando lo tengas: es la base para el
  // sitemap, las URLs canónicas y las etiquetas Open Graph.
  site: 'https://alvaro-gutierrez-garcia-portfolio.vercel.app/',
  // Inglés por defecto en `/` (sin prefijo), español en `/es/`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    // Con `i18n`, el sitemap añade los enlaces alternate/hreflang entre idiomas.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
  // Minimiza el HTML generado (prioridad: rendimiento).
  compressHTML: true,
  build: {
    // CSS en línea cuando el archivo es pequeño: menos peticiones en el primer pintado.
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
