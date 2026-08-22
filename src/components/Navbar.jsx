import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ theme, toggleTheme }) {
  const { profile, ui } = useLanguage()
  const links = [
    { href: '#about', label: ui.nav.about },
    { href: '#skills', label: ui.nav.skills },
    { href: '#experience', label: ui.nav.experience },
    { href: '#projects', label: ui.nav.projects },
    { href: '#contact', label: ui.nav.contact },
  ]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-neutral-900/10 bg-paper/90 backdrop-blur dark:border-neutral-100/10 dark:bg-canvas/90'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          YMO<span className="text-accent-dim dark:text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-dim transition-all duration-300 group-hover:w-full dark:bg-accent" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-dim opacity-75 dark:bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-dim dark:bg-accent" />
            </span>
            {profile.availability}
          </span>
          <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            aria-label={ui.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center border border-neutral-900/15 dark:border-neutral-100/15"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-neutral-900/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:border-neutral-100/10 dark:text-neutral-400 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
