import { createGlobalStyle, css } from "styled-components"
// Themes
import dracula from "./dracula"

const jsColor = css`
  pre.language-javascript::after,
  pre.language-javascript::before,
  pre.language-jsx::after,
  pre.language-jsx::before,
  pre.language-js::after,
  pre.language-js::before {
    background: #ffe725;
  }
`

const jsonColor = css`
  pre.language-json::after,
  pre.language-json::before {
    background: #bc443e;
    color: #ddd;
  }
`

const mdColor = css`
  pre.language-md::after,
  pre.language-md::before {
    background: #e3a067;
  }
`

const gqlColor = css`
  pre.language-graphql::after,
  pre.language-graphql::before,
  pre.language-gql::after,
  pre.language-gql::before {
    background: #d60081;
    color: #ddd;
  }
`

const CodeStyle = createGlobalStyle`
  :not(pre) > code {
    font-family: "SFMono-Regular", "Menlo", "Inconsolata", monospace;
    font-size: 1.6rem;
    border-radius: 2px;
    padding: 4px 6px;
    background: #f5f5f5;
    color: #ef3b7d;
    hyphens: none;
  }

  /* Line above */
  pre[class*="language-"] {
    &::before {
      content: attr(data-language);
      position: absolute;
      top: 6px;
      right: 20px;
      padding: 0 10px 3px;
      font-size: 10px;
      text-align: right;
      color: #444;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      border-radius: 0 0 5px 5px;
      background: #ddd;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: #ddd;
    }
  }

  /* Color theme for lines based on language */
  ${jsColor}
  ${jsonColor}
  ${mdColor}
  ${gqlColor}

  /* Common typography for codes */
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
    font-family: "SFMono-Regular", "Menlo", "Inconsolata", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 2;
    tab-size: 2;
    hyphens: none;
    position: relative;

    @media print {
      text-shadow: none;
    }
  }

  pre[class*="language-"] {
    font-size: 1.6rem;
    padding: 6rem 4rem;
    margin: 1rem 0;
    overflow: auto;
    height: auto;
  }

  /* Theme --> TODO: Light option */
  ${dracula}
`

export default CodeStyle
