import styled      from 'styled-components';

const TypistWrapper = styled.div`
  display: ${props => props.isHome ? 'block' : 'none'};
  width: 100%;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  * {
    font-size: 4.6rem;
  }
`;

const TypistContent = styled.h1`
  display: inline;
  opacity: 1;
`;

export { TypistWrapper, TypistContent };

