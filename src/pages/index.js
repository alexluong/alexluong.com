import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
// UIs
import Post from "components/Post"

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 2.6rem 1.2rem;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;

  @media (min-width: 600px) {
    padding: 4rem 8rem;
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(auto-fill, minmax(357px, 1fr));
  }

  @media (min-width: 1220px) {
    padding: 8rem 10rem;
  }
`

function IndexPage({
  data: {
    allContentfulBlogPost: { allPosts },
  },
}) {
  return (
    <div style={{ background: "#f4f8fb" }}>
      <Container>
        {allPosts.map(({ post }) => (
          <Post key={post.id} id={post.id} post={post} />
        ))}
      </Container>
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allContentfulBlogPost(limit: 10, sort: { fields: [date], order: DESC }) {
      allPosts: edges {
        post: node {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          excerpt {
            excerpt
          }
          categories {
            name
            slug
          }
          img: featuredImage {
            description
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
