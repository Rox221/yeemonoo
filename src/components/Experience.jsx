import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const TAG_TILT = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-[1.5deg]']

export default function Experience() {
  const { experience, ui } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
      <SectionHeading title={ui.sections.experience.title} />

      <div className="relative">
        <div
          className="pointer-events-none absolute bottom-0 left-[3px] top-0 w-px bg-gradient-to-b from-transparent via-neutral-900/15 to-transparent sm:left-1/2 dark:via-neutral-100/15"
          aria-hidden="true"
        />

        <div className="space-y-20 sm:space-y-28">
          {experience.map((job, i) => {
            const isLeft = i % 2 === 0
            const index = String(i + 1).padStart(2, '0')

            return (
              <Reveal key={job.company + job.period} delay={i * 80}>
                <div
                  className={`group relative pl-10 ${
                    isLeft ? 'sm:pl-0 sm:pr-[calc(50%+3rem)]' : 'sm:pl-[calc(50%+3rem)]'
                  }`}
                >
                  <span
                    className="absolute left-[3px] top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="absolute h-full w-full scale-0 rounded-full bg-accent-dim/40 transition-transform duration-500 group-hover:scale-[2.4] dark:bg-accent/40" />
                    <span className="relative h-2 w-2 rotate-45 border border-neutral-400 bg-paper transition-colors duration-300 group-hover:border-accent-dim dark:border-neutral-600 dark:bg-canvas dark:group-hover:border-accent" />
                  </span>

                  <div className="relative">
                    <span
                      className={`pointer-events-none absolute -top-10 hidden select-none font-display text-7xl font-bold leading-none text-ink/[0.05] sm:block sm:text-8xl dark:text-bone/[0.06] ${
                        isLeft ? '-left-2 sm:-left-6' : '-right-2 sm:-right-6'
                      }`}
                      aria-hidden="true"
                    >
                      {index}
                    </span>

                    <div className={`relative ${isLeft ? 'sm:text-right' : ''}`}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                        {job.period}
                      </p>

                      <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-dim sm:text-4xl dark:text-bone dark:group-hover:text-accent">
                        {job.role}
                      </h3>

                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent-dim dark:text-accent">
                        {job.company}
                      </p>

                      <div
                        className={`mt-7 flex flex-wrap gap-2.5 ${isLeft ? 'sm:justify-end' : ''}`}
                      >
                        {job.tech.map((t, idx) => (
                          <span
                            key={t}
                            className={`${TAG_TILT[idx % TAG_TILT.length]} inline-block cursor-default border border-dashed border-neutral-400/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:rotate-0 hover:border-solid hover:border-ink hover:bg-accent-dim hover:text-ink hover:shadow-[3px_3px_0_0_var(--color-ink)] dark:border-neutral-600/70 dark:text-neutral-400 dark:hover:border-bone dark:hover:bg-accent dark:hover:text-canvas dark:hover:shadow-[3px_3px_0_0_var(--color-bone)]`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
