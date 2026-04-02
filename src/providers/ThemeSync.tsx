import { useLayoutEffect } from 'react'

import { useAppStore } from '@/store/useAppStore'

export function ThemeSync() {
  const theme = useAppStore((s) => s.theme)
  const locale = useAppStore((s) => s.locale)

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en'
  }, [theme, locale])

  return null
}
