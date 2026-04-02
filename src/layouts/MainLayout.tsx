import { AppBackground } from '@/components/AppBackground'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation()

  return (
    <>
      <AppBackground />
      <a href="#main-content" className="skip-link">
        {t('a11y.skipToContent')}
      </a>
      <Navbar />
      <main id="main-content" className="relative z-0">
        {children}
      </main>
      <Footer />
    </>
  )
}
