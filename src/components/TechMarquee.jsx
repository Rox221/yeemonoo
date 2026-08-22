import { useLanguage } from '../context/LanguageContext'

export default function TechMarquee() {
  const { skills } = useLanguage()
  const items = skills.flatMap((group) => group.items.filter((i) => i.level >= 4).map((i) => i.name))
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-neutral-900/10 py-4 dark:border-neutral-100/10">
      <div className="rail flex w-max gap-10 animate-marquee font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {track.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            {name}
            <span className="text-accent-dim dark:text-accent" aria-hidden="true">
              ▪
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
