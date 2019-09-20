/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import SEO from "../components/SEO"
import ArticleList from "../components/ArticleList"

function BlogPage() {
  return (
    <React.Fragment>
      <SEO isArticle={false} title="Writing" />

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
    </React.Fragment>
  )
}

export default BlogPage
