/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "./Link"

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
        <h1>Alex Luong</h1>
        <div>
          <Link to="/">About</Link>
          <Link to="/">Articles</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
