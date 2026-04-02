import { en } from '@/i18n/en'
import { ptBR } from '@/i18n/pt-BR'

export const messages = {
  en,
  'pt-BR': ptBR,
} as const

export type Locale = keyof typeof messages

function getByPath(obj: unknown, path: string): string | undefined {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const p of parts) {
    if (cur !== null && typeof cur === 'object' && p in cur) {
      cur = (cur as Record<string, unknown>)[p]
    } else {
      return undefined
    }
  }
  return typeof cur === 'string' ? cur : undefined
}

export function translate(locale: Locale, path: string): string {
  const table = messages[locale]
  const v = getByPath(table, path)
  if (v !== undefined) return v
  const fallback = getByPath(en, path)
  return fallback ?? path
}

export function translateList(locale: Locale, path: string): string[] {
  const table = messages[locale]
  const parts = path.split('.')
  let cur: unknown = table
  for (const p of parts) {
    if (cur !== null && typeof cur === 'object' && p in cur) {
      cur = (cur as Record<string, unknown>)[p]
    } else {
      cur = undefined
      break
    }
  }
  if (Array.isArray(cur) && cur.every((x) => typeof x === 'string')) {
    return cur as string[]
  }
  const fb = en
  let fcur: unknown = fb
  for (const p of parts) {
    if (fcur !== null && typeof fcur === 'object' && p in fcur) {
      fcur = (fcur as Record<string, unknown>)[p]
    } else {
      return []
    }
  }
  return Array.isArray(fcur) && fcur.every((x) => typeof x === 'string')
    ? (fcur as string[])
    : []
}
