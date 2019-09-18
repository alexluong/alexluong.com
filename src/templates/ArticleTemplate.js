/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { formatPostDate, formatReadingTime } from "../utils/helpers"
import { useThemeUI } from "theme-ui"

function ArticleTemplate({ data: { article } }) {
  return (
    <main sx={{ mt: 4 }}>
      <Styled.h1>{article.title}</Styled.h1>
      <Styled.p sx={{ mb: 4 }}>
        {formatPostDate(article.date, "en")}
        {` - ${formatReadingTime(article.timeToRead)}`}
      </Styled.p>
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
