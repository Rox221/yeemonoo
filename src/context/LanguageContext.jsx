import { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../data/portfolioData'

const STORAGE_KEY = 'language'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ja') return stored
  return navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = () => setLanguage((l) => (l === 'en' ? 'ja' : 'en'))

  const value = { language, setLanguage, toggleLanguage, ...content[language] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
