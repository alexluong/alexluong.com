import { injectGlobal } from 'styled-components';

import { link, linkHover } from './colors';

injectGlobal`
  h1 {
    margin-bottom: 3rem;
    font-size: 4.6rem;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: 2px;
  }

  h2 {
    margin-top: 2.5rem;
    font-size: 3.2rem;
    font-family: 'PT Sans', sans-serif;
  }

  h3 {
    font-size: 2.6rem;
    font-family: 'PT Sans', sans-serif;
  }
  
  h4 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-family: 'PT Serif', serif;
  }

  p {
    margin-bottom: 2rem;
    font-family: 'PT Serif', serif;
    color: rgba(0,0,0,.72);
  }

  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
    color: rgba(0,0,0,.72);
  }

  li:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  a, a:visited {
    color: ${link};
  }

  a:hover, a:focus {
    color: ${linkHover};
  }

  img {
    width: 100%;
  }

  .mt-0 {
    margin-top: 0;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;