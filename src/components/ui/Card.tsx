import { motion, type HTMLMotionProps } from 'framer-motion'

import { cn } from '@/utils/cn'

type CardProps = HTMLMotionProps<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      className={cn(
        'rounded-lg border border-border bg-surface-elevated/70 backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
}
