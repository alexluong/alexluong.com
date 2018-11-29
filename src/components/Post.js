import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// UIs
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = styled(Link)`
  background: #fff;
  text-decoration: none;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(39, 44, 49, 0.1), 0 3px 16px rgba(39, 44, 49, 0.07);
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    transition: all 1s ease;
    transform: translateY(-5px);
  }

  display: grid;
  grid-template-rows: 30rem 25rem;

  &:hover {
    ${CardContent} {
      h2 {
        color: red;
      }

      p {
        opacity: 1;
      }
    }
  }
`

const CardContent = styled.div`
  padding: 0 2rem;
  color: #333;

  h2 {
    font-family: "Dank Mono", "IBM Plex Mono", sans-serif;
    font-size: 2.4rem;
    margin: 3rem 0 2rem;
  }

  p {
    font-size: 2rem;
    margin: 1rem 0;
    opacity: 0.75;
  }
`

function Post({ post }) {
  return (
    <Card to={post.slug}>
      <Img alt={post.img.description} fluid={post.img.fluid} />

      <CardContent>
        <h2>{post.title}</h2>
        <p>{post.excerpt.excerpt}</p>
      </CardContent>
    </Card>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.shape({
      excerpt: PropTypes.string,
    }),
    img: PropTypes.shape({
      description: PropTypes.string,
      fluid: PropTypes.object,
    }),
  }).isRequired,
}

export default Post
