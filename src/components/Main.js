import styled from 'react-emotion';

const Main = styled.main`
  margin: 0 auto;
  padding: 2rem ${props => props.theme.xPadding};
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default Main;
