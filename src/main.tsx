import { StrictMode, Suspense } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './app'
import '@/i18n'
import '@/assets/styles/main.css'
import '../index.css'
import '@/assets/fonts/result.css'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </StrictMode>,
)
