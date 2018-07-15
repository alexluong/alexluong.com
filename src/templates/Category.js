import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import config from '../../data/config';

import Layout from 'components/Layout';
import PostListing from 'components/PostListing';

const Category = props => {
  const category = this.props.data.contentfulCategory;
  const { name, description, posts } = category;

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`${name} | ${config.siteTitle}`}</title>
      </Helmet>

      <h1 className="mb-0">{name}</h1>
      <p>{description}</p>
      <hr />
      {posts.map(post => <PostListing key={post.id} post={post} />)}
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      description
      posts: blog_post {
        id
        title
        slug
        createdAt(formatString: "MMMM DD, YYYY")
        categories {
          name
          slug
        }
        excerpt {
          excerpt
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
`;
