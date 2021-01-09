import React from 'react'

import Table from '../../components/table'
import Navbar from '../../components/navbar'

import { Container } from './styles'

const home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Table />
    </Container>
  )
}

export default home
