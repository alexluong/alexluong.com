/** @jsx jsx */
import { jsx } from "theme-ui"
import ArticleList from "../components/ArticleList"

function BlogPage() {
  return (
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        "@media (max-width: 725px)": {
          px: 3,
        },
      }}
    >
      <section sx={{ pt: 3 }}>
        <ArticleList />
      </section>
    </div>
  )
}

export default BlogPage
