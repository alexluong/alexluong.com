import React from 'react';
import styled, { css } from 'react-emotion';

import { StyledLink, underlineLinkCss } from '../styled';
import HeaderImage from './Image';
import { violet } from 'theme/colors';

const Header = props => (
  <div className={wrapperCss}>
    <Container>
      <div className={logoCss}>
        <StyledLink to="/">Alex Luong</StyledLink>
      </div>
      <ul className={navCss}>
        <li>
          <StyledLink to="/" className={underlineLinkCss}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about" className={underlineLinkCss}>
            About
          </StyledLink>
        </li>
      </ul>
    </Container>

    <HeaderImage />
  </div>
);

export default Header;

const wrapperCss = css`
  background: ${violet};
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 10vh;
`;

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
  height: 100%;
  font-size: 2rem;
  a,
  a:visited {
    color: #fff;
  }
`;

const logoCss = css`
  height: 100%;
  display: flex;
  align-items: center;
`;

const navCss = css`
  height: 100%;
  font-family: 'PT Sans', sans-serif;
  list-style: none;
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
`;
