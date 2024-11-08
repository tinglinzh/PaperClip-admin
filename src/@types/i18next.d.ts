import type resources from '../locales/resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en-US']
    defaultNS: 'translation'
  }
}
