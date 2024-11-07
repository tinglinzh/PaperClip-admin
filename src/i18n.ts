import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

type SupportedLanguages = 'en_US' | 'zh_CN'

async function loadLocales(): Promise<Record<SupportedLanguages, any>> {
  const locales: Record<SupportedLanguages, any> = {} as any
  const modules = import.meta.glob('./locales/*/*.json') // 假设路径为 locales/[语言]/[模块].json

  await Promise.all(
    Object.keys(modules).map(async (filePath) => {
      const [, lang, moduleName] = filePath.match(/\.\/locales\/(\w+)\/(\w+)\.json$/) || []
      if (!lang || !moduleName)
        return

      if (!locales[lang as SupportedLanguages]) {
        locales[lang as SupportedLanguages] = {} // 为该语言初始化对象
      }

      try {
        const moduleContent = await modules[filePath]()
        locales[lang as SupportedLanguages][moduleName] = moduleContent.default || moduleContent
      }
      catch (error) {
        console.error(`Failed to load ${filePath}:`, error)
      }
    }),
  )

  return locales
}

async function initI18n() {
  const resources = await loadLocales()

  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en_US', // 默认语言
      fallbackLng: 'en_US',
      interpolation: { escapeValue: false },
      detection: {
        order: ['navigator'],
        caches: ['localStorage', 'cookie'],
      },
    })
}

const i18nPromise = initI18n().catch((error) => {
  console.error('i18next initialization failed:', error)
})

export { i18nPromise }
export default i18n
