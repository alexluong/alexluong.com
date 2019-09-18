import { useStaticQuery, graphql } from "gatsby"

export function useAllArticles() {
  const { allArticle } = useStaticQuery(graphql`
    query AllArticleQuery {
      allArticle(sort: { fields: date, order: DESC }) {
        nodes {
          slug
          title
          description
          timeToRead
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `)

  return allArticle.nodes
}
