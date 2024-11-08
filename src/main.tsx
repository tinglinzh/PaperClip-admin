import { Suspense } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './app'
import '@/assets/styles/main.css'
import '../index.css'
import '@/assets/fonts/result.css'
import '@/i18n'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
)
