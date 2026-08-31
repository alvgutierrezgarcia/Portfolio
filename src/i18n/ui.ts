// ============================================================
// Diccionario de traducciones (único punto de verdad para los textos).
//
// Idioma por defecto: inglés (sin prefijo, en `/`). Español en `/es/`.
// Para añadir un texto nuevo: añádelo en `en` y TypeScript te obligará
// a traducirlo también en `es` (ver el tipo `UIStrings` más abajo).
// ============================================================

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Códigos para <html lang> y og:locale. */
export const localeMeta: Record<Lang, { htmlLang: string; ogLocale: string }> = {
  en: { htmlLang: 'en', ogLocale: 'en_US' },
  es: { htmlLang: 'es', ogLocale: 'es_ES' },
};

const en = {
  // --- Navegación -------------------------------------------------------
  nav: {
    ariaLabel: 'Main navigation',
    skipToContent: 'Skip to content',
    themeToggleLabel: 'Switch light/dark theme',
    themeToggleTitle: 'Switch theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    /** Texto del botón que lleva al OTRO idioma. */
    langSwitchLabel: 'Español',
    langSwitchAria: 'Ver esta página en español',
    links: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      tech: 'Tech',
      projects: 'Projects',
      contact: 'Contact',
    },
  },

  // --- Anclas de sección (slugs por idioma) -----------------------------
  anchors: {
    home: 'home',
    about: 'about',
    experience: 'experience',
    tech: 'tech',
    projects: 'projects',
    contact: 'contact',
  },

  // --- Hero -------------------------------------------------------------
  hero: {
    badge: 'Available for projects',
    subtitle: 'Software Engineer — Human-in-the-loop AI',
    description:
      'I build software and apply Machine Learning, Computer Vision and LLMs to real problems, with one foot in engineering and the other in sport.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    ctaLinkedin: 'LinkedIn',
  },

  // --- Sobre mí ---------------------------------------------------------
  about: {
    title: 'About',
    photoAlt: 'Álvaro Gutiérrez García, software engineer',
    // HTML de autor (build-time, contenido propio): <strong> resalta términos clave.
    paragraphs: [
      "I'm a product-focused software engineer who cares less about which layer the code lives in and more about whether what we ship actually makes a difference. The problems I work on sit at the intersection of <strong class=\"about__kw\">product</strong>, <strong class=\"about__kw\">design</strong> and <strong class=\"about__kw\">engineering</strong> — what are we solving, for whom, and how do we know it worked?",
      "The way I usually work is by iterating: I'd rather put a small but complete slice of the product in front of real users and learn from their feedback than polish something nobody asked for. That rests on the practices that make shipping fast and safe: <strong class=\"about__kw\">CI/CD</strong>, short feedback loops and <strong class=\"about__kw\">Extreme Programming</strong> habits, like honest tests and small, reversible steps.",
      'More and more of that development happens with AI. I design agent workflows that take an idea to a reviewed PR in less time, letting <strong class="about__kw">LLMs</strong> plan, write and test code — always with a human in the loop before anything ships.',
      "What I won't trade away: <strong class=\"about__kw\">accessibility</strong>, <strong class=\"about__kw\">performance</strong>, tests that tell the truth, and AI that earns its place in a real production codebase.",
    ],
  },

  // --- Experiencia ------------------------------------------------------
  experience: {
    title: 'Experience',
    currentBadge: 'Current',
    milestones: [
      {
        role: 'Software Engineer',
        place: 'ICCA, Córdoba',
        dates: 'July 2024 – Present',
      },
      {
        role: "Master's in Big Data & AI Applied to Sport",
        place: 'Sports Data Campus · Olocip · UCAM',
        dates: '2025',
      },
      {
        role: 'Computer Engineering',
        place: 'University of Córdoba',
        dates: '2020 – 2024',
        note: 'Erasmus — Politechnika Opolska, Opole (Poland) · 2022',
      },
    ],
  },

  // --- Tecnologías ------------------------------------------------------
  tech: {
    title: 'Tech',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      data: 'Data & AI',
      tools: 'Tools',
      practices: 'Practices',
    },
  },

  // --- Proyectos --------------------------------------------------------
  projects: {
    title: 'Projects',
    defaultLinkLabel: 'View project',
    defaultNote: 'Private project',
    previewAlt: (name: string) => `${name} preview`,
  },

  // --- Contacto ---------------------------------------------------------
  contact: {
    title: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send',
    directLead: 'Or reach me directly',
    viewProfile: 'View profile',
    emailSubject: (name: string) => `New message from ${name} — portfolio`,
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter your email.',
      emailInvalid: "That email doesn't look valid.",
      message: 'Please write a message.',
      messageShort: 'Tell me a bit more (10 characters minimum).',
    },
    status: {
      sent: 'Message sent! I’ll get back to you as soon as I can.',
      error:
        'Something went wrong sending your message. Please try again or email me directly.',
      genericFail: 'The message could not be sent.',
    },
  },

  // --- Footer -----------------------------------------------------------
  footer: {
    role: 'Software Engineer · ICCA',
  },

  // --- SEO / <head> -----------------------------------------------------
  meta: {
    title: 'Álvaro Gutiérrez García — Software Engineer (.NET · Angular · AI)',
    description:
      'Software engineer at ICCA (Córdoba). I build with .NET and Angular and apply Machine Learning, Computer Vision and LLMs to real problems, with one foot in engineering and the other in sport.',
    ogImageAlt: 'Álvaro Gutiérrez García — Software Engineer',
    jobTitle: 'Software Engineer',
    knowsAbout: [
      'Artificial Intelligence',
      '.NET',
      'Angular',
      'Machine Learning',
      'Computer Vision',
      'LLMs',
      'AI applied to sport',
    ],
  },
} as const;

/** El inglés define la forma; el español debe cumplirla exactamente. */
type UIStrings = {
  -readonly [K in keyof typeof en]: (typeof en)[K] extends readonly unknown[]
    ? unknown[]
    : (typeof en)[K];
};

const es: UIStrings = {
  nav: {
    ariaLabel: 'Navegación principal',
    skipToContent: 'Saltar al contenido',
    themeToggleLabel: 'Cambiar tema claro/oscuro',
    themeToggleTitle: 'Cambiar tema',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langSwitchLabel: 'English',
    langSwitchAria: 'View this page in English',
    links: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      tech: 'Tecnologías',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
  },

  anchors: {
    home: 'inicio',
    about: 'sobre-mi',
    experience: 'experiencia',
    tech: 'tecnologias',
    projects: 'proyectos',
    contact: 'contacto',
  },

  hero: {
    badge: 'Disponible para proyectos',
    subtitle: 'Desarrollador de software — Human-in-the-loop AI',
    description:
      'Construyo software y aplico Machine Learning, Computer Vision y LLMs a problemas reales, con un pie en la ingeniería y otro en el deporte.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    ctaLinkedin: 'LinkedIn',
  },

  about: {
    title: 'Sobre mí',
    photoAlt: 'Álvaro Gutiérrez García, desarrollador de software',
    paragraphs: [
      'Soy un ingeniero de software centrado en el producto: me importa menos en qué capa vive el código y más si lo que lanzamos marca una diferencia real. Los problemas que abordo están en la intersección entre <strong class="about__kw">producto</strong>, <strong class="about__kw">diseño</strong> e <strong class="about__kw">ingeniería</strong> — qué estamos resolviendo, para quién, y cómo sabemos que ha funcionado.',
      'Mi forma habitual de trabajar es iterar: prefiero poner en manos de usuarios reales una parte pequeña pero completa del producto y aprender de su feedback, antes que pulir algo que nadie ha pedido. Esto se apoya en las prácticas que hacen posible lanzar rápido y con seguridad: <strong class="about__kw">CI/CD</strong>, ciclos de feedback cortos y hábitos de <strong class="about__kw">Programación Extrema</strong>, como pruebas honestas y pasos pequeños y reversibles.',
      'Cada vez más, buena parte de ese desarrollo lo hago con IA. Diseño flujos de trabajo con agentes que llevan una idea hasta un PR revisado en menos tiempo, dejando que los <strong class="about__kw">LLMs</strong> planifiquen, escriban y prueben código — siempre con una persona en el bucle antes de lanzar nada.',
      'Lo que no negocio: <strong class="about__kw">accesibilidad</strong>, <strong class="about__kw">rendimiento</strong>, pruebas que digan la verdad, y una IA que se gane su sitio en código de producción real.',
    ],
  },

  experience: {
    title: 'Experiencia',
    currentBadge: 'Actual',
    milestones: [
      {
        role: 'Desarrollador de software',
        place: 'ICCA, Córdoba',
        dates: 'julio 2024 – Actualidad',
      },
      {
        role: 'Máster en Big Data e IA aplicada al deporte',
        place: 'Sports Data Campus · Olocip · UCAM',
        dates: '2025',
      },
      {
        role: 'Ingeniería Informática',
        place: 'Universidad de Córdoba',
        dates: '2020 – 2024',
        note: 'Erasmus — Politechnika Opolska, Opole (Polonia) · 2022',
      },
    ],
  },

  tech: {
    title: 'Tecnologías',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      data: 'Datos e IA',
      tools: 'Herramientas',
      practices: 'Prácticas',
    },
  },

  projects: {
    title: 'Proyectos',
    defaultLinkLabel: 'Ver proyecto',
    defaultNote: 'Proyecto privado',
    previewAlt: (name: string) => `Vista previa de ${name}`,
  },

  contact: {
    title: 'Contacto',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    submit: 'Enviar',
    directLead: 'O escríbeme directamente',
    viewProfile: 'Ver perfil',
    emailSubject: (name: string) => `Nuevo mensaje de ${name} — portfolio`,
    errors: {
      name: 'Escribe tu nombre.',
      email: 'Escribe tu correo.',
      emailInvalid: 'Ese correo no parece válido.',
      message: 'Escribe un mensaje.',
      messageShort: 'Cuéntame un poco más (mínimo 10 caracteres).',
    },
    status: {
      sent: '¡Mensaje enviado! Te responderé en cuanto pueda.',
      error:
        'Algo ha fallado al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.',
      genericFail: 'No se pudo enviar el mensaje.',
    },
  },

  footer: {
    role: 'Desarrollador de software · ICCA',
  },

  meta: {
    title: 'Álvaro Gutiérrez García — Desarrollador de software (.NET · Angular · IA)',
    description:
      'Desarrollador de software en ICCA (Córdoba). Construyo con .NET y Angular y aplico Machine Learning, Computer Vision y LLMs a problemas reales, con un pie en la ingeniería y otro en el deporte.',
    ogImageAlt: 'Álvaro Gutiérrez García — Desarrollador de software',
    jobTitle: 'Desarrollador de software',
    knowsAbout: [
      'Inteligencia Artificial',
      '.NET',
      'Angular',
      'Machine Learning',
      'Computer Vision',
      'LLMs',
      'IA aplicada al deporte',
    ],
  },
};

export const ui = { en, es } as const;

export type UI = typeof en;
