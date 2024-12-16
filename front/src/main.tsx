import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import {MapComponent} from './components/maps'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapComponent/>
  </StrictMode>,
)
