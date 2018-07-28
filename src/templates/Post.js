import React from 'react';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import config from '../../data/config';

import Layout from '../components/Layout';
import SEO from 'components/SEO';
import DateAndCategories from 'components/DateAndCategories';
import HTMLBody from 'components/HTMLBody';
import AuthorBox from 'components/AuthorBox';
import Disqus from 'components/Disqus';

const Post = props => {
  const contentfulBlogPost = props.data.contentfulBlogPost;
  const {
    title,
    slug,
    excerpt,
    createdAt,
    categories,
    body,
    author,
    featuredImage,
  } = contentfulBlogPost;

  const postNode = {
    title,
    description: excerpt.excerpt,
    featuredImage: `https:${featuredImage.file.url}`,
    slug,
  };

  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={`/${slug}`} postNode={postNode} postSEO />

      <article>
        <h1 className={titleCss}>{title}</h1>
        <DateAndCategories createdAt={createdAt} categories={categories} />

        <Image
          alt={featuredImage.title}
          fluid={featuredImage.fluid}
          outerWrapperClassName={imageWrapperCss}
        />

        <PostSection html={body.childMarkdownRemark.html} />
        <MarginBottomHr />
        <AuthorBox author={author} />
        <MarginBottomHr />
        <Disqus postNode={postNode} />
      </article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
      body {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        file {
          url
        }
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      author {
        displayName
        description {
          description
        }
        website
        github
        linkedin
        twitter
        facebook
      }
    }
  }
`;

const titleCss = css`
  margin-bottom: 0;
`;

const PostSection = styled(HTMLBody)`
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const MarginBottomHr = styled.hr`
  margin-bottom: 3rem;
`;

const imageWrapperCss = css`
  margin: 1rem 0 3rem 0;
`;
