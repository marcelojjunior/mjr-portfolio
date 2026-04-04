export type ProjectItem = {
  id: string
  nameKey: string
  descriptionKey: string
  tech: string[]
  imageUrl?: string
  /** i18n path to string[] e.g. projects.items.commerce.impact */
  impactPath: string
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

export type ExperienceItem = {
  id: string
  companyKey: string
  roleKey: string
  periodKey: string
  workModelKey: string
  locationKey: string
  /** i18n path to string[] e.g. experience.items.acme.bullets */
  bulletsPath: string
}

export type StackGroupId = 'mobile' | 'backend' | 'frontend' | 'tools'

export type StackGroup = {
  id: StackGroupId
  labelKey: string
  items: string[]
}
