import { motion } from 'framer-motion'

import { cn } from '@/utils/cn'
import { sectionReveal } from '@/utils/motion'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn('mb-10 md:mb-14', className)}
    >
      <h2 className="text-fg text-2xl font-semibold tracking-tight md:text-3xl">
        <span className="text-accent mr-2 font-mono text-lg">#</span>
        {title}
      </h2>
      {subtitle ? (
        <p className="text-fg-muted mt-2 max-w-2xl text-sm md:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  )
}
