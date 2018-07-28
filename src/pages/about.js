import React from 'react';
import StyledLink from 'components/styled';
import Layout from 'components/Layout';

const IndexPage = props => (
  <Layout>
    <p>
      My name is Alex Luong. I'm a Computer Science student at The University of
      Alabama. In my free time, I like to build websites and web apps.
    </p>

    <p>
      I'm trying to get more involved with the open source community. Please
      check out my journey <StyledLink to="/open-source">here</StyledLink>.
    </p>
  </Layout>
);

export default IndexPage;
