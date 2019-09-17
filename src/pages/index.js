/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ArticleList from "../components/ArticleList"

function IndexPage() {
  return (
    <React.Fragment>
      <div sx={{ mt: 50 }}>
        <h1 sx={{ fontSize: 5 }}>Hey, I'm Alex</h1>
        <p sx={{ fontSize: 3 }}>
          I write about my journey in tech and all the technologies I love.
        </p>
      </div>

      <section>
        <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Latest Articles</h2>
        <ArticleList />
      </section>
    </React.Fragment>
  )
}

export default IndexPage
