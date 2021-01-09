import React, { useState, useEffect, useContext } from 'react'
import { FaBars } from 'react-icons/fa'

import MenuToggle from '../menuToggle'

import AuthContext from '../../contexts/auth'

import {
  Wrapper,
  Container,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink
} from './styles'

const navbar: React.FC = () => {
  const { signOut } = useContext(AuthContext)
  const [scrollNav, setScrollNav] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const changeScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeScrollNav)
  }, [])

  const signOutSubmit = () => {
    signOut()
  }

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <Container scrollNav={scrollNav}>
        <Wrapper>
          <Logo>T2 Software</Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink onClick={signOutSubmit} href="#">
                signOut
              </NavLink>
            </NavItem>
          </NavMenu>
        </Wrapper>
      </Container>
    </>
  )
}

export default navbar
