import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  padding: 2rem ${props => props.theme.xPadding};
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default Main;