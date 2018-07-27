import { injectGlobal } from 'react-emotion';
import { link, linkHover } from './colors';

injectGlobal`
  article p {
    line-height: 2;
  }

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

  code {
    font-family: 'Fira Code', Monaco, monospace;
    background-color: #ededed;
    padding: 5px;
    color: orangered;
  }

  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
    color: rgba(0,0,0,.72);
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
