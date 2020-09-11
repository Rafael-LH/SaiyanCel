import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  a{
    text-decoration: none;
  }
`
export default GlobalStyle