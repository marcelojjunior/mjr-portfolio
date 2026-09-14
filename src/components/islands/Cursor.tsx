import { useEffect, useRef } from 'react'

/**
 * Dot + trailing ring. Pointer-fine only, and absent entirely under reduced motion.
 * Decorative: hidden from assistive tech.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || still) return

    const d = dot.current
    const r = ring.current
    if (!d || !r) return

    let tx = 0
    let ty = 0
    let rx = 0
    let ry = 0
    let seen = false
    let frame = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!seen) {
        seen = true
        rx = tx
        ry = ty
        d.style.opacity = '1'
        r.style.opacity = '0.8'
      }
      const target = (e.target as Element | null)?.closest('a, button, [data-cursor-grow]')
      r.dataset.grow = target ? '1' : '0'
    }

    const loop = () => {
      rx += (tx - rx) * 0.16
      ry += (ty - ry) * 0.16
      d.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`
      r.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true">
      <div ref={dot} className="mjr-cursor-dot" />
      <div ref={ring} className="mjr-cursor-ring" />
      <style>{`
        .mjr-cursor-dot, .mjr-cursor-ring {
          position: fixed; top: 0; left: 0; z-index: 90;
          pointer-events: none; border-radius: 50%; opacity: 0;
        }
        .mjr-cursor-dot { width: 6px; height: 6px; background: var(--color-accent); }
        .mjr-cursor-ring {
          width: 34px; height: 34px; border: 1px solid var(--color-accent);
          transition: width .25s var(--ease-out), height .25s var(--ease-out), background .25s;
        }
        .mjr-cursor-ring[data-grow='1'] {
          width: 54px; height: 54px;
          background: color-mix(in oklab, var(--color-accent) 16%, transparent);
        }
        @media (pointer: coarse) { .mjr-cursor-dot, .mjr-cursor-ring { display: none; } }
        @media (prefers-reduced-motion: reduce) { .mjr-cursor-dot, .mjr-cursor-ring { display: none; } }
      `}</style>
    </div>
  )
}
