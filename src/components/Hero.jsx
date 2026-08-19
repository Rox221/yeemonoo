import { profile } from '../data/portfolioData'
import { useCycler } from '../hooks/useCycler'
import Reveal from './Reveal'
import TechMarquee from './TechMarquee'

export default function Hero() {
  const role = useCycler(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="bg-grid pointer-events-none absolute inset-0 text-neutral-900/[0.04] dark:text-neutral-100/[0.05]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 sm:px-10 sm:pt-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,8rem)] font-semibold leading-[0.92] tracking-tight">
            Yee Mon Oo
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 flex flex-wrap items-baseline gap-3 font-mono text-lg text-neutral-600 sm:text-xl dark:text-neutral-400">
            <span>Building for</span>
            <span className="min-w-[9ch] text-accent-dim dark:text-accent">{role}</span>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-lg text-lg text-neutral-600 dark:text-neutral-400">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent-dim hover:text-ink dark:bg-bone dark:text-canvas dark:hover:bg-accent"
            >
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-neutral-900/15 px-6 py-3 font-mono text-sm transition-colors hover:border-accent-dim dark:border-neutral-100/15 dark:hover:border-accent"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>

      <TechMarquee />
    </section>
  )
}
