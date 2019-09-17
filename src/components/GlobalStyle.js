import React from "react"
import { Global, css } from "@emotion/core"

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          font-family: "Lato", sans-serif;
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        a {
          text-decoration: none;
          color: currentColor;
        }

        a:visited {
          color: currentColor;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: 1em;
        }
      `}
    />
  )
}

export default GlobalStyle
