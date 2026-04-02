import { motion, type HTMLMotionProps } from 'framer-motion'

import { cn } from '@/utils/cn'

type CardProps = HTMLMotionProps<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      className={cn(
        'rounded-lg border border-border bg-surface-elevated/70 shadow-[0_0_0_1px_color-mix(in_srgb,var(--border)_40%,transparent)] backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
}
