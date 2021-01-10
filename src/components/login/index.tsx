import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../contexts/auth'

import { Container } from './styles'

interface User {
  email: string
  password: string
}

const login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' })

  const { signIn } = useContext(AuthContext)
  const history = useHistory()

  // subimit form
  const SubmitForm = async () => {
    const response = await signIn(user)

    if (response !== null) {
      return history.push('/')
    }
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
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
                      onChange={handleChange}
                      pattern="^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"
                    />
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
                      onChange={handleChange}
                      minLength={6}
                    />
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
