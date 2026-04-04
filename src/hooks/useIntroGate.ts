import { useContext } from 'react'

import { IntroGateContext } from '@/contexts/introGateContext'

export function useIntroGate() {
  const ctx = useContext(IntroGateContext)
  if (!ctx) {
    throw new Error('useIntroGate must be used within IntroGateProvider')
  }
  return ctx
}
