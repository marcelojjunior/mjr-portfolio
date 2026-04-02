import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { SiGithub, SiGmail } from 'react-icons/si'
import { TbBrandLinkedin } from 'react-icons/tb'

import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import {
  CONTACT_EMAIL,
  CONTACT_LINKS,
  type ContactLinkId,
} from '@/constants/contact'
import { SECTION_IDS } from '@/constants/sections'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

const CONTACT_ICONS: Record<ContactLinkId, IconType> = {
  email: SiGmail,
  github: SiGithub,
  linkedin: TbBrandLinkedin,
}

const CARD_PREFIX: Record<ContactLinkId, string> = {
  email: 'contact.cards.email',
  github: 'contact.cards.github',
  linkedin: 'contact.cards.linkedin',
}

const linkMotionClass =
  'text-accent hover:text-fg focus-visible:ring-ring-focus inline-block text-sm font-medium underline-offset-4 hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:outline-none'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <SectionReveal id={SECTION_IDS.contact}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <motion.ul
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {CONTACT_LINKS.map((link) => {
            const Icon = CONTACT_ICONS[link.id]
            const prefix = CARD_PREFIX[link.id]
            const detail =
              link.id === 'email'
                ? CONTACT_EMAIL
                : link.href.replace(/^https?:\/\/(www\.)?/, '')

            const aria =
              link.id === 'email'
                ? t('contact.emailAria')
                : `${t(`${prefix}.action`)}. ${t('contact.externalAria')}`

            return (
              <motion.li key={link.id} variants={staggerItem} className="h-full">
                <Card className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-accent bg-accent-soft/50 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/40">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-fg text-lg font-semibold">
                      {t(`${prefix}.title`)}
                    </h3>
                  </div>
                  <p className="text-accent mt-1 grow font-mono text-xs break-all">
                    {detail}
                  </p>
                  <div className="mt-6">
                    <motion.a
                      href={link.href}
                      className={linkMotionClass}
                      {...(link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {})}
                      aria-label={aria}
                      whileHover={{ scale: 1.03 }}
                    >
                      {t(`${prefix}.action`)}
                    </motion.a>
                  </div>
                </Card>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </SectionReveal>
  )
}
