import React from 'react';
import Link   from 'gatsby-link';
import styled from 'styled-components';

const ItalicLink = styled(Link)`
  font-style: italic;
`;

const DateAndCategories = (props) => {
  const { createdAt, categories } = props;

  const changedProps = Object.assign({}, props);
  delete changedProps.createdAt;
  delete changedProps.categories;

  return (
    <h4>
      {createdAt}
      { categories && (
        <span>
          &nbsp;|&nbsp;
          {categories.map((category, i) => (
            <span key={i}>
              <ItalicLink to={category.slug} {...changedProps}>{category.name}</ItalicLink>
              {i < categories.length - 1
                ? (<span>&nbsp;|&nbsp;</span>)
                : null}
            </span>
          ))}
        </span>
      )}
    </h4>
  );
};

export default DateAndCategories;