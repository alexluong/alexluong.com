/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import ArticleInfo from "../components/ArticleInfo"

function ArticleTemplate({ data: { article } }) {
  return (
    <React.Fragment>
      <SEO
        isArticle
        title={article.title}
        description={article.description}
        datePublished={article.datePublished}
      />
      <main
        sx={{
          pt: 4,
          mx: "auto",
          maxWidth: "container",
          "@media (max-width: 725px)": {
            px: 3,
          },
        }}
      >
        <Styled.h1>{article.title}</Styled.h1>
        <ArticleInfo
          date={article.date}
          timeToRead={article.timeToRead}
          sx={{ display: "block", mb: 4 }}
        />

        <MDXRenderer>{article.body}</MDXRenderer>
      </main>
    </React.Fragment>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($id: String!) {
    article(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      title
      body
      description
      timeToRead
    }
  }
`
