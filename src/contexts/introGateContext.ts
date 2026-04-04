import { createContext } from 'react'

export type IntroGateValue = {
  introComplete: boolean
  completeIntro: () => void
}

export const IntroGateContext = createContext<IntroGateValue | null>(null)
