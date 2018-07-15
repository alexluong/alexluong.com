import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import config from '../../data/config';

import Layout from '../components/Layout';
import SEO from 'components/SEO';
import DateAndCategories from 'components/DateAndCategories';
import MarkdownToHTML from 'components/MarkdownToHTML';
import AuthorBox from 'components/AuthorBox';
import Disqus from 'components/Disqus';

const MarginBottomHr = styled.hr`
  margin-bottom: 3rem;
`;

const Post = props => {
  const contentfulBlogPost = this.props.data.contentfulBlogPost;
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
    <Layout>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={`/${slug}`} postNode={postNode} postSEO />

      <article>
        <PostTitle>{title}</PostTitle>
        <DateAndCategories createdAt={createdAt} categories={categories} />
        <PostSection md={body.body} />
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
        body
      }
      featuredImage {
        file {
          url
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

const PostTitle = styled.h1`
  margin-bottom: 0;
`;

const PostSection = styled(MarkdownToHTML)`
  margin-top: 5rem;
  margin-bottom: 3rem;
`;
