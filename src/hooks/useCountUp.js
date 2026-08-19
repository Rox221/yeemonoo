import { useEffect, useRef, useState } from 'react'

export function useCountUp(end, { duration = 1200, threshold = 0.4 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, threshold])

  return { ref, value }
}
