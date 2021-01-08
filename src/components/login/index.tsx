import React from 'react'

import { MenuForm, Container, Options } from './styles'

const login: React.FC = () => {
  const handleChange = async () => {
    console.log('aqui')
  }

  return (
    <Container>
      <h1>Login</h1>

      <MenuForm>
        <input
          type="email"
          placeholder="email pessoal"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="senha"
          name="senha"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </MenuForm>

      <Options>
        <a>cadastrar</a>

        <a>forgot</a>
      </Options>
    </Container>
  )
}

export default login
