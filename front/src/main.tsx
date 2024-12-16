import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './components/maps'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error("Elemento 'root' não encontrado na página.")
}