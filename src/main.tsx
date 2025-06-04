import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Import and initialize FullStory
import * as FullStory from '@fullstory/browser'

FullStory.init({ orgId: 'o-22QH3G-na1' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
