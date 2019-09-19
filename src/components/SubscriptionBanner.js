/** @jsx jsx */
import { jsx } from "theme-ui"

function SubscriptionBanner() {
  return (
    <div
      sx={{
        mt: 4,
        py: 3,
        px: 3,
        bg: "primaryVariants.background",
        borderRadius: 4,
      }}
    >
      <h3 sx={{ m: 0, fontSize: 3 }}>Join my newsletter</h3>
      <p>
        Once a month, I'll send you a curated list of the best blog posts,
        conference talks, or podcast episodes I enjoyed to level up your skill.
      </p>
      <label sx={{ mr: 2 }}>
        <span sx={{ display: "none" }}>Join my newsletter</span>
        <input
          sx={{
            py: 1,
            px: 2,
            fontFamily: "body",
            fontSize: 2,
            borderRadius: 4,
            borderStyle: "solid",
            ":focus": {
              borderColor: "primary",
            },
          }}
          placeholder="dwight@schrute.farm"
        />
      </label>
      <button sx={{ variant: "buttons.primary" }}>Learn with Alex</button>
    </div>
  )
}

export default SubscriptionBanner
