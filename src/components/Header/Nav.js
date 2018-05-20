import styled from 'styled-components';

const Nav = styled.nav`
height: 100%;
ul {
  font-family: 'PT Sans', sans-serif;
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    &:not(:first-of-type) {
      margin-left: 4rem;
    }
    a {
      display: block;
    }
  }
}
`;

export default Nav;