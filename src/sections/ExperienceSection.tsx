import { motion } from 'framer-motion'

import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import { EXPERIENCE } from '@/constants/content'
import { SECTION_IDS } from '@/constants/sections'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

export function ExperienceSection() {
  const { t, tList } = useTranslation()

  return (
    <SectionReveal id={SECTION_IDS.experience}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <motion.ol
          className="relative space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {EXPERIENCE.map((job) => {
            const bullets = tList(job.bulletsPath)
            return (
              <motion.li key={job.id} variants={staggerItem}>
                <Card className="p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-fg text-lg font-semibold">
                        {t(job.companyKey)}
                      </h3>
                      <p className="text-accent font-mono text-sm">
                        {t(job.roleKey)}
                      </p>
                    </div>
                    <p className="text-fg-muted font-mono text-xs sm:text-sm">
                      {t(job.periodKey)}
                    </p>
                  </div>
                  <ul className="text-fg-muted mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Card>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </SectionReveal>
  )
}
