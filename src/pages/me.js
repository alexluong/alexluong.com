/** @jsx jsx */
import { jsx } from "theme-ui"

function AboutPage() {
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
      <p>
        This is the about page. There is not much here just yet. Please come
        back later!{" "}
        <span role="img" aria-label="smile">
          🤗
        </span>
      </p>
    </div>
  )
}

export default AboutPage
