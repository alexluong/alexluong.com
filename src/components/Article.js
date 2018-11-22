import styled from "styled-components"

const Article = styled.article`
  div:nth-child(2) {
    display: grid;
    grid-template-columns:
      minmax(2.6rem, 1fr) minmax(0, 15ch) minmax(auto, 70ch)
      minmax(0, 15ch) minmax(2.6rem, 1fr);

    & > * {
      grid-column: 3;
    }

    .gatsby-image-wrapper,
    .gatsby-highlight {
      grid-column: 2 / 5;
      justify-self: stretch;
      margin: 3rem 0;
    }

    @media only screen and (max-width: 750px) {
      grid-template-columns: minmax(2.6rem, 1fr) minmax(auto, 70ch) minmax(
          2.6rem,
          1fr
        );

      & > * {
        grid-column: 2;
      }

      .gatsby-image-wrapper,
      .gatsby-highlight {
        grid-column: 1 / 4;
        /* max-width: 100ch; */
      }
    }

    img {
      width: 100%;
    }

    p,
    ul,
    ol,
    li {
      font-size: 2.2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 800;
      font-family: "Dank Mono", sans-serif;
      text-rendering: optimizeLegibility;
    }

    h1 {
      font-size: 4rem;
      margin-top: 0;
      margin-bottom: 3rem;
      letter-spacing: 2px;
    }

    h2 {
      font-size: 3.4rem;
      margin-top: 6rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 2.6rem;
    }

    p,
    ul,
    ol {
      margin: 2rem 0;
    }

    p {
      font-family: "Source Sans Pro", sans-serif;
      color: rgba(0, 0, 0, 0.72);
    }

    ul,
    ol {
      padding-left: 2rem;
      color: rgba(0, 0, 0, 0.72);
    }

    a {
      text-decoration: none;
      border-bottom: 2px solid currentColor;

      &,
      &:visited {
        color: blue;
      }

      &:hover,
      &:focus {
        color: hotpink;
      }
    }
  }
`

export default Article
