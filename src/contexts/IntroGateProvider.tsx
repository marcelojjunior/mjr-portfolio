import { useCallback, useMemo, useState, type ReactNode } from 'react'

import { IntroGateContext } from '@/contexts/introGateContext'

type IntroGateProviderProps = {
  children: ReactNode
  reducedMotion: boolean
}

export function IntroGateProvider({
  children,
  reducedMotion,
}: IntroGateProviderProps) {
  const [typingIntroDone, setTypingIntroDone] = useState(false)
  const introComplete = typingIntroDone || reducedMotion

  const completeIntro = useCallback(() => {
    setTypingIntroDone(true)
  }, [])

  const value = useMemo(
    () => ({ introComplete, completeIntro }),
    [introComplete, completeIntro],
  )

  return (
    <IntroGateContext.Provider value={value}>{children}</IntroGateContext.Provider>
  )
}
