import { injectGlobal } from 'react-emotion';

injectGlobal`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    z-index: 1;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%; /* defines 1rem = 10px */
    @media screen and (max-width: 760px) {
      font-size: 56.25%;
    }
  }

  body {
    box-sizing: border-box;
    font-family: "PT Serif", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.7;
    color: #000;
  }

  #___gatsby {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  #___gatsby > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-x: hidden;
  }

  main {
    flex: 1;
  }

  header, main, footer {
    flex-shrink: 0;
  }
`;
