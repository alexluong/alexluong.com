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
  #___gatsby,
  #___gatsby > div {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 62.5%; /* defines 1rem = 10px */
  }
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #666;
    -webkit-font-smoothing: antialiased;
  }
  #___gatsby > div {
    display: grid;
    grid-template-rows: 8rem auto 8rem;
  }
`

export default GlobalStyle
