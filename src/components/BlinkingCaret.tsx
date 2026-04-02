export function BlinkingCaret({ className }: { className?: string }) {
  return (
    <span
      className={`animate-caret bg-accent ml-0.5 inline-block h-[1.1em] w-2 align-[-0.15em] ${className ?? ''}`}
      aria-hidden
    />
  )
}
