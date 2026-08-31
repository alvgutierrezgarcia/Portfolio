// ============================================================
// Proyectos del portfolio.
// Para añadir uno nuevo: duplica un objeto de este array y edita sus campos.
// No hace falta tocar HTML — la tarjeta se genera sola en Projects.astro.
// ============================================================

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
  /** Texto del enlace (por defecto "Ver proyecto"). */
  linkLabel?: string;
  /** Etiqueta de contexto sobre la imagen (p. ej. 'TFM', 'Freelance'). */
  badge?: string;
  /** Nota que sustituye al enlace cuando el proyecto no es público. */
  note?: string;
};

export const projects: Project[] = [
  {
    title: 'Gloouds',
    description:
      "Plataforma de scouting de futbolistas, desarrollada como mi Trabajo Fin de Máster. Permite consultar datos de jugadores en lenguaje natural mediante un patrón 'Parameter Extractor' que sustituye al text-to-SQL por motivos de seguridad, apoyándose en un LLM.",
    tags: ['Python', 'LLMs', 'SQL', 'Machine Learning'],
    image: '/proyectos/gloouds-certificado.webp',
    badge: 'TFM',
    // La app es privada; el enlace abre el certificado de reconocimiento del TFM.
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
    // Captura con las fotos difuminadas (privacidad: la app muestra caras de amigos).
    image: '/proyectos/license-plate-tracker.webp',
  },
];
