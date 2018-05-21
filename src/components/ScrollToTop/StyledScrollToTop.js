import styled from 'styled-components';

import { bounce, fadeIn, fadeOut} from './Animation';

const StyledScrollToTop = styled.button`
  position: fixed;
  right: 3rem;
  bottom: 2rem;
  width: 6rem;
  height: 6rem;
  padding: 2rem;
  background-color: #000;
  cursor: pointer;
  border-radius: 100%;
  border: none;
  transition: all .5s ease-in-out;
  opacity: 0.6;
  display: none;
  justify-content: center;
  align-items: center;
  &.fade-in {
    animation: ${fadeIn} .5s ease-in-out;
    display: flex;
  }
  &.fade-out {
    display: flex;
    animation: ${fadeOut} .5s ease-in-out;
  }
  &:hover {
    opacity: .8;
    img {
      transform: rotate(0);
    }
  }
  &:visited, &:focus {
    outline: none;
  }
  img {
    transition: transform .2s ease;
    transform: rotate(-45deg);
    width: 100%;
    height: 100%;
  }
  img.hover {
    transform: rotate(0);
    animation: ${bounce} .8s ease-in-out;
  }

  @media screen and (max-width: ${props => props.theme.size.md}) {
    &, &.fade-in, &.fade-out {
      display: none;
    }
  }
`;

export default StyledScrollToTop;