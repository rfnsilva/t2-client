import React from 'react'

import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  MenuLink,
  MenuBtn,
  MenuBtnWrapper
} from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
}

const menuToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink href="#">logout</MenuLink>
        </Menu>

        <MenuBtnWrapper>
          <MenuBtn>Sign In</MenuBtn>
        </MenuBtnWrapper>
      </Wrapper>
    </Container>
  )
}
export default menuToggle
