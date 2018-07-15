import styled from 'styled-components';

const Container = styled.footer`
  height: 10rem;
  width: 100%;
  background-color: #6b6b6b;
  color: #fff;
  padding-left: ${props => props.theme.xPadding};
  padding-right: ${props => props.theme.xPadding};
  a,
  a:visited,
  a:hover {
    color: #fff;
    text-decoration: none;
    box-shadow: none;
    transition: box-shadow 0.5s ease-out;
    padding-bottom: 5px;
    &:hover {
      box-shadow: 0 5px 0 -4px currentColor;
    }
  }
`;

export default Container;
