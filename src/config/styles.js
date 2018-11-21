import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    z-index: 1;
    font-size: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 62.5%; /* defines 1rem = 10px */
  }
  body {
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #666;
  }
`

export default GlobalStyle
