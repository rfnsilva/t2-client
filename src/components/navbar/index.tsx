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
  const [isOpenJWT, setIsOpenJWT] = useState<boolean>(false)
  const [JWT, setJWT] = useState<string>('')

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

  const toggleJWT = () => {
    const jwtToken = JSON.parse(localStorage.getItem('token') || '{}')
    setJWT(jwtToken)
    setIsOpenJWT(!isOpenJWT)
  }

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={toggle} toggleJWT={toggleJWT} />
      <Container scrollNav={scrollNav}>
        <Wrapper>
          <Logo>T2 Software</Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu isOpenJWT={isOpenJWT}>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={toggleJWT}
              >
                JWT
              </a>
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in jwt"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">JWT token do usuário</h6>
                <div className="dropdown-item d-flex align-items-center">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="font-weight-bold">{JWT}</span>
                  </div>
                </div>
              </div>
            </li>
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
