import styled from 'styled-components';

const Article = styled.article`
  height: ${props => props.theme.blogListing.height};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-top: ${props => props.theme.blogListing.articleSpacing};
  margin-bottom: ${props => props.theme.blogListing.articleSpacing};
  transition: all 0.3s ease;

  display: grid;
  grid-template-areas: 'image body';
  grid-template-columns: ${props => props.theme.blogListing.height} auto;
  grid-column-gap: 4rem;

  @media screen and (max-width: ${props => props.theme.size.md}) {
    grid-template-areas:
      'image'
      'body';
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    height: auto;
  }

  @media screen and (min-width: ${props => props.theme.size.lg}) {
    &:hover {
      overflow: initial;
      transform: scale(1.1);
      z-index: 3;
      & * {
        z-index: 3;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 10rem);
        height: calc(100% + 10rem);
        transform: translate(-5rem, -5rem);
        box-shadow: 0px 5px 19px 5px rgba(206, 206, 206, 1);
        z-index: 2;
      }
    }
  }

  h4 {
    font-size: 1.6rem;
  }
`;

export default Article;
