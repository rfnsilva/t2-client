import React from 'react'

import { AuthProvider } from './contexts/auth'

import Routes from './routes/index'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyles />
    </>
  )
}
export default App
