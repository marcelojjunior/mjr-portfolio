import { cn } from '@/utils/cn'

type TerminalBlockProps = {
  lines: { prefix: string; content: string; muted?: boolean }[]
  className?: string
}

export function TerminalBlock({ lines, className }: TerminalBlockProps) {
  return (
    <div
      className={cn(
        'border-border bg-surface-elevated/80 rounded-md border p-4 font-mono text-sm shadow-inner',
        className,
      )}
      role="figure"
      aria-label="Terminal output"
    >
      {lines.map((line, i) => (
        <div key={i} className="flex flex-wrap gap-x-2">
          <span className="text-accent shrink-0">{line.prefix}</span>
          <span
            className={line.muted ? 'text-fg-muted' : 'text-fg'}
          >
            {line.content}
          </span>
        </div>
      ))}
    </div>
  )
}
