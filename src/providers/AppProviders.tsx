import { ThemeSync } from '@/providers/ThemeSync'

type AppProvidersProps = {
  children: React.ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <ThemeSync />
      {children}
    </>
  )
}
