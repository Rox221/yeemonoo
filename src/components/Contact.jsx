import { profile } from '../data/portfolioData'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const links = [
  { label: 'GitHub', href: profile.social.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedInIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-bone">
      <div className="bg-grid pointer-events-none absolute inset-0 text-bone/[0.05]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-bone/50">
            <span className="text-accent">(05)</span>
            <span>Contact</span>
          </div>
          <div className="mt-3 h-px w-full bg-bone/10" />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-12 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Let&rsquo;s build something worth shipping.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-md text-bone/60">
            {profile.availability} — reach out directly, or find me on GitHub and LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href={profile.social.email}
            className="group mt-10 inline-flex items-baseline gap-3 font-display text-2xl font-medium sm:text-4xl"
          >
            <span className="border-b border-bone/20 pb-1 transition-colors duration-300 group-hover:border-accent">
              {profile.email}
            </span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-bone/10 pt-8 font-mono text-sm uppercase tracking-widest">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-2 text-bone/70 transition-colors duration-300 hover:text-bone"
              >
                <link.Icon className="h-4 w-4" />
                {link.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
