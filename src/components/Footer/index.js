import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';
import Main from './Main';
import Copyright from './Copyright';
import Links from './Links';

const Footer = props => (
  <Container>
    <Main>
      <Copyright>
        &copy; {new Date().getFullYear()} <Link to="/">Alex Luong</Link>
      </Copyright>
      <Links>
        <li>
          <Link to="/terms-of-services">Terms of Services</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </Links>
    </Main>
  </Container>
);

export default Footer;
