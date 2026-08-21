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

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-10 sm:px-10 sm:pt-14 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-8">
        <div>
          <Reveal>
            <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Hello<span className="text-accent-dim dark:text-accent">.</span>
            </p>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-dim dark:bg-accent" aria-hidden="true" />
              <p className="font-sans text-base text-neutral-600 dark:text-neutral-400">I'm </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,7.5vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-1 text-right font-sans text-[clamp(1.25rem,4vw,2.25rem)] font-medium italic text-neutral-600 dark:text-neutral-400">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-4 flex flex-wrap items-baseline gap-3 font-mono text-lg text-neutral-600 sm:text-xl dark:text-neutral-400">
              <span>Building for</span>
              <span className="min-w-[9ch] text-accent-dim dark:text-accent">{role}</span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="relative mt-8 max-w-lg">
             
              <p className="relative text-lg text-neutral-600 dark:text-neutral-400">{profile.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent-dim hover:text-ink dark:bg-bone dark:text-canvas dark:hover:bg-accent"
              >
                Dive In
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

        <Reveal delay={140}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-[58%_42%_45%_55%/45%_55%_48%_52%] border-t-[3px] border-r-[5px] border-b-[4px] border-l-[2px] border-accent-dim bg-paper shadow-[0_25px_50px_-18px_rgba(143,174,0,0.4)] dark:border-accent dark:bg-canvas dark:shadow-[0_25px_50px_-18px_rgba(198,255,0,0.25)]">
              <div className="flex h-full w-full rotate-3 flex-col items-center justify-center gap-3 text-center">
                <svg
                  className="h-16 w-16 text-neutral-400 dark:text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Your Photo Here</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <TechMarquee />
    </section>
  )
}
