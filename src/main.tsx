//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './App.css'
import App from './App.tsx'
import SeoProvider from './components/seo/SeoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <SeoProvider>
    <App />
  </SeoProvider>,
)
