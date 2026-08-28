# Portfolio — Álvaro Gutiérrez García

Portfolio personal (one-page) construido con **Astro + TypeScript**. Tema oscuro,
técnico, con movimiento sutil. Prioridad: **rendimiento y SEO**.

**Lighthouse** (build de producción): Escritorio 100/100/100/100 · Móvil 98/100/100/100.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo → http://localhost:4321
npm run build    # build de producción → dist/
npm run preview  # servir el build localmente
```

## ⚠️ Antes de desplegar

1. **URL del sitio** — en [`astro.config.mjs`](astro.config.mjs), cambia `site` por tu
   dominio final (o por la URL `*.vercel.app` provisional). De esto dependen el
   **sitemap**, las **URLs canónicas** y las **etiquetas Open Graph**.
2. **Formulario de contacto** — pega tu *Access Key* de [Web3Forms](https://web3forms.com)
   en `WEB3FORMS_ACCESS_KEY` dentro de [`src/components/Contact.astro`](src/components/Contact.astro).

## Despliegue gratuito en Vercel (recomendado)

### 1. Subir el código a GitHub

```bash
git init
git add -A
git commit -m "Portfolio inicial"
git branch -M main
```

Crea un repositorio vacío en <https://github.com/new> (p. ej. `portfolio`, sin README),
y enlázalo y sube:

```bash
git remote add origin https://github.com/alvgutierrezgarcia/portfolio.git
git push -u origin main
```

### 2. Importar en Vercel

1. Entra en <https://vercel.com> e inicia sesión **con GitHub** (plan Hobby, gratis).
2. **Add New… → Project** e **Import** el repositorio `portfolio`.
3. Vercel detecta Astro automáticamente (Framework: *Astro*, Build: `astro build`,
   Output: `dist`). No cambies nada.
4. **Deploy**. En ~1 min tendrás una URL `https://portfolio-xxxx.vercel.app`.

Cada `git push` a `main` vuelve a desplegar solo.

> **Alternativa (Cloudflare Pages):** <https://dash.cloudflare.com> → Workers & Pages →
> Create → Pages → Connect to Git → elige el repo. Build command `npm run build`,
> output `dist`. Mismo resultado.

## Conectar un dominio propio (cuando lo compres)

1. Compra el dominio (Namecheap, Porkbun, Cloudflare, IONOS…).
2. En Vercel: **Project → Settings → Domains → Add**, escribe tu dominio
   (`tudominio.com`) y añade también `www.tudominio.com`.
3. Vercel te dará los registros DNS a crear en tu proveedor de dominio:
   - Dominio raíz `tudominio.com` → registro **A** a `76.76.21.21`.
   - `www` → registro **CNAME** a `cname.vercel-dns.com`.
   (O, si tu proveedor lo permite, cambia los *nameservers* a los de Vercel y se
   configura solo.)
4. Espera a la propagación DNS (minutos, hasta 24-48 h). El **HTTPS** se emite solo.
5. **Actualiza `site`** en `astro.config.mjs` a `https://tudominio.com`, haz commit y
   push: el sitemap y las metaetiquetas pasarán a usar el dominio real.

## Estructura

```
public/            estáticos (favicon, iconos, OG, CV, certificado, previews)
src/
  assets/          imágenes optimizadas por Astro (<Image>)
  components/      Hero, About, Experience, Technologies, Projects, Contact, Navbar, Footer
  data/            contact.ts, projects.ts
  layouts/         Layout.astro (SEO, JSON-LD, tema, scripts)
  pages/           index.astro, robots.txt.ts
  styles/          global.css (sistema de diseño)
```
