import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// De App component renderen in het element met ID "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode activeert extra controles en waarschuwingen voor ontwikkeling
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)