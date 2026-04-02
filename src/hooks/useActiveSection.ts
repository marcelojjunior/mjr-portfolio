import { useEffect, useState } from 'react'

import { SECTION_IDS, type SectionId } from '@/constants/sections'

const IDS: SectionId[] = [
  SECTION_IDS.hero,
  SECTION_IDS.projects,
  SECTION_IDS.experience,
  SECTION_IDS.stack,
  SECTION_IDS.contact,
]

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(SECTION_IDS.hero)

  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[]
    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return active
}
