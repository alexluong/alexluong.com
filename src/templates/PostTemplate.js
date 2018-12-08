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
import {
  Twitter,
  Facebook,
  Linkedin,
  Reddit,
  HackerNews,
  Pinterest,
} from "react-social-sharing"

const ItalicLink = styled(Link)`
  font-style: italic;
`

function PostTemplate({
  data: {
    site: {
      siteMetadata: { canonicalUrl },
    },
    post: {
      slug,
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
  const url = `${canonicalUrl}/${slug}`

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

          <HtmlRenderer id="article-content">{htmlAst}</HtmlRenderer>

          <div className="social-sharing">
            <hr />

            <p>
              Thank you for reaching the end of my post. If you enjoy it, please
              consider sharing to your favorite social media.
            </p>

            <div>
              <Twitter link={url} />
              <Facebook link={url} />
              <Linkedin link={url} />
              <Reddit link={url} />
              <HackerNews link={url} />
              <Pinterest link={url} />
            </div>
          </div>
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
    site {
      siteMetadata {
        canonicalUrl
      }
    }
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
