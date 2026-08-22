import { useLanguage } from '../context/LanguageContext'
import { useCycler } from '../hooks/useCycler'
import DeveloperIllustration from './DeveloperIllustration'
import Reveal from './Reveal'
import { ArrowDownRightIcon } from './SocialIcons'
import TechMarquee from './TechMarquee'

export default function Hero() {
  const { profile, ui } = useLanguage()
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
              {ui.hero.greeting}
              <span className="text-accent-dim dark:text-accent">.</span>
            </p>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-dim dark:bg-accent" aria-hidden="true" />
              <p className="font-sans text-base text-neutral-600 dark:text-neutral-400">{ui.hero.imLabel} </p>
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
              <span>{ui.hero.buildingFor}</span>
              <span className="min-w-[9ch] text-accent-dim dark:text-accent">{role}</span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="relative mt-8 max-w-lg">

              <p className="relative text-lg text-neutral-600 dark:text-neutral-400">{profile.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <DeveloperIllustration className="my-10 lg:hidden" />
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent-dim hover:text-ink dark:bg-bone dark:text-canvas dark:hover:bg-accent"
              >
                {ui.hero.diveIn}
                <span className="animate-sway inline-block" aria-hidden="true">
                  <ArrowDownRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-neutral-900/15 px-6 py-3 font-mono text-sm transition-colors hover:border-accent-dim dark:border-neutral-100/15 dark:hover:border-accent"
              >
                {ui.hero.getInTouch}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DeveloperIllustration className="hidden lg:block" />
        </Reveal>
      </div>

      <TechMarquee />
    </section>
  )
}
