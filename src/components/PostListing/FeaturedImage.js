import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';

const Container = styled.div`
  grid-area: image;
  overflow: hidden;
`;

const FeaturedImage = ({ slug, featuredImage }) => {
  if (!featuredImage) {
    return null;
  }

  return (
    <Container>
      <Link to={slug}>
        <Img
          alt={featuredImage.description}
          sizes={featuredImage.sizes}
          style={{
            textAlign: 'center',
            zIndex: 1,
          }}
        />
      </Link>
    </Container>
  );
};

export default FeaturedImage;
