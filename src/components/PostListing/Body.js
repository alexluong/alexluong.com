import styled from 'styled-components';

const Body = styled.div`
  grid-area: body;
  color: #000;
  h4 {
    margin-bottom: .7rem;
  }
  p {
    font-size: ${props => props.theme.blogListing.descriptionSize};
    @media screen and (max-width: ${props => props.theme.size.md}) {
      display: none;
    }
  }
`;

export default Body;