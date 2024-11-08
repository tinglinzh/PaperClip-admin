import type resources from '../locales/resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en']
    defaultNS: 'translation'
  }
}
