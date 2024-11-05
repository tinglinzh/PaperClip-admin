import { StrictMode } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '@/assets/styles/main.css'
import '../index.css'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
