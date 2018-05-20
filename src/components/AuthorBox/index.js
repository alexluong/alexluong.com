import React from 'react';

import Container      from './Container';
import ImageContainer from './ImageContainer';
import Data           from './Data';
import Social         from './Social';

const AuthorBox = ({ author }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="https://cgmood.com/img/avatar-placeholder.png" alt="something"/>
      </ImageContainer>
      <Data name={author.displayName} description={author.description.description} />
      <Social 
        website={author.website || "https://alexluong.com"}
        github={author.github}
        linkedin={author.linkedin}
        twitter={author.twitter || "https://twitter.com"}
        facebook={author.facebook}
      />
    </Container>
  );
};

export default AuthorBox;