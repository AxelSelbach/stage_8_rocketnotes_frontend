import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { Routes } from './routes'
import { MyContext } from './myContext'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ email: 'axel@gmail.com' }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
