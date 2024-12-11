import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'boxicons/css/boxicons.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
