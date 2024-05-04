import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.lightGrey} transparent;
  }

  body {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-weight: 700;
    font-family: 'Open Sans';
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button, input {
    border: 0;
    color: inherit;
    background: transparent;
  }
  
  button, svg {
    cursor: pointer;
  }
`
