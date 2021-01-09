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
  const [users, setUsers] = useState<IUser[]>([])
  const [user, setUser] = useState<IUser>({
    id: '',
    email: '',
    name: '',
    cpf: '',
    phone: ''
  })

  useEffect(() => {
    async function getUserApi() {
      const response = await Api.get('/getUsers')
      setUsers(response.data)
    }

    getUserApi()
  }, [])

  const deleteUser = useCallback(async id => {
    const response = await Api.delete(`/deleteUser/${id}`)
    setUsers(response.data)
  }, [])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  // subimit form
  const SubmitFormUpdate = async (id: string) => {
    const response = await Api.put(`/updateUser/${id}`, {
      name: user.name,
      email: user.email,
      phone: user.phone,
      cpf: user.cpf
    })
    setUsers(response.data)
  }

  return (
    <Container>
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
                      id="button-edit"
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modalExemplo"
                    >
                      <FaUserEdit />
                    </button>
                  </div>
                </li>

                <ContainerModal>
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
                              onChange={handleChange}
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="email"
                              onChange={handleChange}
                              aria-label="email"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              placeholder="phone"
                              onChange={handleChange}
                              aria-label="phone"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="cpf"
                              className="form-control"
                              placeholder="cpf"
                              onChange={handleChange}
                              aria-label="cpf"
                              aria-describedby="basic-addon1"
                            />
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
                            onClick={() => SubmitFormUpdate(item.id)}
                            type="button"
                            className="btn btn-primary"
                          >
                            Salvar
                          </button>
                        </div>
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
