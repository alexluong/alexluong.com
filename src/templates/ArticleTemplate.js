/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ArticleInfo from "../components/ArticleInfo"

function ArticleTemplate({ data: { article } }) {
  return (
    <main sx={{ mt: 4, mx: "auto", maxWidth: "container" }}>
      <Styled.h1>{article.title}</Styled.h1>
      <ArticleInfo
        date={article.date}
        timeToRead={article.timeToRead}
        sx={{ display: "block", mb: 4 }}
      />

      <MDXRenderer>{article.body}</MDXRenderer>
    </main>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($id: String!) {
    article(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      title
      body
      timeToRead
    }
  }
`
