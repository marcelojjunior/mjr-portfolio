export function AppBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="bg-surface absolute inset-0" />
      <div
        className="absolute -top-[40%] right-[-25%] h-[min(90vw,720px)] w-[min(90vw,720px)] rounded-full opacity-[0.88] blur-[100px] dark:opacity-[0.72]"
        style={{
          background:
            'radial-gradient(circle at center, var(--glow-a) 0%, var(--glow-a) 32%, transparent 58%)',
        }}
      />
      <div
        className="absolute bottom-[-35%] left-[-20%] h-[min(85vw,640px)] w-[min(85vw,640px)] rounded-full opacity-[0.72] blur-[100px] dark:opacity-[0.55]"
        style={{
          background:
            'radial-gradient(circle at center, var(--glow-b) 0%, var(--glow-b) 28%, transparent 56%)',
        }}
      />
    </div>
  )
}
