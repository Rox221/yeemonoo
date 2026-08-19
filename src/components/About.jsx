import { about } from '../data/portfolioData'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'

function Metric({ end, suffix, label }) {
  const { ref, value } = useCountUp(end)

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {value}
        <span className="text-accent-dim dark:text-accent">{suffix}</span>
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
        {label}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="grid gap-16 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-dim dark:bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Who I am
              </span>
            </div>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
              About <span className="text-accent-dim dark:text-accent">me</span>.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 max-w-lg font-display text-2xl font-medium leading-[1.25] tracking-tight sm:text-[1.75rem]">
              {about.statement.map((chunk, i) => (
                <span key={i} className={chunk.accent ? 'text-accent-dim dark:text-accent' : undefined}>
                  {chunk.text}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-neutral-600 dark:text-neutral-400">{about.context}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-neutral-900/10 py-8 dark:border-neutral-100/10">
              {about.metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-2 font-mono text-xs">
                  <dt className="uppercase tracking-widest text-neutral-400 dark:text-neutral-600">{fact.label}</dt>
                  <dd className="text-neutral-700 dark:text-neutral-300">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={140} className="sm:col-span-5">
          <div className="relative pl-8">
            <div
              className="grow-line absolute bottom-1 left-[3px] top-1 w-px bg-gradient-to-b from-accent-dim via-neutral-900/15 to-transparent dark:from-accent dark:via-neutral-100/15"
              aria-hidden="true"
            />

            <ul className="space-y-9">
              {about.focus.map((item, i) => (
                <li key={item.title} className="group relative">
                  <span
                    className="absolute -left-8 top-[0.4rem] flex h-[7px] w-[7px] items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full scale-0 rounded-full bg-accent-dim/50 transition-transform duration-300 group-hover:scale-[2.5] dark:bg-accent/50" />
                    <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-neutral-400 transition-colors duration-300 group-hover:bg-accent-dim dark:bg-neutral-600 dark:group-hover:bg-accent" />
                  </span>

                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">0{i + 1}</span>
                    <h3 className="font-display text-lg font-medium tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-accent-dim dark:text-neutral-200 dark:group-hover:text-accent sm:text-xl">
                      {item.title}
                    </h3>
                    <span
                      className="text-accent-dim opacity-0 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 dark:text-accent"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xs text-sm text-neutral-500 dark:text-neutral-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
