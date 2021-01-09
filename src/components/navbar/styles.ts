import styled from 'styled-components'
// import { Link } from 'react-scroll'
interface Props {
  scrollNav: boolean
}

export const Container = styled.nav<Props>`
  background-color: #438f96;
  height: ${props => (props.scrollNav ? '60px' : '80px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

/* transformar isso em um link */
export const Logo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`
/* transformar isso em um link */
export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #eb533f;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #eb533f;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #eb533f;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
