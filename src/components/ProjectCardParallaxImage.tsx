import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'

/** Visible media strip: slightly taller than 16/9 (~11% more height for the same width). */
const FRAME_CLASS = 'aspect-[16/10]'

/** Extra vertical size vs. frame; half is used as negative top to keep image centered. */
const IMAGE_HEIGHT_PERCENT = 144
const TOP_OFFSET_PERCENT = (IMAGE_HEIGHT_PERCENT - 100) / 2

/** How far the inner layer shifts (px) between “card entering” and “card leaving” viewport. */
const PARALLAX_Y_RANGE_PX = 44

/** Intrinsic size of `/public/projects/*.png` covers (layout hint for CLS / audits). */
const DEFAULT_INTRINSIC_WIDTH = 1280
const DEFAULT_INTRINSIC_HEIGHT = 720

type ProjectCardParallaxImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export function ProjectCardParallaxImage({
  src,
  alt,
  width = DEFAULT_INTRINSIC_WIDTH,
  height = DEFAULT_INTRINSIC_HEIGHT,
}: ProjectCardParallaxImageProps) {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_Y_RANGE_PX, -PARALLAX_Y_RANGE_PX],
  )

  if (reduced) {
    return (
      <div
        className={cn(
          'border-border bg-surface-elevated/80 relative overflow-hidden border-b',
          FRAME_CLASS,
        )}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'border-border bg-surface-elevated/80 relative overflow-hidden border-b',
        FRAME_CLASS,
      )}
    >
      <motion.div
        className="absolute inset-x-0 w-full will-change-transform"
        style={{
          top: `-${TOP_OFFSET_PERCENT}%`,
          height: `${IMAGE_HEIGHT_PERCENT}%`,
          y,
        }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="pointer-events-none h-full w-full object-cover object-center select-none"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}
