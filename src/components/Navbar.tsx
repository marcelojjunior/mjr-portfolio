import { useState } from 'react'

import { NAV_ITEMS } from '@/constants/nav'
import { SECTION_IDS, type SectionId } from '@/constants/sections'
import { useIntroGate } from '@/hooks/useIntroGate'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useTranslation } from '@/hooks/useTranslation'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/utils/cn'

const NAV_HEIGHT = 'h-[4.25rem]'

export function Navbar() {
  const { t } = useTranslation()
  const { introComplete } = useIntroGate()
  const active = useActiveSection()
  const scrollTo = useScrollToSection()
  const [open, setOpen] = useState(false)
  const toggleTheme = useAppStore((s) => s.toggleTheme)
  const toggleLocale = useAppStore((s) => s.toggleLocale)
  const locale = useAppStore((s) => s.locale)

  const onNav = (id: SectionId) => {
    scrollTo(id)
    setOpen(false)
  }

  const isNavLocked = (id: SectionId) =>
    !introComplete && id !== SECTION_IDS.hero

  return (
    <header
      className={cn(
        'border-border bg-surface/85 supports-backdrop-filter:bg-surface/70 sticky top-0 z-50 border-b backdrop-blur-md',
        NAV_HEIGHT,
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href={`#${SECTION_IDS.hero}`}
          className={cn(
            'focus-visible:ring-ring-focus font-mono text-sm font-semibold tracking-tight transition-colors focus-visible:rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none',
            active === SECTION_IDS.hero
              ? 'text-accent'
              : 'text-fg hover:text-accent',
          )}
          aria-current={active === SECTION_IDS.hero ? true : undefined}
          onClick={(e) => {
            e.preventDefault()
            onNav(SECTION_IDS.hero)
          }}
        >
          ~/marcelojunior
        </a>

        <nav
          className="text-fg-muted hidden items-center gap-1 md:flex"
          aria-label={t('a11y.mainNav')}
        >
          {NAV_ITEMS.map((item) => {
            const locked = isNavLocked(item.id)
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-disabled={locked}
                onClick={(e) => {
                  e.preventDefault()
                  if (locked) return
                  onNav(item.id)
                }}
                className={cn(
                  'focus-visible:ring-ring-focus rounded-md px-3 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none',
                  locked && 'pointer-events-none opacity-35',
                  active === item.id
                    ? 'text-accent bg-accent-soft/50'
                    : 'text-fg-muted hover:text-fg',
                )}
                aria-current={active === item.id ? true : undefined}
              >
                {t(item.labelKey)}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggleLocale()}
            className="text-fg-muted hover:text-fg focus-visible:ring-ring-focus rounded-md border border-border px-2.5 py-2 text-xs font-medium uppercase focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
            aria-label={t('a11y.toggleLanguage')}
          >
            {locale === 'en' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            onClick={() => toggleTheme()}
            className="text-fg-muted hover:text-fg focus-visible:ring-ring-focus rounded-md border border-border px-2.5 py-2 text-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
            aria-label={t('a11y.toggleTheme')}
          >
            ◐
          </button>
          <button
            type="button"
            className="text-fg-muted hover:text-fg focus-visible:ring-ring-focus rounded-md border border-border p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-border bg-surface/95 absolute left-0 right-0 top-full border-b shadow-lg backdrop-blur-md md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 py-3"
          aria-label={t('a11y.mainNav')}
        >
          {NAV_ITEMS.map((item) => {
            const locked = isNavLocked(item.id)
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-disabled={locked}
                onClick={(e) => {
                  e.preventDefault()
                  if (locked) return
                  onNav(item.id)
                }}
                className={cn(
                  'focus-visible:ring-ring-focus rounded-md px-3 py-3 text-sm focus-visible:ring-2 focus-visible:outline-none',
                  locked && 'pointer-events-none opacity-35',
                  active === item.id
                    ? 'text-accent bg-accent-soft/40'
                    : 'text-fg-muted',
                )}
                aria-current={active === item.id ? true : undefined}
              >
                {t(item.labelKey)}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
