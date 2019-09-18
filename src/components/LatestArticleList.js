/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { usePrefix, useLatestArticles } from "../utils/queries"

function LatestArtcileList() {
  const allArticles = useLatestArticles()
  const { article: articlePrefix } = usePrefix()

  return (
    <div>
      {allArticles.map(article => (
        <Link
          key={article.slug}
          to={`/${articlePrefix}/${article.slug}`}
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
                lineHeight: 1.2,
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

export default LatestArtcileList
