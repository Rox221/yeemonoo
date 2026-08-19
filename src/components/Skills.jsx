import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const levelStyles = {
  5: 'text-2xl sm:text-3xl font-semibold text-ink dark:text-bone',
  4: 'text-xl sm:text-2xl font-medium text-neutral-800 dark:text-neutral-200',
  3: 'text-lg sm:text-xl font-normal text-neutral-600 dark:text-neutral-400',
  2: 'text-base sm:text-lg font-normal text-neutral-500 dark:text-neutral-500',
  1: 'text-sm sm:text-base font-normal text-neutral-400 dark:text-neutral-600',
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        index="02"
        title="Skills"
        description="Grouped by area, sized by how often I actually reach for each one — not made-up percentage bars."
      />

      <div className="divide-y divide-neutral-900/10 dark:divide-neutral-100/10">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 50}>
            <div className="grid gap-4 py-8 sm:grid-cols-[9rem_1fr] sm:gap-10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-display leading-tight tracking-tight">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`transition-colors duration-200 hover:text-accent-dim dark:hover:text-accent ${levelStyles[item.level]}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
