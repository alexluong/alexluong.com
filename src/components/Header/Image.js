import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const HeaderImage = props => (
  <StaticQuery
    query={graphql`
      {
        background: file(relativePath: { regex: "/background.jpeg/" }) {
          childImageSharp {
            sizes {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Background image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
        }}
        fluid={data.background.childImageSharp.sizes}
      />
    )}
  />
);

export default HeaderImage;
