import { createGlobalStyle, css } from "styled-components"
// Themes
import dracula from "./dracula"

const jsColor = css`
  pre.javascript:after,
  pre.javascript:before,
  pre.js:after,
  pre.js:before {
    background: #ffe725;
  }
`

const PrismTheme = createGlobalStyle`
  body {
    margin: 5rem;
  }

  /* Line above */
  pre::before {
    content: attr(class);
    position: absolute;
    top: 6px;
    right: 10px;
    padding: 0 10px 3px;
    font-size: 10px;
    text-align: right;
    color: #444;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;
    background: #ddd;
  }

  pre::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: #ddd;
  }

  /* Color theme for lines based on language */
  ${jsColor}

  /* Common typography for codes */
  code,
  pre {
    text-shadow: none;
    font-family: "SFMono-Regular", "Consolas", "Bitstream Vera Sans Mono",
      "Courier New", Courier, monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    position: relative;

    @media print {
      text-shadow: none;
    }
  }

  pre {
    font-size: 14px;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
  }

  :not(pre) > code {
    border-radius: 2px;
    padding: 0 6px;
    background: #f5f5f5;
    color: #ef3b7d;
  }

  /* Theme --> TODO: Light option */
  ${dracula}
`

export default PrismTheme
