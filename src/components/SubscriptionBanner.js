/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import isEmail from "isemail"

function SubscriptionBanner() {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const [sent, setSent] = React.useState(false)

  function subscribe(e) {
    e.preventDefault()

    if (!isEmail.validate(email, { minDomainAtoms: 2 })) {
      setError(`"${email}" is not a valid email address.`)
      return
    }

    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({ email }),
    }

    fetch(".netlify/functions/subscribe", fetchOptions).then(async res => {
      if (res.status === 200) {
        setSent(true)
      } else {
        const { message } = await res.json()
        setError(message)
      }
    })
  }

  return (
    <div
      sx={{
        mt: 5,
        py: 3,
        px: 3,
        bg: "primaryVariants.background",
        color: "primaryVariants.900",
        borderRadius: 4,
      }}
    >
      <h3 sx={{ m: 0, fontSize: 3 }}>Join my newsletter</h3>
      <p>
        Once a month, I'll send you a curated list of the best blog posts,
        conference talks, or podcast episodes to level up your skills.
      </p>

      {sent ? (
        <p>
          Thank you for subscribing{" "}
          <span role="img" aria-label="thank you">
            🤗
          </span>{" "}
          Please check your email to confirm!
        </p>
      ) : (
        <form onSubmit={subscribe}>
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <button sx={{ variant: "buttons.primary" }}>Learn with Alex</button>

          {error && (
            <p sx={{ color: "danger", lineHeight: 1.5, mt: 1 }}>
              <small>{error}</small>
            </p>
          )}
        </form>
      )}
    </div>
  )
}

export default SubscriptionBanner
