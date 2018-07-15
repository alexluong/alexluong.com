import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import config from '../../data/config';

import Layout from '../components/Layout';
import MarkdownToHTML from 'components/MarkdownToHTML';

const Page = props => {
  const page = props.data.contentfulPage;
  const { title, body } = page;
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>

      <article>
        <h1>{title}</h1>
        <MarkdownToHTML md={body.body} />
      </article>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
    }
  }
`;
