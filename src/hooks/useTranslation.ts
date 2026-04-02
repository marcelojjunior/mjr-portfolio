import { translate, translateList, type Locale } from '@/i18n'
import { useAppStore } from '@/store/useAppStore'

export function useTranslation() {
  const locale = useAppStore((s) => s.locale)

  return {
    locale,
    t: (path: string) => translate(locale, path),
    tList: (path: string) => translateList(locale, path),
  }
}

export type { Locale }
