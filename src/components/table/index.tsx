import React, { useCallback, useEffect, useState } from 'react'
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa'

import Api from '../../config/api'
import { Container, ContainerModal } from './styles'

interface IUser {
  id: string
  email: string
  password?: string
  cpf: string
  phone: string
  name: string
}

const table: React.FC = () => {
  const token = JSON.parse(localStorage.getItem('token') || '{}')
  const [users, setUsers] = useState<IUser[]>([])
  const [user, setUser] = useState<IUser>({
    id: '',
    email: '',
    name: '',
    cpf: '',
    phone: '',
    password: ''
  })
  const [error, setError] = useState({
    emailError: '',
    nameError: '',
    cpfError: '',
    phoneError: '',
    passError: ''
  })

  useEffect(() => {
    async function getUserApi() {
      const response = await Api.get('/getUsers', {
        headers: { Authorization: `bearer ${token}` }
      })
      setUsers(response.data)
    }

    getUserApi()
  }, [])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const setUpdateUser = async (item: IUser) => {
    setUser(item)
  }

  const deleteUser = useCallback(async id => {
    if (confirm('confirm delete user ?')) {
      const response = await Api.delete(`/deleteUser/${id}`, {
        headers: { Authorization: `bearer ${token}` }
      })
      setUsers(response.data)
    }
  }, [])

  // subimit form update
  const SubmitFormUpdate = async (id: string) => {
    if (
      user.name === '' ||
      user.email === '' ||
      user.phone === '' ||
      user.cpf === ''
    ) {
      alert('algum campo ficou vazio')
    } else {
      if (
        error.emailError === '' &&
        error.phoneError === '' &&
        error.cpfError === ''
      ) {
        const response = await Api.put(
          `/updateUser/${id}`,
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            cpf: user.cpf
          },
          {
            headers: { Authorization: `bearer ${token}` }
          }
        )
        setUsers(response.data)
      }
    }
  }

  // submit form create
  const SubmitFormCreate = async () => {
    if (
      user.name === '' ||
      user.email === '' ||
      user.phone === '' ||
      user.cpf === '' ||
      user.password === ''
    ) {
      alert('insert correct data')
    } else {
      if (
        error.emailError === '' &&
        error.phoneError === '' &&
        error.cpfError === '' &&
        error.passError === ''
      ) {
        const response = await Api.post(
          '/createUser',
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            cpf: user.cpf,
            password: user.password
          },
          {
            headers: { Authorization: `bearer ${token}` }
          }
        )
        setUsers(response.data)
      }
    }
  }

  const validadName = () => {
    const errors = { nameError: '' }

    switch (true) {
      case !user.name:
        errors.nameError = 'nome obrigatorio'
        break
      default:
        errors.nameError = ''
        break
    }

    setError({
      ...error,
      nameError: errors.nameError
    })
  }

  const validadEmail = () => {
    const errors = { emailError: '' }

    switch (true) {
      case !user.email:
        errors.emailError = 'email obrigatorio'
        break
      case !user.email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i):
        errors.emailError = 'email mal formatado(ex@ex.com)'
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

  const validadCpf = () => {
    const errors = { cpfError: '' }

    switch (true) {
      case !user.cpf:
        errors.cpfError = 'cpf obrigatorio'
        break
      case !user.cpf.match(/(\d{3})(\d{3})(\d{3})(\d{2})/):
        errors.cpfError = 'cpf mal formatado(12345678912)'
        break
      default:
        errors.cpfError = ''
        break
    }

    setError({
      ...error,
      cpfError: errors.cpfError
    })
  }

  const validadPhone = () => {
    const errors = { phoneError: '' }

    switch (true) {
      case !user.phone:
        errors.phoneError = 'phone obrigatorio'
        break
      case !user.phone.match(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/):
        errors.phoneError = 'phone mal formatado(73999025453)'
        break
      default:
        errors.phoneError = ''
        break
    }

    setError({
      ...error,
      phoneError: errors.phoneError
    })
  }

  const validadPassword = () => {
    const errors = { passError: '' }

    switch (true) {
      case !user.password:
        errors.passError = 'senha obrigatoria'
        break
      case user.password!.length <= 5:
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
      <div className="containerButton">
        <button
          type="button"
          className="btn btn-primary button-add"
          data-toggle="modal"
          data-target="#modalExemplo1"
        >
          adicionar
        </button>
      </div>

      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Email</div>
            <div className="col col-3">Phone</div>
            <div className="col col-4">Cpf</div>
            <div className="col col-5">Ações</div>
          </li>

          {users?.map((item, i) => {
            return (
              <div key={i}>
                <li className="table-row">
                  <div className="col col-1" data-label="Name">
                    {item.name}
                  </div>
                  <div className="col col-2" data-label="Email">
                    {item.email}
                  </div>
                  <div className="col col-3" data-label="Phone">
                    {item.phone}
                  </div>
                  <div className="col col-4" data-label="Cpf">
                    {item.cpf}
                  </div>
                  <div className="col col-5" data-label="Acoes">
                    <FaTrashAlt onClick={() => deleteUser(item.id)} />
                    <button
                      type="button"
                      className="btn btn-secondary button-edit"
                      data-toggle="modal"
                      data-target="#modalExemplo"
                      onClick={() => setUpdateUser(item)}
                    >
                      <FaUserEdit />
                    </button>
                  </div>
                </li>

                <ContainerModal>
                  {/* MODAL UPDATE USER */}
                  <div
                    className="modal fade"
                    id="modalExemplo"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Atualizar usuário
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Fechar"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="name"
                              value={user.name}
                              onBlur={validadName}
                              onChange={handleChange}
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                            <div className="error">{error.nameError}</div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="email"
                              value={user.email}
                              onBlur={validadEmail}
                              onChange={handleChange}
                              aria-label="email"
                              aria-describedby="basic-addon1"
                            />
                            <div className="error">{error.emailError}</div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              placeholder="phone"
                              value={user.phone}
                              onBlur={validadPhone}
                              onChange={handleChange}
                              aria-label="phone"
                              aria-describedby="basic-addon1"
                            />
                            <div className="error">{error.phoneError}</div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="cpf"
                              className="form-control"
                              placeholder="cpf"
                              value={user.cpf}
                              onBlur={validadCpf}
                              onChange={handleChange}
                              aria-label="cpf"
                              aria-describedby="basic-addon1"
                            />
                            <div className="error">{error.cpfError}</div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button
                            onClick={() => SubmitFormUpdate(user.id)}
                            type="button"
                            className="btn btn-primary"
                          >
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MODAL CREATE USER */}
                  <div
                    className="modal fade"
                    id="modalExemplo1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar usuário
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Fechar"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form>
                          <div className="modal-body">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="name"
                                onBlur={validadName}
                                onChange={handleChange}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                              <div className="error">{error.nameError}</div>
                            </div>
                            <div className="input-group mb-3">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="email"
                                onBlur={validadEmail}
                                onChange={handleChange}
                                aria-label="email"
                                aria-describedby="basic-addon1"
                              />
                              <div className="error">{error.emailError}</div>
                            </div>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="phone"
                                onBlur={validadPhone}
                                onChange={handleChange}
                                aria-label="phone"
                                aria-describedby="basic-addon1"
                              />
                              <div className="error">{error.phoneError}</div>
                            </div>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="cpf"
                                className="form-control"
                                placeholder="cpf"
                                onBlur={validadCpf}
                                onChange={handleChange}
                                aria-label="cpf"
                                aria-describedby="basic-addon1"
                              />
                              <div className="error">{error.cpfError}</div>
                            </div>
                            <div className="input-group mb-3">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="password"
                                onChange={handleChange}
                                onBlur={validadPassword}
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                minLength={6}
                              />
                              <div className="error">{error.passError}</div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Fechar
                            </button>
                            <button
                              onClick={SubmitFormCreate}
                              type="button"
                              className="btn btn-primary"
                            >
                              Salvar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </ContainerModal>
              </div>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default table
