import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {Budgetcontext} from './context/Budgetcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <Budgetcontext>
    <App />
   </Budgetcontext>
   </BrowserRouter>
    
  </StrictMode>,
)
