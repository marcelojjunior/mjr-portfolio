import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Locale } from '@/i18n'

export type Theme = 'light' | 'dark'

type AppState = {
  theme: Theme
  locale: Locale
  setTheme: (theme: Theme) => void
  setLocale: (locale: Locale) => void
  toggleTheme: () => void
  toggleLocale: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      locale: 'en',
      setTheme: (theme) => set({ theme }),
      setLocale: (locale) => set({ locale }),
      toggleTheme: () =>
        set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      toggleLocale: () =>
        set({ locale: get().locale === 'en' ? 'pt-BR' : 'en' }),
    }),
    {
      name: 'mjr-portfolio-settings',
      partialize: (s) => ({ theme: s.theme, locale: s.locale }),
    },
  ),
)
