/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ isLast, to, href, children, ...props }) => {
  const style = {
    mr: isLast ? 0 : 2,
    cursor: "pointer",
    color: "link",
    px: 1,
    py: 1,
    borderRadius: 4,
    transition: "all 0.3s ease",
    ":hover": {
      bg: "primaryVariants.background",
    },
  }

  if (to) {
    return (
      <Link {...props} to={to} sx={style}>
        {children}
      </Link>
    )
  } else {
    return (
      <a {...props} href={href} sx={style}>
        {children}
      </a>
    )
  }
}
