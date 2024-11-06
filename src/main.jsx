import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PasswordGenerator from './passwordGenerator.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PasswordGenerator />
  </StrictMode>
)
