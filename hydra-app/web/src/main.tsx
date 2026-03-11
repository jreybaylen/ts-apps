import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@pages/App'

const htmlRootElement = document.getElementById('root') as HTMLElement
const rootElement = createRoot(htmlRootElement)

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
