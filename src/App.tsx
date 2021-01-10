import React from 'react'

import { AuthProvider } from './contexts/auth'

import Routes from './routes/index'
import GlobalStyles from './styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

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
