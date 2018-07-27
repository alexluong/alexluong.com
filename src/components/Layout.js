import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';

import config from '../../data/config';
import theme from 'theme';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        title={config.siteTitle}
        meta={[{ name: 'description', content: config.siteDescription }]}
      />
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
