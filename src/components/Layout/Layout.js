/** @jsx jsx */
import { jsx } from "theme-ui"
import Navigation from "./components/Navigation"

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div sx={{ maxWidth: "container", mx: "auto" }}>{children}</div>
    </div>
  )
}

export default Layout
