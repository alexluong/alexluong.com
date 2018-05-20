import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  25% {
    transform: rotate(0) translateY(0);
  }
  35% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-50%);
  }
  75% {
    transform: translateY(30%);
  }
  85% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: .6;
  }
`;

const fadeOut = keyframes`
  0% {
    display: block;
    opacity: 0.6;
  }
  99% {
    display: block;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`;

export { bounce, fadeIn, fadeOut };