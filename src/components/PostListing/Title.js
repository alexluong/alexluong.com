import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled';

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.blogListing.titleSize};
  letter-spacing: 1px;
  @media screen and (max-width: ${props => props.theme.size.md}) {
    font-size: 3rem;
  }
`;

const Title = ({ title, slug, className }) => (
  <StyledTitle className={className}>
    <StyledLink to={slug}>{title}</StyledLink>
  </StyledTitle>
);

export default Title;
