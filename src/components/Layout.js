import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import config from '../../data/config';
import theme from 'theme';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, location }) => {
  console.log('layout');
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[{ name: 'description', content: config.siteDescription }]}
        />
        <Header location={location} />
        <Main>{children}</Main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
