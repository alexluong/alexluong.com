import styled from "styled-components"

const Article = styled.article`
  padding-bottom: 10rem;

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
    font-family: "Dank Mono", "IBM Plex Mono", sans-serif;
  }

  h1 {
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 3rem;
    letter-spacing: 2px;
    color: #121212;
  }

  h2 {
    font-size: 3.4rem;
    margin-top: 6rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 2.6rem;
    margin-top: 6rem;
    margin-bottom: 1rem;
  }

  p,
  ul,
  ol {
    margin: 2rem 0;
  }

  li:first-of-type > p {
    margin-top: 0;
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
`

export default Article
