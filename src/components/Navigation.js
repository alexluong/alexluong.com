/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import Link from "./Link"
import Logo from "./icons/Logo"

function Navigation() {
  return (
    <nav>
      <div
        sx={{
          maxWidth: "container",
          mx: "auto",
          py: 2,
          fontSize: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GatsbyLink to="/">
          <h1 sx={{ display: "flex", alignItems: "center" }}>
            <Logo sx={{ width: 36, height: 36, mr: 2 }} />
            Alex Luong
          </h1>
        </GatsbyLink>
        <div>
          <Link to="/">About</Link>
          <Link to="/">Articles</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
