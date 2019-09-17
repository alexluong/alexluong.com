/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ArticleList from "../components/ArticleList"
import ProjectList from "../components/ProjectList"
import TwitterIcon from "../components/icons/TwitterIcon"
import GitHubIcon from "../components/icons/GitHubIcon"

function IndexPage() {
  return (
    <React.Fragment>
      <div sx={{ mt: 50 }}>
        <h1 sx={{ fontSize: 5 }}>Hey, I'm Alex</h1>
        <p sx={{ fontSize: 2, mb: 3 }}>
          I write about my journey in tech and all the technologies I love.
        </p>
        <button sx={{ variant: "buttons.twitter", mr: 2 }}>
          <TwitterIcon sx={{ width: 20, height: 20, mr: 1 }} />
          Twitter
        </button>
        <button sx={{ variant: "buttons.github" }}>
          <GitHubIcon sx={{ width: 20, height: 20, mr: 1 }} />
          GitHub
        </button>
      </div>

      <section>
        <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Latest Articles</h2>
        <ArticleList />
      </section>

      <section>
        <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Projects</h2>
        <ProjectList />
      </section>
    </React.Fragment>
  )
}

export default IndexPage
