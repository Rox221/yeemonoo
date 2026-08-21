import Reveal from './Reveal'

export default function SectionHeading({ title, description }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-baseline gap-3 font-mono text-xs tracking-widest text-neutral-500 dark:text-neutral-500">
        <span className="uppercase text-accent-dim dark:text-accent">{title}</span>
      </div>
      <div className="mt-3 h-px w-full bg-neutral-900/10 dark:bg-neutral-100/10" />
      {description && (
        <p className="mt-5 max-w-xl text-neutral-600 dark:text-neutral-400">{description}</p>
      )}
    </Reveal>
  )
}
