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
- **i18n** con el enrutado nativo de Astro: **inglés por defecto en `/`** (sin
  prefijo) y **español en `/es/`**. Sin JS: el cambio de idioma es un enlace normal.
- **Sitemap** con `@astrojs/sitemap` (con `i18n`, genera los `hreflang` alternates).
- **Tipografías auto-alojadas** (mejor perf, sin CDN externo):
  - Titulares: **Space Grotesk** (`@fontsource-variable/space-grotesk`).
  - Cuerpo: **Inter** (`@fontsource-variable/inter`).
- JS mínimo (solo el necesario para el toggle de tema y el menú móvil).

## Convenciones

- **Todos los textos visibles viven en `src/i18n/ui.ts`** (diccionario `en` + `es`).
  Nunca escribas texto suelto en un componente: añádelo al diccionario y consúmelo
  con `useTranslations(lang)`. El inglés define la forma y TypeScript obliga a que
  el español la cumpla. Los textos que necesita el JS de cliente (validación del
  formulario, etiquetas del menú) se pasan por atributos `data-*`.
- **Cada componente recibe una prop `lang`** y saca de ahí sus textos y anclajes.
- **One-page** con secciones ancladas y scroll suave. Los slugs se traducen por
  idioma (ver `anchors` en `ui.ts`): `#home`/`#inicio`, `#about`/`#sobre-mi`,
  `#experience`/`#experiencia`, `#tech`/`#tecnologias`, `#projects`/`#proyectos`,
  `#contact`/`#contacto`. Úsalos con `sectionId()` / `sectionHref()`.
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
├── astro.config.mjs     ← site, i18n, sitemap, compressHTML
├── tsconfig.json        ← preset strict de Astro
├── public/              ← estáticos servidos tal cual (favicon, CV, og.png…)
└── src/
    ├── i18n/
    │   ├── ui.ts                   ← TODOS los textos (en + es) y slugs de anclaje
    │   └── utils.ts                ← useTranslations, sectionId/Href, homeUrl…
    ├── layouts/Layout.astro       ← <head> SEO + hreflang, tema, nav + footer, <slot/>
    ├── components/                 ← Hero, About, Experience, Technologies,
    │   │                             Projects, Contact (todos reciben `lang`)
    │   ├── Navbar.astro            ← nav sticky, hamburguesa, toggle tema + idioma
    │   └── Footer.astro            ← © + cargo + redes
    ├── data/projects.ts            ← proyectos por idioma (getProjects(lang))
    ├── styles/global.css           ← sistema de diseño (tokens) + reset
    └── pages/
        ├── index.astro             ← home en inglés (idioma por defecto, `/`)
        └── es/index.astro          ← home en español (`/es/`)
```

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:4321)
npm run build   # build de producción a dist/
npm run preview # servir el build localmente
```

## Estado actual

**Completo y publicado** en Vercel (`site` y Access Key de Web3Forms ya configurados).
Todas las secciones montadas como componentes: Hero, Sobre mí (con foto vía `<Image>`),
Experiencia (timeline), Tecnologías, Proyectos (datos en `src/data/projects.ts`) y
Contacto (formulario con Web3Forms). Movimiento: reveal on scroll + scroll-spy + entrada
del Hero, todo con `prefers-reduced-motion`. SEO completo (meta, OG con `public/og.png`,
Twitter, JSON-LD Person, sitemap con hreflang, `robots.txt` dinámico, iconos + manifest).

**Bilingüe** desde el rediseño de contenido: inglés en `/` y español en `/es/`, con
botón de cambio de idioma en la nav (junto al toggle de tema).

Pendientes conocidos:
- El **CV en PDF solo existe en español**; el botón "Download CV" de la versión
  inglesa apunta a ese mismo archivo.
- `public/og.png` es único para ambos idiomas.
- Guía de despliegue en `README.md`.
