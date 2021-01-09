import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import MenuToggle from '../menuToggle'

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
              <NavLink href="#">logout</NavLink>
            </NavItem>
          </NavMenu>
        </Wrapper>
      </Container>
    </>
  )
}

export default navbar
