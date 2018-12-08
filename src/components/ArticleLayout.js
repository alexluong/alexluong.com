import styled from "styled-components"

const Article = styled.div`
  div:nth-child(2),
  div.social-sharing {
    display: grid;
    grid-template-columns:
      minmax(2.6rem, 1fr)
      minmax(auto, 70ch)
      minmax(2.6rem, 1fr);

    & > * {
      grid-column: 2;
    }

    .gatsby-image-wrapper,
    .gatsby-highlight {
      grid-column: 1 / 4;
      margin: 3rem auto;
      max-width: 100ch;
      width: 100%;
    }
  }

  div.social-sharing {
    margin-top: 10rem;

    a {
      color: #fff;

      &:hover {
        color: #fff;
        border: none;
      }
    }
  }
`

export default Article
