import { useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const TAG_TILT = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-[1.5deg]', 'rotate-[1.5deg]']

function ChevronDownIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Skills() {
  const { skills, ui } = useLanguage()
  const [active, setActive] = useState(0)
  const activeGroup = skills[active]
  const buttonRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    function measure() {
      const el = buttonRefs.current[active]
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
      <SectionHeading title={ui.sections.skills.title} description={ui.sections.skills.description} />

      <Reveal>
        <div className="relative pb-6">
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-3">
            {skills.map((group, i) => {
              const isActive = i === active

              return (
                <button
                  key={group.category}
                  ref={(el) => {
                    buttonRefs.current[i] = el
                  }}
                  type="button"
                  role="tab"
                  id={`skills-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="skills-panel"
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 sm:text-sm ${
                    isActive
                      ? 'border-ink bg-ink text-bone dark:border-bone dark:bg-bone dark:text-ink'
                      : 'border-neutral-900/15 text-neutral-500 hover:border-ink hover:text-ink dark:border-neutral-100/15 dark:text-neutral-400 dark:hover:border-bone dark:hover:text-bone'
                  }`}
                >
                  {group.category}
                </button>
              )
            })}
          </div>

          <ChevronDownIcon
            style={{ left: indicator.left + indicator.width / 2 }}
            className="animate-bounce-subtle absolute top-full h-4 w-4 -translate-x-1/2 text-accent-dim transition-[left] duration-300 ease-out dark:text-accent"
          />
        </div>
      </Reveal>

      <div
        key={activeGroup.category}
        id="skills-panel"
        role="tabpanel"
        aria-labelledby={`skills-tab-${active}`}
        style={{ marginLeft: indicator.left }}
        className="mt-8 inline-flex flex-col items-start gap-2.5"
      >
        {activeGroup.items.map((name, idx) => (
          <span
            key={name}
            style={{ animationDelay: `${idx * 40}ms` }}
            className={`${TAG_TILT[idx % TAG_TILT.length]} panel-in inline-block cursor-default border border-dashed border-neutral-400/70 px-4 py-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:rotate-0 hover:border-solid hover:border-ink hover:bg-accent-dim hover:text-ink hover:shadow-[3px_3px_0_0_var(--color-ink)] dark:border-neutral-600/70 dark:text-neutral-400 dark:hover:border-bone dark:hover:bg-accent dark:hover:text-canvas dark:hover:shadow-[3px_3px_0_0_var(--color-bone)]`}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
