import { AppBackground } from '@/components/AppBackground'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useIntroGate } from '@/hooks/useIntroGate'
import { useTranslation } from '@/hooks/useTranslation'

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation()
  const { introComplete } = useIntroGate()

  return (
    <>
      <AppBackground />
      <a href="#main-content" className="skip-link">
        {t('a11y.skipToContent')}
      </a>
      <Navbar />
      <main
        id="main-content"
        className="relative z-0"
        aria-busy={!introComplete}
      >
        {children}
      </main>
      {introComplete ? <Footer /> : null}
    </>
  )
}
