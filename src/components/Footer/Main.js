import styled from 'styled-components';

const Main = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Main;
