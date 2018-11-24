import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import PostList from "components/PostList"

function IndexPage({
  data: {
    allContentfulBlogPost: { posts },
  },
}) {
  return (
    <div style={{ background: "#f4f8fb" }}>
      <PostList posts={posts} />
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
      posts: edges {
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
