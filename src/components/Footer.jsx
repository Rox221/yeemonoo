import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { profile, ui } = useLanguage()

  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-bone/40 sm:px-10">
        <p>© {profile.name}</p>
        <a href="#top" className="transition-colors hover:text-bone">
          {ui.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
