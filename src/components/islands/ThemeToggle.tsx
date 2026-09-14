import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * Persists the visitor's choice for a year. Device preference only decides the first visit.
 * The icon shows the DESTINATION, not the current state: a sun on dark means "go light".
 */
export default function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) ?? 'dark')
  }, [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  const label = next === 'light' ? toLight : toDark

  const toggle = () => {
    document.documentElement.dataset.theme = next
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`
    setTheme(next)
  }

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="mjr-theme">
      {next === 'light' ? (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.6 6.6 0 0 0 9.5 9.5Z" />
        </svg>
      )}
      <style>{`
        .mjr-theme {
          display: grid; place-items: center; cursor: pointer;
          width: 2.1rem; height: 2.1rem; padding: 0;
          border-radius: 999px; border: 1px solid var(--color-line);
          background: transparent; color: var(--color-dim);
          transition: border-color var(--dur-fast) var(--ease-out), color var(--dur-fast);
        }
        .mjr-theme:hover { border-color: var(--color-accent); color: var(--color-accent); }
      `}</style>
    </button>
  )
}
