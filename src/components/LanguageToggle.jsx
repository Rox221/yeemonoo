import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage, ui } = useLanguage()

  return (
    <div
      role="group"
      aria-label={ui.languageToggle.groupLabel}
      className="inline-flex h-9 items-center rounded-full border border-neutral-900/15 p-0.5 dark:border-neutral-100/15"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`flex h-full items-center rounded-full px-3 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 ${
          language === 'en'
            ? 'bg-ink text-bone dark:bg-bone dark:text-ink'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ja')}
        aria-pressed={language === 'ja'}
        className={`flex h-full items-center rounded-full px-3 font-mono text-xs transition-colors duration-300 ${
          language === 'ja'
            ? 'bg-ink text-bone dark:bg-bone dark:text-ink'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
        }`}
      >
        日本語
      </button>
    </div>
  )
}
