import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// UIs
import Article from "components/Article"
import HtmlRenderer from "components/HtmlRenderer"

function PostTemplate({
  data: {
    post: {
      title,
      featuredImage,
      body: {
        childMarkdownRemark: { htmlAst },
      },
    },
  },
}) {
  const titleAst = {
    type: "element",
    tagName: "h1",
    properties: {},
    children: [{ type: "text", value: title }],
  }

  // Just checking this for HMR
  if (htmlAst.children[0].tagName !== "h1") {
    htmlAst.children.unshift(titleAst)
  }

  return (
    <div>
      <Article>
        <Img
          alt={featuredImage.title}
          fluid={featuredImage.fluid}
          style={{
            maxWidth: "120ch",
            maxHeight: "30vh",
            margin: "4rem auto",
          }}
        />

        <HtmlRenderer>{htmlAst}</HtmlRenderer>
      </Article>
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const query = graphql`
  query($id: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      body {
        childMarkdownRemark {
          htmlAst
        }
      }
      featuredImage {
        file {
          url
        }
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      author {
        displayName
        description {
          description
        }
        github
        twitter
      }
    }
  }
`
