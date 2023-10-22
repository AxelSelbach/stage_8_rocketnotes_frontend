import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Details } from './pages/Details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
