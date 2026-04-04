import { Analytics } from '@vercel/analytics/react'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { ReactLenis } from 'lenis/react'

import { IntroGateProvider } from '@/contexts/IntroGateProvider'
import { useIntroGate } from '@/hooks/useIntroGate'
import { MainLayout } from '@/layouts/MainLayout'
import { AppProviders } from '@/providers/AppProviders'
import { HeroSection } from '@/sections/HeroSection'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useAppStore } from '@/store/useAppStore'

const ProjectsSection = lazy(async () => ({
  default: (await import('@/sections/ProjectsSection')).ProjectsSection,
}))
const ExperienceSection = lazy(async () => ({
  default: (await import('@/sections/ExperienceSection')).ExperienceSection,
}))
const StackSection = lazy(async () => ({
  default: (await import('@/sections/StackSection')).StackSection,
}))
const ContactSection = lazy(async () => ({
  default: (await import('@/sections/ContactSection')).ContactSection,
}))

function SectionFallback() {
  return (
    <div className="text-fg-muted py-20 text-center font-mono text-sm">
      …
    </div>
  )
}

function AppShell() {
  const locale = useAppStore((s) => s.locale)
  const { introComplete } = useIntroGate()

  return (
    <MainLayout>
      <HeroSection key={locale} />
      {introComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
            <ExperienceSection />
            <StackSection />
            <ContactSection />
          </Suspense>
        </motion.div>
      ) : null}
    </MainLayout>
  )
}

export default function App() {
  const reducedMotion = useReducedMotion()

  return (
    <AppProviders>
      <IntroGateProvider reducedMotion={reducedMotion}>
        {reducedMotion ? (
          <AppShell />
        ) : (
          <ReactLenis
            root
            options={{
              autoRaf: true,
              anchors: { offset: -72 },
            }}
          >
            <AppShell />
          </ReactLenis>
        )}
      </IntroGateProvider>
      <Analytics />
    </AppProviders>
  )
}
