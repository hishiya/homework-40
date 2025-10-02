import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UnControlledForm from './components/Uncontrolled.jsx'
import SalaryTracker from './components/Query.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SalaryTracker/>
  </StrictMode>,
)
