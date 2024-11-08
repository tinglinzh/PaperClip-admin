import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from './locales/resources'

export const defaultNS = 'translation'
export const fallbackLanguage = 'en'

export function initI18n() {
  i18next.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: fallbackLanguage,
    defaultNS,
    ns: [defaultNS],
    resources,
  })
}

initI18n()
