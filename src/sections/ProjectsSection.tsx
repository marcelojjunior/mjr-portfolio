import { motion } from 'framer-motion'

import { ProjectCardParallaxImage } from '@/components/ProjectCardParallaxImage'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionReveal } from '@/components/SectionReveal'
import { PROJECTS } from '@/constants/content'
import { SECTION_IDS } from '@/constants/sections'
import { useTranslation } from '@/hooks/useTranslation'
import { staggerContainer, staggerItem } from '@/utils/motion'

export function ProjectsSection() {
  const { t, tList } = useTranslation()

  return (
    <SectionReveal id={SECTION_IDS.projects}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {PROJECTS.map((project) => {
            const impacts = tList(project.impactPath)
            return (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="flex h-full w-full min-h-0 flex-col"
              >
                <Card className="flex h-full min-h-0 flex-col overflow-hidden">
                  {project.imageUrl ? (
                    <ProjectCardParallaxImage
                      src={project.imageUrl}
                      alt={t(project.nameKey)}
                    />
                  ) : null}
                  <div className="flex min-h-0 flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <h3 className="text-fg text-lg font-semibold">
                        {t(project.nameKey)}
                      </h3>
                    </div>
                    <p className="text-fg-muted text-sm leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <p className="text-accent mt-3 font-mono text-xs">
                      {project.tech.join(' · ')}
                    </p>
                    <div className="mt-4">
                      <p className="text-fg mb-2 text-xs font-semibold uppercase tracking-wide">
                        {t('projects.impactLabel')}
                      </p>
                      <ul className="text-fg-muted list-inside list-disc space-y-1 text-sm">
                        {impacts.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                    {project.githubUrl || project.liveUrl ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.githubUrl ? (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-accent hover:text-fg focus-visible:ring-ring-focus text-sm font-medium underline-offset-4 hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:outline-none"
                            whileHover={{ scale: 1.03 }}
                          >
                            {t('projects.viewGithub')}
                          </motion.a>
                        ) : null}
                        {project.liveUrl ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-fg-muted hover:text-accent focus-visible:ring-ring-focus text-sm focus-visible:ring-2 focus-visible:outline-none"
                            whileHover={{ scale: 1.03 }}
                          >
                            {t('projects.viewLive')}
                          </motion.a>
                        ) : null}
                      </div>
                    ) : null}
                    {/* Fills remaining row height so card bases align; keeps copy + tech + impact grouped */}
                    <div className="min-h-0 flex-1" aria-hidden />
                  </div>
                </Card>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </SectionReveal>
  )
}
