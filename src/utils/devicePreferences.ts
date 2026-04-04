import type { Locale } from '@/i18n'

/**
 * System color scheme when available; otherwise dark.
 */
export function getDeviceTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  if (prefersDark) return 'dark'
  if (prefersLight) return 'light'
  return 'dark'
}

/**
 * Browser locale when it is Portuguese; otherwise English.
 */
export function getDeviceLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }
  const raw =
    (navigator.languages && navigator.languages[0]) || navigator.language || ''
  const primary = raw.split('-')[0]?.toLowerCase() ?? ''
  return primary === 'pt' ? 'pt-BR' : 'en'
}
