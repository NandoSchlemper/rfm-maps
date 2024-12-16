import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <h1>Hehe</h1>
    </StrictMode>
  )
} else {
  console.error("Elemento 'root' não encontrado na página.")
}