/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { usePrefix, useAllArticles } from "../utils/queries"
import ArticleInfo from "./ArticleInfo"

function ArticleList() {
  const allArticles = useAllArticles()
  const { article: articlePrefix } = usePrefix()

  return (
    <ul sx={{ listStyleType: "none", pl: 0 }}>
      {allArticles.map(article => (
        <li key={article.slug} sx={{ mb: 4 }}>
          <h2
            sx={{
              my: 0,
              fontSize: 4,
              fontFamily: "heading",
              lineHeight: 1.5,
              color: "primary",
              textDecoration: "underline",
            }}
          >
            <Link to={`/${articlePrefix}/${article.slug}`}>
              {article.title}
            </Link>
          </h2>
          <ArticleInfo date={article.date} timeToRead={article.timeToRead} />
          <p sx={{ mt: 0 }}>{article.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
