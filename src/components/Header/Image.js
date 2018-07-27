import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const HeaderImage = ({ data, ...props }) => (
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
    fluid={data.background.childImageSharp.fluid}
  />
);

export default props => (
  <StaticQuery
    query={graphql`
      {
        background: file(relativePath: { regex: "/background.jpeg/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderImage data={data} {...props} />}
  />
);
