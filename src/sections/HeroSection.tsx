import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { BlinkingCaret } from '@/components/BlinkingCaret'
import { TerminalBlock } from '@/components/TerminalBlock'
import { SECTION_IDS } from '@/constants/sections'
import { useIntroGate } from '@/hooks/useIntroGate'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

const INTRO_DELAY_MS = 0
const TYPE_OUTPUT_MS = 62
/** After the `>` output is fully typed: brief pause, then unlock the page. */
const PAUSE_AFTER_OUTPUT_MS = 260
const PAUSE_BEFORE_REVEAL_MS = 220

export function HeroSection() {
  const { t } = useTranslation()
  const scrollTo = useScrollToSection()
  const { introComplete, completeIntro } = useIntroGate()

  const cmdText = ` ${t('hero.terminalLine')}`
  const outText = t('hero.terminalOutput')

  const [firstLineReady, setFirstLineReady] = useState(false)
  const [outTyped, setOutTyped] = useState('')
  const timeoutIds = useRef<number[]>([])

  const clearTimers = () => {
    timeoutIds.current.forEach((id) => window.clearTimeout(id))
    timeoutIds.current = []
  }

  const schedule = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms)
    timeoutIds.current.push(id)
    return id
  }

  useEffect(() => {
    if (introComplete) {
      return
    }

    let cancelled = false

    schedule(() => {
      if (cancelled) return
      setFirstLineReady(true)
      let i = 0
      const tickOut = () => {
        if (cancelled) return
        i += 1
        setOutTyped(outText.slice(0, i))
        if (i < outText.length) {
          schedule(tickOut, TYPE_OUTPUT_MS)
        } else {
          schedule(() => {
            if (cancelled) return
            schedule(() => {
              if (cancelled) return
              completeIntro()
            }, PAUSE_BEFORE_REVEAL_MS)
          }, PAUSE_AFTER_OUTPUT_MS)
        }
      }
      tickOut()
    }, INTRO_DELAY_MS)

    return () => {
      cancelled = true
      clearTimers()
    }
  }, [outText, introComplete, completeIntro])

  const firstLineVisible = introComplete || firstLineReady
  const outVisible = introComplete ? outText : outTyped
  const typingOutput =
    !introComplete && firstLineReady && outTyped.length < outText.length

  const lines = firstLineVisible
    ? [
        {
          prefix: '$',
          content: cmdText,
          muted: false,
        },
        {
          prefix: '>',
          content: outVisible,
          muted: !outVisible,
        },
      ]
    : [
        {
          prefix: '$',
          content: '',
          muted: true,
        },
      ]

  return (
    <section
      id={SECTION_IDS.hero}
      className="scroll-mt-24 pt-10 pb-section md:pt-16"
      aria-labelledby={introComplete ? 'hero-heading' : undefined}
      aria-busy={typingOutput}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-xl">
          <TerminalBlock className="w-full" lines={lines} />
          {typingOutput ? (
            <span className="sr-only" aria-live="polite">
              {outVisible}
            </span>
          ) : null}
        </div>

        {introComplete ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={staggerItem}
              className="text-accent mt-4 font-mono text-sm md:text-base"
            >
              {t('hero.roleLine')}
            </motion.p>

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
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
