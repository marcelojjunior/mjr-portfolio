import { motion, type HTMLMotionProps } from 'framer-motion'

import { cn } from '@/utils/cn'
import { sectionReveal } from '@/utils/motion'

type SectionRevealProps = HTMLMotionProps<'section'> & {
  id: string
}

export function SectionReveal({
  id,
  className,
  children,
  ...props
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12% 0px' }}
      className={cn('scroll-mt-20 py-section', className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
