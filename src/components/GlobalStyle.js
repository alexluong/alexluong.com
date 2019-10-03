import React from "react"
import { Global, css } from "@emotion/core"

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          z-index: 1;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
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

        .gatsby-code-title {
          font-family: "IBM Plex Mono", monospace;
          font-size: 15px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-color: #011627;
          border-bottom: 2px solid;
          color: #809393;
          padding: 10px 28px;
        }

        .gatsby-code-title + div > pre {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        /**
         * Quick fix
         * Issue: https://github.com/gatsbyjs/gatsby/issues/17593
         */
        .gatsby-resp-image-background-image {
          display: none !important;
        }
      `}
    />
  )
}

export default GlobalStyle
