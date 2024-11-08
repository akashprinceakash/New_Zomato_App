import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Routers from './Component/Routers'
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById('root')).render(
  <StrictMode>

<GoogleOAuthProvider clientId="280709620788-epo75gl6bvbcr6rqa1fli695n5sb4sjk.apps.googleusercontent.com">
    <Routers/>
    </GoogleOAuthProvider>    
  </StrictMode>,
)
