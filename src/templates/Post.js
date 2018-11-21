import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

function PostTemplate({ data: { post } }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      timeToRead
      html
    }
  }
`
