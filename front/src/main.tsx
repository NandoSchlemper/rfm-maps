import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import {MapComponent} from './components/maps'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <MapComponent />
    </StrictMode>,
  )
} else {
  console.error("Elemento 'root' não encontrado na página.")
}