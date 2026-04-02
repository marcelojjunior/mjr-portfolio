import { useLenis } from 'lenis/react'

import { SECTION_IDS, type SectionId } from '@/constants/sections'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const NAV_OFFSET = 72

export function useScrollToSection() {
  const lenis = useLenis()
  const reducedMotion = useReducedMotion()

  return (id: SectionId) => {
    const hash = `#${id}`
    if (reducedMotion || !lenis) {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'instant', block: 'start' })
      return
    }
    lenis.scrollTo(hash, {
      offset: -NAV_OFFSET,
    })
  }
}

export { SECTION_IDS }
export type { SectionId }
