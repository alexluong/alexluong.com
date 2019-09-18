/** @jsx jsx */
import { jsx } from "theme-ui"
import Navigation from "./Navigation"

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
