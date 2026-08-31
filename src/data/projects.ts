// ============================================================
// Proyectos del portfolio (bilingüe).
// Para añadir uno nuevo: duplica un objeto del array `en` y su equivalente
// en `es`. No hace falta tocar HTML — la tarjeta se genera sola en
// Projects.astro. Los campos que no dependen del idioma (tags, image, href)
// se repiten en ambos para mantener cada entrada legible de un vistazo.
// ============================================================

import type { Lang } from '../i18n/ui';

export type Project = {
  /** Nombre del proyecto. */
  title: string;
  /** Descripción corta (1-3 frases). */
  description: string;
  /** Etiquetas de stack (se muestran como pills). */
  tags: string[];
  /**
   * Ruta a la imagen de preview en /public
   * (p. ej. '/proyectos/gloouds.webp'). Déjala vacía para mostrar un marcador.
   */
  image?: string;
  /** URL externa. Omítela si el proyecto no tiene enlace público. */
  href?: string;
  /** Texto del enlace (por defecto, el genérico "Ver proyecto" del idioma). */
  linkLabel?: string;
  /** Etiqueta de contexto sobre la imagen (p. ej. 'TFM', 'Freelance'). */
  badge?: string;
  /** Nota que sustituye al enlace cuando el proyecto no es público. */
  note?: string;
};

const en: Project[] = [
  {
    title: 'Gloouds',
    description:
      "Football scouting platform, built as my Master's thesis. It answers questions about player data in natural language through a 'Parameter Extractor' pattern that replaces text-to-SQL for security reasons, backed by an LLM.",
    tags: ['Python', 'LLMs', 'SQL', 'Machine Learning'],
    image: '/proyectos/gloouds-certificado.webp',
    badge: 'Thesis',
    // La app es privada; el enlace abre el certificado de reconocimiento del TFM.
    href: '/certificado-tfm-gloouds.pdf',
    linkLabel: 'View certificate',
  },
  {
    title: 'Beta Center',
    description:
      'Premium landing page for a boutique sports centre in Córdoba (freelance commission). Built with React, TypeScript and Vite on TanStack Start, with Tailwind, CRM integration and deployment on Vercel.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://www.betacenter.es/',
    linkLabel: 'Visit site',
    badge: 'Freelance',
    image: '/proyectos/beta-center.webp',
  },
  {
    title: 'CineMatch',
    description:
      'A Tinder-style app for deciding what to watch without losing half an hour to the choice: swipe film and series cards right (watch), left (skip) or up (already seen, saved to your catalogue). Works as a couple or in party mode for several people, and uses the IMDb API for the catalogue and for where to stream each title.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'IMDb API', 'Vercel'],
    href: 'https://cine-match-chi.vercel.app/',
    linkLabel: 'Visit site',
    badge: 'In progress',
    image: '/proyectos/cinematch.webp',
  },
  {
    title: 'License Plate Tracker',
    description:
      'Web app for a challenge among friends: hunting licence plates in photos. Built with Supabase and Vercel.',
    tags: ['Supabase', 'Vercel', 'JavaScript'],
    href: 'https://reto-matriculas.vercel.app/',
    linkLabel: 'View project',
    badge: 'Personal',
    // Captura con las fotos difuminadas (privacidad: la app muestra caras de amigos).
    image: '/proyectos/license-plate-tracker.webp',
  },
];

const es: Project[] = [
  {
    title: 'Gloouds',
    description:
      "Plataforma de scouting de futbolistas, desarrollada como mi Trabajo Fin de Máster. Permite consultar datos de jugadores en lenguaje natural mediante un patrón 'Parameter Extractor' que sustituye al text-to-SQL por motivos de seguridad, apoyándose en un LLM.",
    tags: ['Python', 'LLMs', 'SQL', 'Machine Learning'],
    image: '/proyectos/gloouds-certificado.webp',
    badge: 'TFM',
    href: '/certificado-tfm-gloouds.pdf',
    linkLabel: 'Ver certificado',
  },
  {
    title: 'Beta Center',
    description:
      'Landing page premium para un centro deportivo boutique en Córdoba (encargo freelance). Construida con React, TypeScript y Vite sobre TanStack Start, con Tailwind, integración con CRM y despliegue en Vercel.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://www.betacenter.es/',
    linkLabel: 'Visitar sitio',
    badge: 'Freelance',
    image: '/proyectos/beta-center.webp',
  },
  {
    title: 'CineMatch',
    description:
      'App al estilo Tinder para decidir qué ver sin perder media hora eligiendo: deslizas tarjetas de películas y series a la derecha (ver), izquierda (descartar) o arriba (ya vista, se guarda en tu catálogo). Funciona en pareja o en modo fiesta para varias personas, y usa la API de IMDb para el catálogo y para saber dónde ver cada título.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'IMDb API', 'Vercel'],
    href: 'https://cine-match-chi.vercel.app/',
    linkLabel: 'Visitar sitio',
    badge: 'En desarrollo',
    image: '/proyectos/cinematch.webp',
  },
  {
    title: 'Rastreador de matrículas',
    description:
      'Aplicación web para un reto entre amigos de cazar matrículas en foto. Construida con Supabase y Vercel.',
    tags: ['Supabase', 'Vercel', 'JavaScript'],
    href: 'https://reto-matriculas.vercel.app/',
    linkLabel: 'Ver proyecto',
    badge: 'Personal',
    image: '/proyectos/license-plate-tracker.webp',
  },
];

const byLang: Record<Lang, Project[]> = { en, es };

export function getProjects(lang: Lang): Project[] {
  return byLang[lang];
}
