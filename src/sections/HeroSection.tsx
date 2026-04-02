import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BlinkingCaret } from '@/components/BlinkingCaret'
import { TerminalBlock } from '@/components/TerminalBlock'
import { SECTION_IDS } from '@/constants/sections'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

export function HeroSection() {
  const { t } = useTranslation()
  const scrollTo = useScrollToSection()
  const reduced = useReducedMotion()
  const fullOutput = t('hero.terminalOutput')
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (reduced) return
    let i = 0
    let timeoutId = 0
    let cancelled = false
    const tick = () => {
      if (cancelled) return
      i += 1
      setTyped(fullOutput.slice(0, i))
      if (i < fullOutput.length) {
        timeoutId = window.setTimeout(tick, 28)
      }
    }
    const startId = window.setTimeout(tick, 400)
    return () => {
      cancelled = true
      window.clearTimeout(startId)
      window.clearTimeout(timeoutId)
    }
  }, [fullOutput, reduced])

  const lineOutput = reduced ? fullOutput : typed

  return (
    <section
      id={SECTION_IDS.hero}
      className="scroll-mt-24 pt-10 pb-section md:pt-16"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={staggerItem}>
          <TerminalBlock
            className="mb-8 max-w-xl"
            lines={[
              { prefix: '$', content: ` ${t('hero.terminalLine')}` },
              { prefix: '>', content: lineOutput, muted: !lineOutput },
            ]}
          />
          {!reduced && typed.length < fullOutput.length ? (
            <span className="sr-only" aria-live="polite">
              {typed}
            </span>
          ) : null}
        </motion.div>

        <motion.div variants={staggerItem} className="mb-6">
          <Badge>{t('hero.badge')}</Badge>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={staggerItem}
          className="text-fg max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
        >
          {t('hero.headline')}{' '}
          <span className="text-accent">{t('hero.name')}</span>
          <BlinkingCaret className="md:ml-1" />
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-accent mt-4 font-mono text-sm md:text-base"
        >
          {t('hero.roleLine')}
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="text-fg-muted mt-6 max-w-2xl text-sm leading-relaxed md:text-base"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.projects)}
          >
            {t('hero.ctaProjects')}
          </Button>
          <Button variant="outline" href="/cv.pdf" download>
            {t('hero.ctaCv')}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
