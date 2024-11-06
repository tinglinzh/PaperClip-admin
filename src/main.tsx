import router from '@/router/index.ts'
import { StrictMode } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/assets/styles/main.css'
import '../index.css'
import '@/assets/fonts/result.css'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
