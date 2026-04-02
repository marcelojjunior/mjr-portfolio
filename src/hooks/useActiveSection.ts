import { useLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

import { SECTION_IDS, type SectionId } from '@/constants/sections'

const IDS: SectionId[] = [
  SECTION_IDS.hero,
  SECTION_IDS.projects,
  SECTION_IDS.experience,
  SECTION_IDS.stack,
  SECTION_IDS.contact,
]

/** Aligns with `scroll-padding-top` on `html` so the active nav matches the anchored section. */
const HEADER_OFFSET_PX = 500

function getScrollY(): number {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

function computeActiveSection(): SectionId {
  const scrollY = getScrollY()
  const marker = scrollY + HEADER_OFFSET_PX

  let active: SectionId = SECTION_IDS.hero
  for (const id of IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top + scrollY
    if (top <= marker) {
      active = id
    }
  }
  return active
}

export function useActiveSection(): SectionId {
  const lenis = useLenis()
  const [active, setActive] = useState<SectionId>(SECTION_IDS.hero)

  useEffect(() => {
    let raf = 0

    const scheduleUpdate = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setActive(computeActiveSection())
      })
    }

    scheduleUpdate()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })
    window.addEventListener('hashchange', scheduleUpdate)

    const unsubLenis = lenis?.on('scroll', scheduleUpdate)

    const main = document.getElementById('main-content')
    const ro =
      main && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(scheduleUpdate)
        : null
    if (main && ro) {
      ro.observe(main)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      unsubLenis?.()
      ro?.disconnect()
    }
  }, [lenis])

  return active
}
