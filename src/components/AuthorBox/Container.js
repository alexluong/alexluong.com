import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  min-height: 20rem;
  display: grid;
  grid-template-areas:
    "image data"
    ". social";
  grid-template-columns: 15rem auto;
  grid-column-gap: 5rem;
  grid-template-rows: auto 7.5rem;
  @media screen and (max-width: ${props => props.theme.size.md}) {
    grid-template-areas:
      "image"
      "data"
      "social";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 2rem;
  }
`;

export default Container;