# CLAUDE.md — Portfolio personal de Álvaro

Contexto del proyecto para tenerlo siempre a mano al trabajar en este repositorio.

## Qué es

Portfolio personal (one-page) de **Álvaro**, desarrollador de software en **ICCA
(Córdoba)**. Escaparate profesional para mostrar quién es, su stack y sus proyectos.

## Perfil profesional

- Desarrollador de software en **ICCA — Córdoba (España)**.
- Especializado en:
  - **Desarrollo con IA** (IA aplicada al proceso de desarrollo).
  - **.NET** (backend / aplicaciones).
  - **Angular** (frontend).
  - **IA aplicada al deporte**.

## Estética y principios

- **Tema oscuro por defecto** (fondo `~#0b0d10`, superficies un punto más claras),
  con **tema claro** y un **toggle 🌙/☀️** que recuerda la preferencia (localStorage).
- Look **oscuro y técnico**, con **movimiento sutil** (transiciones suaves, nada
  estridente). Respetar siempre `prefers-reduced-motion`.
- Color de **acento verde-lima** (`--accent`, ~`#a3e635`) para enlaces, botones y detalles.
- **Prioridad absoluta: RENDIMIENTO y SEO.** Ante cualquier decisión, favorecer lo
  que sea más rápido y más indexable (menos JS, imágenes optimizadas, HTML semántico,
  metadatos completos).

## Stack técnico

- **Astro** + **TypeScript** (config `strict`). Sin CMS.
- **Sitemap** con `@astrojs/sitemap`.
- **Tipografías auto-alojadas** (mejor perf, sin CDN externo):
  - Titulares: **Space Grotesk** (`@fontsource-variable/space-grotesk`).
  - Cuerpo: **Inter** (`@fontsource-variable/inter`).
- JS mínimo (solo el necesario para el toggle de tema y el menú móvil).

## Convenciones

- **One-page** con secciones ancladas y scroll suave:
  `#inicio`, `#sobre-mi`, `#tecnologias`, `#proyectos`, `#contacto`.
- **Sistema de diseño** centralizado en `src/styles/global.css` mediante **variables CSS**
  (colores, tipografía, espaciado `--space-*`, radios `--radius-*`, sombras `--shadow-*`,
  `--transition`). Usar siempre los tokens; no hardcodear valores.
- Temas vía atributo `data-theme` en `<html>` (`"light"` / ausente = oscuro). El script
  anti-FOUC en el `<head>` del Layout fija el tema antes del primer pintado.
- Componentes `.astro` reutilizables en `src/components/`; el chrome común
  (nav + footer) vive en `src/layouts/Layout.astro`.

## Estructura de carpetas

```
portfolio/
├── CLAUDE.md            ← este archivo
├── astro.config.mjs     ← site, sitemap, compressHTML
├── tsconfig.json        ← preset strict de Astro
├── public/              ← estáticos servidos tal cual (favicon, etc.)
└── src/
    ├── layouts/Layout.astro       ← <head> SEO, tema, nav + footer, <slot/>
    ├── components/
    │   ├── Navbar.astro            ← nav sticky, hamburguesa móvil, toggle tema
    │   └── Footer.astro            ← © + cargo + redes (placeholder)
    ├── styles/global.css           ← sistema de diseño (tokens) + reset
    └── pages/index.astro           ← página principal (secciones se añaden aquí)
```

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:4321)
npm run build   # build de producción a dist/
npm run preview # servir el build localmente
```

## Estado actual

**Completo.** Todas las secciones montadas como componentes en `src/pages/index.astro`:
Hero, Sobre mí (con foto vía `<Image>`), Experiencia (timeline), Tecnologías, Proyectos
(datos en `src/data/projects.ts`) y Contacto (formulario con Web3Forms). Movimiento:
reveal on scroll + scroll-spy + entrada del Hero, todo con `prefers-reduced-motion`.
SEO completo (meta, OG con `public/og.png`, Twitter, JSON-LD Person, sitemap, `robots.txt`
dinámico, iconos + manifest). Lighthouse: escritorio 100/100/100/100, móvil 98/100/100/100.

Pendiente por parte de Álvaro antes de publicar: fijar `site` en `astro.config.mjs` al
dominio real y pegar la Access Key de Web3Forms en `src/components/Contact.astro`.
Guía de despliegue en `README.md`.
