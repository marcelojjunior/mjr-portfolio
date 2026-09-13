import * as simpleIcons from 'simple-icons'

type SimpleIcon = { path: string; title: string }

/** Resolves a simple-icons export name to its SVG path, at build time. */
export function iconPath(name: string | undefined): string | undefined {
  if (!name) return undefined
  const icon = (simpleIcons as unknown as Record<string, SimpleIcon | undefined>)[name]
  return icon?.path
}

/**
 * Icons simple-icons does not ship. LinkedIn was removed from the set over trademark
 * policy, and e-mail has no brand at all.
 */
export const CUSTOM_ICONS: Record<string, string> = {
  mail: 'M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 19.5 21h-15a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.4.75 7.35 5.62L19.35 6H4.65Zm15.1 1.62-7.06 5.4a1.13 1.13 0 0 1-1.38 0L4.25 7.62V18.9c0 .06.04.1.1.1h15.3c.06 0 .1-.04.1-.1V7.62Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.02 0h4.28v1.54h.06c.6-1.06 2.05-2.18 4.22-2.18 4.52 0 5.35 2.85 5.35 6.55V21h-4.46v-4.9c0-1.17-.02-2.68-1.68-2.68-1.68 0-1.94 1.28-1.94 2.6V21H9.77V9.75Z',
}
