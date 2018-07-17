import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import config from '../../data/config';

import Layout from 'components/Layout';
import PostListing from 'components/PostListing';
import SEO from 'components/SEO';

const Index = ({ data, ...props }) => {
  return (
    <Layout location={props.location}>
      <Helmet title={config.siteTitle} />
      <SEO />
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allContentfulBlogPost(
      limit: 10
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          excerpt {
            excerpt
          }
          categories {
            name
            slug
          }
          featuredImage {
            title
            description
            sizes(maxHeight: 700, maxWidth: 700) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`;
