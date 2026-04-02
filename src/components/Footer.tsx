import { useTranslation } from '@/hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-border text-fg-muted border-t py-8 text-center text-xs">
      <p>© {new Date().getFullYear()} — {t('footer.rights')}</p>
    </footer>
  )
}
