/** @jsx jsx */
import { jsx } from "theme-ui"
import ArticleList from "../components/ArticleList"

function BlogPage() {
  return (
    <div sx={{ maxWidth: "container", mx: "auto" }}>
      <section sx={{ pt: 3 }}>
        <ArticleList />
      </section>
    </div>
  )
}

export default BlogPage
