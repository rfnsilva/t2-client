import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token') || '{}')

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: { Authorization: `bearer ${token}` }
})
