import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Post from "./Post"

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

function PostListing({ posts, ...props }) {
  return (
    <Container {...props}>
      {posts.map(data => {
        // Get post object
        // Post array is different
        // between main listing (allContentfulBlogPost) and
        // category listing (contentfulCategory)
        let post
        if (data.post) {
          post = data.post
        } else {
          post = data
        }

        return <Post key={post.id} id={post.id} post={post} />
      })}
    </Container>
  )
}

PostListing.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostListing
