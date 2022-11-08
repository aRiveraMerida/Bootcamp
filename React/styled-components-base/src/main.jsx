import React from 'react'
import ReactDOM from 'react-dom/client'


// provider de emotion
import { ThemeProvider } from '@emotion/react'

// nuestra funcionalidad
import GlobalStyles from './styles/GlobalStyles'
import { createTheme } from './styles/utils'
import theme from './styles/theme'


import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
