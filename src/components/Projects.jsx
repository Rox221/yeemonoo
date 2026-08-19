import { projects } from '../data/portfolioData'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function TechTags({ tech }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="border border-neutral-900/10 px-2.5 py-1 font-mono text-xs text-neutral-500 dark:border-neutral-100/10 dark:text-neutral-400"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function Highlights({ items }) {
  if (!items?.length) return null
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="text-accent-dim dark:text-accent" aria-hidden="true">
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.variant === 'featured')
  const split = projects.find((p) => p.variant === 'split')
  const rail = projects.filter((p) => p.variant === 'rail')
  const list = projects.filter((p) => p.variant === 'list')

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        index="04"
        title="Projects"
        description="A handful of case studies — the rest live on GitHub."
      />

      {featured && (
        <Reveal className="mb-20">
          <a href={featured.link} className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <ProjectVisual
              index={featured.index}
              className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02] lg:order-2"
            />
            <div className="lg:order-1">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                {featured.year} · {featured.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">{featured.description}</p>
              <Highlights items={featured.highlights} />
              <TechTags tech={featured.tech} />
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm">
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </a>
        </Reveal>
      )}

      {split && (
        <Reveal className="mb-20 border-t border-neutral-900/10 pt-12 dark:border-neutral-100/10">
          <a href={split.link} className="group grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                {split.year}
                {split.role ? ` · ${split.role}` : ''}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{split.name}</h3>
              <p className="mt-4 max-w-sm text-neutral-600 dark:text-neutral-400">{split.description}</p>
              <Highlights items={split.highlights} />
              <TechTags tech={split.tech} />
            </div>
            <ProjectVisual
              index={split.index}
              className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </a>
        </Reveal>
      )}

      {rail.length > 0 && (
        <Reveal className="mb-20 border-t border-neutral-900/10 pt-12 dark:border-neutral-100/10">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
            Scroll →
          </p>
          <div className="rail flex gap-6 overflow-x-auto pb-4">
            {rail.map((project) => (
              <a key={project.name} href={project.link} className="group w-[78vw] flex-none sm:w-[380px]">
                <ProjectVisual
                  index={project.index}
                  className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                  {project.year}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>
              </a>
            ))}
          </div>
        </Reveal>
      )}

      {list.length > 0 && (
        <div className="border-t border-neutral-900/10 dark:border-neutral-100/10">
          {list.map((project, i) => (
            <Reveal key={project.name} delay={i * 60}>
              <a
                href={project.link}
                className="group flex items-center justify-between gap-6 border-b border-neutral-900/10 py-6 dark:border-neutral-100/10"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">{project.index}</span>
                  <h3 className="font-display text-lg font-medium tracking-tight sm:text-xl">{project.name}</h3>
                  <span className="hidden text-sm text-neutral-500 dark:text-neutral-500 sm:inline">
                    {project.description}
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="hidden font-mono text-xs text-neutral-500 dark:text-neutral-500 md:inline">
                    {project.tech.join(' / ')}
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-dim dark:group-hover:text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
