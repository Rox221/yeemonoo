import { experience } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading index="03" title="Experience" />

      <div className="space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <div className="grid gap-4 border-t border-neutral-900/10 py-10 sm:grid-cols-[9rem_1fr] sm:gap-10 dark:border-neutral-100/10">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                {job.period}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                <p className="mt-1 text-neutral-500 dark:text-neutral-500">{job.company}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.achievements.map((item) => (
                    <li key={item} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                      <span className="text-accent-dim dark:text-accent" aria-hidden="true">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-neutral-900/10 px-2.5 py-1 font-mono text-xs text-neutral-500 dark:border-neutral-100/10 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
