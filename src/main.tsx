import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Import and initialize FullStory
import * as FullStory from '@fullstory/browser'

FullStory.init({ orgId: 'YOUR_ORG_ID' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
