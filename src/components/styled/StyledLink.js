import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const underlineLinkCss = css`
  position: relative;

  &.active::after,
  &:hover::after {
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 4px;
    transition: transform 250ms ease;
    transform: scaleX(0);
    background-color: currentColor;
  }
`;

export { StyledLink, underlineLinkCss };
