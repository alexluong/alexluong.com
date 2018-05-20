import styled      from 'styled-components';

const TypistWrapper = styled.div`
  display: ${props => props.isHome ? 'block' : 'none'};
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  * {
    font-size: 4.6rem;
  }
`;

const TypistContent = styled.h1`
  display: inline;
  opacity: 1;
`;

export { TypistWrapper, TypistContent };

