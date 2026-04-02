export const CONTACT_EMAIL = 'marcelovfjjunior@gmail.com'

export type ContactLinkId = 'email' | 'github' | 'linkedin'

export type ContactLinkItem = {
  id: ContactLinkId
  href: string
  external: boolean
}

export const CONTACT_LINKS: ContactLinkItem[] = [
  {
    id: 'email',
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    id: 'github',
    href: 'https://github.com/marcelojjunior',
    external: true,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/marcelojjunior',
    external: true,
  },
]
