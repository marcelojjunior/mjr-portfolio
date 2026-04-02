import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import { SECTION_IDS } from '@/constants/sections'
import { useTranslation } from '@/hooks/useTranslation'
import {
  validateContact,
  type ContactFormState,
} from '@/utils/validateContact'

type Phase = 'idle' | 'sending' | 'done'

export function ContactSection() {
  const { t } = useTranslation()
  const [values, setValues] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({})
  const [phase, setPhase] = useState<Phase>('idle')
  const [lines, setLines] = useState<string[]>([])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const next = validateContact(values)
    const errMap: Partial<Record<keyof ContactFormState, string>> = {}
    if (next.name) errMap.name = t('contact.errors.name')
    if (next.email) errMap.email = t('contact.errors.email')
    if (next.message) errMap.message = t('contact.errors.message')
    setErrors(errMap)
    if (Object.keys(next).length > 0) {
      setLines([
        `${t('contact.terminalErr')}: validation — fix fields above`,
      ])
      return
    }

    setPhase('sending')
    setLines([`$ send --to portfolio --subject "contact"`])

    window.setTimeout(() => {
      setLines((prev) => [...prev, t('contact.sending')])
    }, 400)

    window.setTimeout(() => {
      setLines((prev) => [
        ...prev,
        `${t('contact.terminalOk')}: ${t('contact.success')}`,
      ])
      setPhase('done')
    }, 1400)
  }

  return (
    <SectionReveal id={SECTION_IDS.contact}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <p className="text-fg-muted mb-6 font-mono text-xs md:text-sm">
          {t('contact.prompt')}
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="border-border bg-surface-elevated/70 space-y-4 rounded-lg border p-6"
            noValidate
          >
            <div>
              <label htmlFor="contact-name" className="text-fg-muted text-xs">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) =>
                  setValues((v) => ({ ...v, name: e.target.value }))
                }
                className="border-border bg-surface focus:border-accent focus:ring-ring-focus mt-1 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'err-name' : undefined}
              />
              {errors.name ? (
                <p id="err-name" className="text-accent mt-1 text-xs">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-email" className="text-fg-muted text-xs">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) =>
                  setValues((v) => ({ ...v, email: e.target.value }))
                }
                className="border-border bg-surface focus:border-accent focus:ring-ring-focus mt-1 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'err-email' : undefined}
              />
              {errors.email ? (
                <p id="err-email" className="text-accent mt-1 text-xs">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-msg" className="text-fg-muted text-xs">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-msg"
                name="message"
                rows={4}
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                className="border-border bg-surface focus:border-accent focus:ring-ring-focus mt-1 w-full resize-y rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'err-msg' : undefined}
              />
              {errors.message ? (
                <p id="err-msg" className="text-accent mt-1 text-xs">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" disabled={phase === 'sending'}>
              {t('contact.send')}
            </Button>
          </form>

          <div
            className="border-border bg-surface-elevated/50 font-mono text-sm min-h-[200px] rounded-lg border p-4"
            aria-live="polite"
          >
            <AnimatePresence mode="popLayout">
              {lines.map((line, i) => (
                <motion.p
                  key={`${i}-${line}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-fg-muted mb-2 last:mb-0"
                >
                  {line}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
