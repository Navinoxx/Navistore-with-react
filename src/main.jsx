import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from "@mui/material"
import { ProductContextProvider } from './context/contextProducts.jsx'
import '@fontsource/roboto/500.css';
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
)
