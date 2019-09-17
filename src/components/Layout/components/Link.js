/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ isLast, ...props }) => (
  <Link
    {...props}
    sx={{
      mr: isLast ? 0 : 3,
      color: "link",
      ":hover": {
        color: "text",
      },
    }}
  />
)
