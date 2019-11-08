const TWITTER_COLOR = "#1b97f0"
const TWITTER_COLOR_ACCENT = "rgb(26, 145, 218)"

const buttonStyle = {
  py: 1,
  px: 2,
  fontSize: 2,
  cursor: "pointer",
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: "solid",
  display: "inline-flex",
  transition: "all 0.3s ease",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.2,
}

export default {
  primary: {
    ...buttonStyle,
    bg: "primary",
    borderColor: "primary",
    color: "onPrimary",
    ":hover": {
      bg: "primaryVariants.hover",
      borderColor: "primaryVariants.hover",
    },
  },
  secondary: {
    ...buttonStyle,
    bg: "primaryVariants.100",
    borderColor: "primaryVariants.100",
    color: "text",
    ":hover": {
      bg: "primary",
      borderColor: "primary",
      color: "onPrimary",
    },
  },
  tertiary: {
    ...buttonStyle,
    bg: "neutralVariants.50",
    borderColor: "neutralVariants.50",
    color: "text",
    ":hover": {
      bg: "neutralVariants.400",
      borderColor: "neutralVariants.400",
      color: "onNeutral",
    },
  },
  small: {
    py: 1,
    px: 1,
    fontSize: 0,
  },
  twitter: {
    ...buttonStyle,
    bg: TWITTER_COLOR,
    borderColor: TWITTER_COLOR,
    color: "#fff",
    ":visited": {
      color: "#fff",
    },
    ":hover": {
      bg: TWITTER_COLOR_ACCENT,
      borderColor: TWITTER_COLOR_ACCENT,
    },
  },
  github: {
    ...buttonStyle,
    bg: "rgb(239, 243, 246)",
    color: "black",
    borderColor: "rgba(27,31,35,0.2)",
    ":visited": {
      color: "black",
    },
    ":hover": {
      bg: "rgb(230, 235, 241)",
      borderColor: "rgba(27,31,35,0.35)",
    },
  },
}
