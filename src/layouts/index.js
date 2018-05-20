// Load font-face
import './index.css';

import React                     from 'react';
import PropTypes                 from 'prop-types';
import Helmet                    from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import config from '../../data/config';

import theme       from 'theme';
import Header      from 'components/Header';
import Footer      from 'components/Footer';
import Main        from 'components/Main';
import ScrollToTop from 'components/ScrollToTop';

const Layout = ({ children, data, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.siteDescription }
          ]}
        />
        <Header data={data} location={location} />
        <Main>
          {children()}
        </Main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    background: imageSharp(id: {regex: "/background.jpeg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;