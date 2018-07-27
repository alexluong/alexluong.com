import React from 'react';
import { push } from 'gatsby';

import Article from './Article';
import Body from './Body';
import FeaturedImage from './FeaturedImage';
import Title from './Title';
import DateAndCategories from 'components/DateAndCategories';
import MarkdownToHTML from 'components/MarkdownToHTML';

class PostListing extends React.Component {
  onClick = e => {
    push(this.props.post.slug);
  };

  onCategoriesClick = e => {
    e.stopPropagation();
  };

  render() {
    const {
      post: { featuredImage, slug, title, createdAt, excerpt, categories },
    } = this.props;

    return (
      <Article onClick={this.onClick}>
        <FeaturedImage slug={slug} featuredImage={featuredImage} />
        <Body>
          <Title title={title} slug={slug} className="my-0" />
          <DateAndCategories
            createdAt={createdAt}
            categories={categories}
            onClick={this.onCategoriesClick}
          />
          <MarkdownToHTML md={excerpt.excerpt} forceBlock />
        </Body>
      </Article>
    );
  }
}

export default PostListing;
