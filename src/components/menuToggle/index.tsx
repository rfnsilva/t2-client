import React, { useContext } from 'react'

import AuthContext from '../../contexts/auth'

import { Container, Icon, CloseIcon, Wrapper, Menu, MenuLink } from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
}

const menuToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  const { signOut } = useContext(AuthContext)

  const signOutSubmit = () => {
    signOut()
  }
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink onClick={signOutSubmit} href="#">
            signOut
          </MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default menuToggle
