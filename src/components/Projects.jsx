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
          className="border border-neutral-900/10 px-2.5 py-1 font-mono text-xs text-neutral-500 transition-colors duration-300 hover:border-accent-dim/50 dark:border-neutral-100/10 dark:text-neutral-400 dark:hover:border-accent/50"
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
        <div className="-rotate-1 border border-neutral-900/10 bg-paper shadow-[6px_6px_0_0_rgba(19,18,16,0.08)] transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-0 group-hover:shadow-[10px_10px_0_0_var(--color-accent-dim)] dark:border-neutral-100/10 dark:bg-ink dark:shadow-[6px_6px_0_0_rgba(242,240,232,0.06)] dark:group-hover:shadow-[10px_10px_0_0_var(--color-accent)]">
          <ProjectVisual project={project} className="aspect-[4/3] w-full" />
        </div>

        <div className="mt-5 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent-dim dark:text-accent">
            {project.tag} · {project.year}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-dim sm:text-xl dark:group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>
          <TechTags tech={project.tech} />
        </div>

        <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-accent-dim dark:text-neutral-500 dark:group-hover:text-accent">
          View
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </a>
    </Reveal>
  )
}

function GithubCta({ delay }) {
  return (
    <Reveal delay={delay} className="flex h-full items-center justify-center sm:-translate-y-24">
      <a
        href={profile.social.github}
        className="group relative inline-flex items-center gap-3 border-2 border-ink bg-paper px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-ink shadow-[5px_5px_0_0_var(--color-accent-dim)] transition-all duration-300 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_var(--color-accent-dim)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-accent-dim)] dark:border-bone dark:bg-ink dark:text-bone dark:shadow-[5px_5px_0_0_var(--color-accent)] dark:hover:shadow-[9px_9px_0_0_var(--color-accent)] dark:active:shadow-[2px_2px_0_0_var(--color-accent)]"
      >
        See the rest on GitHub
        <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
          →
        </span>
      </a>
    </Reveal>
  )
}

export default function Projects() {
  const primary = projects.slice(0, 3)
  const secondary = projects.slice(3, 5)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-10">
      <SectionHeading title="Projects" description="Projects I've built, explored, and learned from." />

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
          <GithubCta delay={secondary.length * 80} />
        </div>
      )}
    </section>
  )
}
