import styled from 'styled-components';

const Container = styled.div`
  z-index: 2;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  padding-left: ${props => props.theme.xPadding};
  padding-right: ${props => props.theme.xPadding};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.header.pageHeight};
  font-size: 2rem;
  a, a:visited {
    color: #fff;
  }
`;

export default Container;