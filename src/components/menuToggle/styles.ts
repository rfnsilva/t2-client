import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

import { Props } from '.'

export const Container = styled.div<Props>`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${props => (props.isOpen ? '100%' : '0')};
  top: ${props => (props.isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Wrapper = styled.div`
  color: #fff;
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 68px);
  }
`

// transformar isso em um link
export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #eb533f;
    transition: 0.2s ease-in-out;
  }
`

export const MenuBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// transformar isso em um link
export const MenuBtn = styled.div`
  border-radius: 50px;
  background: #eb533f;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
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
