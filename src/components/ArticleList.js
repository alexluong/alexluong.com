/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

function ArtcileList() {
  const { allArticle } = useStaticQuery(graphql`
    query ArticleQuery {
      allArticle(limit: 5, sort: { fields: date, order: DESC }) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <div>
      {allArticle.nodes.map(article => (
        <Link
          key={article.slug}
          // to={article.slug}
          to={"/"}
          sx={{
            display: "block",
          }}
        >
          <div
            sx={{
              py: 2,
              px: 2,
              mx: -2,
              borderRadius: 4,
              color: "link",
              transition: "all 0.3s ease",
              ":hover": {
                bg: "muted",
                color: "text",
              },
            }}
          >
            <h3
              sx={{
                fontSize: 2,
                fontWeight: "body",
                my: 0,
              }}
            >
              {article.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArtcileList
