import { useStaticQuery, graphql } from "gatsby"

export function useLatestArticles() {
  const { allArticle } = useStaticQuery(graphql`
    query LatestArticleQuery {
      allArticle(limit: 5, sort: { fields: date, order: DESC }) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return allArticle.nodes
}
