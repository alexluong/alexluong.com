/** @jsx jsx */
import { jsx } from "theme-ui"
import Navigation from "./Navigation"
import Link from "./Link"

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <footer
        sx={{
          maxWidth: "container",
          mx: "auto",
          py: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://alexluong.com/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS
          </Link>
        </div>
        <div></div>
      </footer>
    </div>
  )
}

export default Layout
