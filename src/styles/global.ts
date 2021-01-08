import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
    font: 400 16px Roboto, sans-serif;
    background: #010101;
    color: #fff;
  }
  *, button, input {
    border: 0;
    background: none;
  }
`
