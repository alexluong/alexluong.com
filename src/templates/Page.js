import React  from 'react';
import Helmet from 'react-helmet';

import config from '../../data/config';

import MarkdownToHTML from 'components/MarkdownToHTML';

const Page = ({ data }) => {
  const page = data.contentfulPage;
  const { title, body } = page;
  return (
    <div>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>

      <article>
        <h1>{title}</h1>
        <MarkdownToHTML md={body.body} />
      </article>
    </div>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      slug
      body {
        body
      }
    }
  }
`;
