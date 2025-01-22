import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clock from './First.jsx'
import Sajjad from './startAgain.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Clock />
    <Sajjad />
  </StrictMode>,
  
)
