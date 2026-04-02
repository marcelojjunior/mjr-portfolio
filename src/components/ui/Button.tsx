import { motion, type HTMLMotionProps } from 'framer-motion'

import { cn } from '@/utils/cn'

type Base = {
  variant?: 'primary' | 'ghost' | 'outline'
  className?: string
}

type ButtonAsButton = Base &
  HTMLMotionProps<'button'> & {
    href?: undefined
  }

type ButtonAsAnchor = Base &
  HTMLMotionProps<'a'> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClass: Record<NonNullable<Base['variant']>, string> = {
  primary:
    'border border-accent/40 bg-accent-soft text-fg shadow-[0_0_24px_-8px_var(--accent)] hover:border-accent/70',
  ghost: 'border border-transparent text-fg-muted hover:border-border hover:text-fg',
  outline:
    'border border-border bg-surface-elevated/60 text-fg hover:border-accent/50 hover:shadow-[0_0_20px_-10px_var(--accent)]',
}

const baseClass =
  'focus-visible:ring-ring-focus inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none'

export function Button(props: ButtonProps) {
  const { variant = 'primary', className, ...rest } = props
  const cls = cn(baseClass, variantClass[variant], className)

  if ('href' in props && props.href) {
    const { href, ...aProps } = rest as HTMLMotionProps<'a'> & { href: string }
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cls}
        {...aProps}
      />
    )
  }

  const { type = 'button', ...btnProps } = rest as HTMLMotionProps<'button'>
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cls}
      {...btnProps}
    />
  )
}
