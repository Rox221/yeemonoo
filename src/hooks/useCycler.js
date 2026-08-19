import { useEffect, useState } from 'react'

export function useCycler(words, { interval = 2200 } = {}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words, interval])

  return words[index]
}
