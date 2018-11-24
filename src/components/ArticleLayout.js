import styled from "styled-components"

const Article = styled.div`
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

    @media only screen and (max-width: 1060px) {
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
      }
    }
  }
`

export default Article
