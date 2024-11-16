import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from './locales/resources'

export const defaultNS = 'translation'
export const fallbackLanguage = 'en'

export function initI18n() {
  i18next.use(initReactI18next).use(LanguageDetector).init({
    resources,
    fallbackLng: fallbackLanguage,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
    },
  })
}

initI18n()
