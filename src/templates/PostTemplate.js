import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
// UIs
import Article from "components/Article"
import ArticleLayout from "components/ArticleLayout"
import TitleContainer from "components/TitleContainer"
import HtmlRenderer from "components/HtmlRenderer"

const ItalicLink = styled(Link)`
  font-style: italic;
`

// TODO: Add Helmet
function PostTemplate({
  data: {
    post: {
      title,
      featuredImage,
      date,
      categories,
      body: {
        childMarkdownRemark: { htmlAst },
      },
    },
  },
}) {
  return (
    <Article>
      <TitleContainer>
        <h1>{title}</h1>
        <h4>
          <span>{date} | </span>
          {categories.map((category, i) => (
            <span key={i}>
              <ItalicLink to={category.slug}>{category.name}</ItalicLink>
              {i < categories.length - 1 ? <span>&nbsp;|&nbsp;</span> : null}
            </span>
          ))}
        </h4>
      </TitleContainer>

      <ArticleLayout>
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
      </ArticleLayout>
    </Article>
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
