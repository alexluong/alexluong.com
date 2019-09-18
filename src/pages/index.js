/** @jsx jsx */
import { jsx } from "theme-ui"
import LatestArticleList from "../components/LatestArticleList"
import ProjectList from "../components/ProjectList"
import TwitterIcon from "../components/icons/TwitterIcon"
import GitHubIcon from "../components/icons/GitHubIcon"

function IndexPage() {
  return (
    <div sx={{ maxWidth: "container", mx: "auto" }}>
      <div sx={{ mt: 50 }}>
        <h1 sx={{ fontSize: 5 }}>Hey, I'm Alex</h1>
        <p sx={{ fontSize: 2, mb: 3 }}>
          I write about JavaScript, React, and lots and lots of Gatsby.
        </p>
        <button sx={{ variant: "buttons.twitter", mr: 2 }}>
          <TwitterIcon sx={{ width: 20, height: 20, mr: 1 }} />
          Follow
        </button>
        <button sx={{ variant: "buttons.github" }}>
          <GitHubIcon sx={{ width: 20, height: 20, mr: 1 }} />
          Follow
        </button>
      </div>

      <section>
        <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Latest Articles</h2>
        <LatestArticleList />
      </section>

      <section>
        <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Projects</h2>
        <ProjectList />
      </section>
    </div>
  )
}

export default IndexPage
