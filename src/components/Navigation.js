/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import Link from "./Link"
import Logo from "./icons/Logo"

function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useState(() => {
    if (!window) {
      return
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function onScroll() {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <nav
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        color: "neutralVariants.100",
        transition: "all 0.3s ease",
        background: "white",
        boxShadow: scrolled ? "1px 2px 18px" : "none",
        py: scrolled ? 2 : 3,
        "@media (max-width: 725px)": {
          px: 3,
        },
      }}
    >
      <div
        sx={{
          color: "text",
          maxWidth: "container",
          mx: "auto",
          fontSize: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GatsbyLink to="/">
          <h1 sx={{ display: "flex", alignItems: "center", my: 0 }}>
            <Logo sx={{ width: 36, height: 36, mr: 2 }} />
            Alex Luong
          </h1>
        </GatsbyLink>
        <div>
          <Link to="/">About</Link>
          <Link to="/blog" isLast>
            Writing
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
