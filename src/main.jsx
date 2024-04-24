import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes.jsx'
import AuthProvider from './authContext/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
      <AllRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
