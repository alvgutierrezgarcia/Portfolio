// ============================================================
// Helpers de i18n.
// El inglés es el idioma por defecto y vive en `/` (sin prefijo).
// El español vive en `/es/`.
// ============================================================

import { defaultLang, ui, type Lang, type UI } from './ui';

/** Devuelve el diccionario completo del idioma indicado. */
export function useTranslations(lang: Lang): UI {
  return ui[lang] as UI;
}

/**
 * Prefijo de ruta del idioma: '' para inglés (por defecto), '/es' para español.
 * Úsalo para construir enlaces internos entre idiomas.
 */
export function localePath(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** URL raíz de la home de ese idioma ('/' o '/es/'). */
export function homeUrl(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** El otro idioma (solo hay dos, así que es un simple intercambio). */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/**
 * Ancla de una sección en el idioma dado, ya con '#'.
 * p. ej. sectionHref('en', 'about') → '#about' · sectionHref('es','about') → '#sobre-mi'
 */
export function sectionHref(lang: Lang, key: keyof UI['anchors']): string {
  return `#${ui[lang].anchors[key]}`;
}

/** Id (sin '#') de una sección en el idioma dado. */
export function sectionId(lang: Lang, key: keyof UI['anchors']): string {
  return ui[lang].anchors[key];
}
