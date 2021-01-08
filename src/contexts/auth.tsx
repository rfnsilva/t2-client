import React, { createContext, useState, useEffect } from 'react'
import Api from '../config/api'

interface IUser {
  id?: string
  email: string
  password: string
  cpf?: string
  phone?: string
  name?: string
}

interface IToken {
  token: string
}
// interface com todos os dados necessarios
interface AuthContextData {
  signed: boolean
  token: IToken
  user: IUser | null
  signIn(user: IUser): Promise<IUser | null>
}

// criando context com tipo da interface acima
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>({ email: '', password: '' })
  const [token, setToken] = useState<IToken>({ token: '' })

  useEffect(() => {
    async function loadStorageData() {
      const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
      const tokenLocal = JSON.parse(localStorage.getItem('token') || '{}')

      setUser(userLocal)
      setToken(tokenLocal)
    }

    loadStorageData()
  }, [])

  // função que realiza o cadastro
  async function signIn(user: IUser): Promise<IUser> {
    const response = await Api.post('/session', {
      email: user.email,
      password: user.password
    })

    setUser(response.data.user)
    setToken(response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', JSON.stringify(response.data.token))

    return response.data.user
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signed: !!user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
