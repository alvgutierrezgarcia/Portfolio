// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto a tu dominio final cuando lo tengas: es la base para el
  // sitemap, las URLs canónicas y las etiquetas Open Graph.
  site: 'https://alvaro.dev',
  integrations: [sitemap()],
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
