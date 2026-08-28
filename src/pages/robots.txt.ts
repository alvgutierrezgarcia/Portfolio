import type { APIRoute } from 'astro';

// robots.txt generado dinámicamente para que la URL del sitemap siempre
// coincida con `site` en astro.config.mjs.
const body = (site: URL | undefined) => `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site ?? 'https://alvaro.dev').href}
`;

export const GET: APIRoute = ({ site }) =>
  new Response(body(site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
