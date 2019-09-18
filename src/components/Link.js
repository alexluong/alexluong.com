/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ isLast, to, href, children, ...props }) => {
  const style = {
    mr: isLast ? 0 : 3,
    cursor: "pointer",
    color: "link",
    ":hover": {
      color: "text",
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
