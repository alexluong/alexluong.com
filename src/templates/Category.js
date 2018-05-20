import React  from 'react';
import Helmet from 'react-helmet';

import config from '../../data/config';

import PostListing from 'components/PostListing';

class Category extends React.Component {
  render() {
    const category = this.props.data.contentfulCategory;
    const { name, description, posts } = category;

    return (
      <div>
        <Helmet>
          <title>{`${name} | ${config.siteTitle}`}</title>
        </Helmet>

        <h1 className="mb-0">{name}</h1>
        <p>{description}</p>
        <hr />
        {posts.map(post => (
          <PostListing key={post.id} post={post} />
        ))}
      </div>
    );
  };
}

export default Category;

export const query = graphql`
  query CategoryQuery($slug: String!) {
    contentfulCategory(slug:{ eq: $slug }) {
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