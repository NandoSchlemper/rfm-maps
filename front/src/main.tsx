import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Intro from './components/ui/Map'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Intro />
    </StrictMode>
  )
} else {
  console.error("Elemento 'root' não encontrado na página.")
}