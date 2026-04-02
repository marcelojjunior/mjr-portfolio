import { Analytics } from '@vercel/analytics/react'
import { lazy, Suspense } from 'react'
import { ReactLenis } from 'lenis/react'

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
  return (
    <MainLayout>
      <HeroSection key={locale} />
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
      </Suspense>
    </MainLayout>
  )
}

export default function App() {
  const reducedMotion = useReducedMotion()

  return (
    <AppProviders>
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
      <Analytics />
    </AppProviders>
  )
}
