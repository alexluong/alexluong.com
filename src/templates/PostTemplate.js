import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
// UIs
import SEO from "components/SEO"
import Article from "components/Article"
import ArticleLayout from "components/ArticleLayout"
import TitleContainer from "components/TitleContainer"
import HtmlRenderer from "components/HtmlRenderer"

const ItalicLink = styled(Link)`
  font-style: italic;
`

function PostTemplate({
  data: {
    post: {
      title,
      featuredImage,
      date,
      datePublished,
      categories,
      body: {
        childMarkdownRemark: { htmlAst },
      },
      excerpt: { excerpt },
    },
  },
}) {
  return (
    <React.Fragment>
      <SEO
        title={title}
        description={excerpt}
        image={featuredImage.fluid.src.slice(2)}
        datePublished={datePublished}
        isBlogPost
      />

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
    </React.Fragment>
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
      datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      categories {
        name
        slug
      }
      body {
        childMarkdownRemark {
          htmlAst
        }
      }
      excerpt {
        excerpt
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
