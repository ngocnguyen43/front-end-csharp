import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoreProvider } from '@store'
import { ErrorBoundary } from '@components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>,
)
