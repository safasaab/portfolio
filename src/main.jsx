import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
    
    <NavBar/>
    
    <App />
  
    </BrowserRouter>
  </StrictMode>
)
