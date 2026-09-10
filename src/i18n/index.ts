import type { Locale } from './types';
import en from './en';
import id from './id';

export const content: Record<Locale, typeof en> = { en, id };
export type { Locale } from './types';

/** Path of the same page in the other locale. */
export function altPath(locale: Locale, path: string): string {
  if (locale === 'en') return `/id${path === '/' ? '/' : path}`;
  return path === '/id' || path === '/id/' ? '/' : path.replace(/^\/id/, '');
}

/** Localized href for a site page. */
export function href(locale: Locale, page: 'services' | 'work' | 'about' | 'contact' | 'index'): string {
  const base = page === 'index' ? '/' : `/${page}`;
  return locale === 'en' ? base : `/id${base}`;
}
