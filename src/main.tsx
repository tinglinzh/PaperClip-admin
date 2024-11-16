import NProgress from '@/components/progress'
import { Suspense } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app'
import store from './stores/store'
import '@/assets/styles/main.css'
import '../index.css'
import '@/assets/fonts/result.css'
import '@/i18n'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <Suspense fallback={<NProgress />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
)
