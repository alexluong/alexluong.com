/** @jsx jsx */
import { jsx } from "theme-ui"

function NotFoundPage() {
  return (
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        "@media (max-width: 725px)": {
          px: 3,
        },
      }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage
