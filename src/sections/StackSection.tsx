import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import { STACK_GROUPS } from '@/constants/content'
import { SECTION_IDS } from '@/constants/sections'
import { getStackIcon } from '@/constants/stackIcons'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

export function StackSection() {
  const { t } = useTranslation()

  return (
    <SectionReveal id={SECTION_IDS.stack}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
        />

        <motion.div
          className="space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {STACK_GROUPS.map((group) => (
            <motion.div key={group.id} variants={staggerItem}>
              <h3 className="text-fg-muted mb-3 font-mono text-xs font-semibold uppercase tracking-widest">
                {t(group.labelKey)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((tech) => {
                  const Icon = getStackIcon(tech)
                  return (
                    <li key={tech}>
                      <span
                        className="border-accent/50 bg-accent-soft/50 text-accent inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium"
                      >
                        <Icon
                          className="h-3.5 w-3.5 shrink-0 opacity-90"
                          aria-hidden
                        />
                        {tech}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  )
}
