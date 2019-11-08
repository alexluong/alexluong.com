/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useSocial } from "../utils/queries"
import SEO from "../components/SEO"
import SubscriptionBanner from "../components/SubscriptionBanner"
import LatestArticleList from "../components/LatestArticleList"
import ProjectList from "../components/ProjectList"
import TwitterIcon from "../components/icons/TwitterIcon"
import GitHubIcon from "../components/icons/GitHubIcon"

function IndexPage() {
  const social = useSocial()

  return (
    <React.Fragment>
      <SEO isArticle={false} />
      <div
        sx={{
          maxWidth: "container",
          mx: "auto",
          "@media (max-width: 725px)": {
            px: 3,
          },
        }}
      >
        <div sx={{ pt: 3 }}>
          <h1 sx={{ fontSize: 5, fontFamily: "heading", color: "primary" }}>
            Hey, I'm Alex
          </h1>
          <p sx={{ fontSize: 2, mb: 3 }}>
            I write about JavaScript, React, and lots and lots of Gatsby.
          </p>
          <a
            tabIndex={0}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${social.twitter}`}
            sx={{
              variant: "buttons.twitter",
              mr: 2,
            }}
          >
            <TwitterIcon sx={{ width: 20, height: 20, mr: 1 }} />
            Follow
          </a>
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${social.github}`}
            sx={{ variant: "buttons.github", lineHeight: 1 }}
          >
            <GitHubIcon sx={{ width: 20, height: 20, mr: 1 }} />
            Follow
          </a>
        </div>

        <SubscriptionBanner />

        <section>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              mt: 5,
            }}
          >
            <h2 sx={{ fontSize: 4, m: 0 }}>Latest Articles</h2>
            <Link
              to="/blog"
              sx={{ variant: ["buttons.tertiary", "buttons.small"] }}
            >
              View all
            </Link>
          </div>
          <LatestArticleList />
        </section>

        <section>
          <h2 sx={{ fontSize: 4, mb: 3, mt: 5 }}>Projects</h2>
          <ProjectList />
        </section>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
