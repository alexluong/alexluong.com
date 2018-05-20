import styled from 'styled-components';

const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    max-width: 20rem;
  }
`;

export default ImageContainer;