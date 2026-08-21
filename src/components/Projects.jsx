import { profile, projects } from '../data/portfolioData'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function TechTags({ tech }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
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

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <a href={project.link} className="group flex h-full flex-col">
        <ProjectVisual
          project={project}
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <div className="mt-5 flex-1">
          <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">{project.year}</p>
          <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight sm:text-xl">{project.name}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>
          <TechTags tech={project.tech} />
        </div>
        <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-neutral-500 transition-colors duration-300 group-hover:text-accent-dim dark:text-neutral-500 dark:group-hover:text-accent">
          View
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </a>
    </Reveal>
  )
}

function SeeAllCard({ delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={profile.social.github}
        className="group flex aspect-square h-full flex-col justify-between border border-neutral-900/10 p-6 transition-all duration-500 hover:scale-[1.015] hover:border-accent-dim/40 dark:border-neutral-100/10 dark:hover:border-accent/40"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          On GitHub
        </span>
        <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
          See all projects{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </span>
      </a>
    </Reveal>
  )
}

export default function Projects() {
  const primary = projects.filter((p) => p.variant === 'primary')
  const secondary = projects.filter((p) => p.variant === 'secondary')

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-10">
      <SectionHeading title="Projects" description="A handful of case studies — the rest live on GitHub." />

      {primary.length > 0 && (
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {primary.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 80} />
          ))}
        </div>
      )}

      {secondary.length > 0 && (
        <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-neutral-900/10 pt-16 sm:grid-cols-3 dark:border-neutral-100/10">
          {secondary.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 80} />
          ))}
          <SeeAllCard delay={secondary.length * 80} />
        </div>
      )}
    </section>
  )
}
