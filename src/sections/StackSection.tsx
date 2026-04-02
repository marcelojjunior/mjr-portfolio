import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import { PRIMARY_TECH, STACK_GROUPS } from '@/constants/content'
import { SECTION_IDS } from '@/constants/sections'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'
import { cn } from '@/utils/cn'

export function StackSection() {
  const { t } = useTranslation()

  return (
    <SectionReveal id={SECTION_IDS.stack}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
                  const primary = PRIMARY_TECH.has(tech)
                  return (
                    <li key={tech}>
                      <span
                        className={cn(
                          'border-border bg-surface-elevated/80 inline-flex rounded-md border px-3 py-1.5 text-xs font-medium',
                          primary &&
                            'border-accent/50 text-accent shadow-[0_0_18px_-10px_var(--accent)]',
                          !primary && 'text-fg-muted',
                        )}
                      >
                        {tech}
                        {primary ? (
                          <span className="text-fg-muted ml-2 text-[10px] uppercase">
                            · {t('stack.primaryLabel')}
                          </span>
                        ) : null}
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
