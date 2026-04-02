import type { HTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/35 bg-accent-soft px-3 py-1 text-xs font-medium text-accent',
        className,
      )}
      {...props}
    />
  )
}
