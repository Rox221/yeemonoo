const marks = [
  ({ className }) => <div className={`rounded-full border border-accent ${className}`} />,
  ({ className }) => (
    <div className={`relative ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent" />
    </div>
  ),
  ({ className }) => <div className={`rotate-12 border border-accent ${className}`} />,
]

export default function ProjectVisual({ index, className = '' }) {
  const n = parseInt(index, 10) || 1
  const Mark = marks[n % marks.length]
  const markPosition = n % 2 === 0 ? 'top-6 right-6 sm:top-8 sm:right-8' : 'bottom-6 left-6 sm:bottom-8 sm:left-8'

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <div className="bg-grid pointer-events-none absolute inset-0 text-bone/[0.06]" aria-hidden="true" />

      <span
        className="text-outline pointer-events-none absolute -bottom-8 -right-3 select-none font-display text-[9rem] font-semibold leading-none text-bone/25 sm:text-[11rem]"
        aria-hidden="true"
      >
        {index}
      </span>

      <div className={`absolute ${markPosition}`} aria-hidden="true">
        <Mark className="h-12 w-12 sm:h-14 sm:w-14" />
      </div>
    </div>
  )
}
