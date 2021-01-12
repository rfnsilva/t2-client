import React, { useState, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../contexts/auth'

import { Container } from './styles'

interface User {
  email: string
  password: string
}

const login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' })
  const [error, setError] = useState({ emailError: '', passError: '' })
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPass = useRef<HTMLInputElement>(null)
  const { signIn } = useContext(AuthContext)
  const history = useHistory()

  // subimit form
  const SubmitForm = async () => {
    if (inputEmail?.current?.value === '' || inputPass.current?.value === '') {
      alert('login ou password vazio')
    } else {
      if (error.emailError === '' && error.passError === '') {
        const response = await signIn(user)

        if (response !== undefined) {
          return history.push('/')
        } else {
          alert('login ou password incorreto')
        }
      }
    }
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const validadEmail = () => {
    const errors = { emailError: '' }

    switch (true) {
      case !user.email:
        errors.emailError = 'email obrigatorio'
        break
      case !user.email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i):
        errors.emailError = 'email mal formatado'
        break
      default:
        errors.emailError = ''
        break
    }

    setError({
      ...error,
      emailError: errors.emailError
    })
  }

  const validadPassword = () => {
    const errors = { passError: '' }

    switch (true) {
      case !user.email:
        errors.passError = 'senha obrigatoria'
        break
      case user.password.length <= 5:
        errors.passError = 'minimo de 6 caracteres'
        break
      default:
        errors.passError = ''
        break
    }

    setError({
      ...error,
      passError: errors.passError
    })
  }

  return (
    <Container>
      <div className="container">
        <div className="card card-1">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="form__group field">
                    <input
                      type="email"
                      className="form__field"
                      placeholder="email"
                      name="email"
                      id="email"
                      value={user.email}
                      ref={inputEmail}
                      onChange={handleChange}
                      onBlur={validadEmail}
                    />
                    <div className="error">{error.emailError}</div>
                    <label htmlFor="email" className="form__label">
                      email
                    </label>
                  </div>

                  <div className="form__group field">
                    <input
                      type="password"
                      className="form__field"
                      placeholder="password"
                      name="password"
                      id="password"
                      value={user.password}
                      ref={inputPass}
                      onChange={handleChange}
                      onBlur={validadPassword}
                    />
                    <div className="error">{error.passError}</div>
                    <label htmlFor="password" className="form__label">
                      password
                    </label>
                  </div>

                  <div className="css-img-button">
                    <div className="col-6 justify-content-right">
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/plasticine/100/000000/sun.png"
                      />
                    </div>
                    <div>
                      <button onClick={SubmitForm} className="login-btn">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default login
