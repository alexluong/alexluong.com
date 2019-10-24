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
    bg: "rgb(29, 161, 242)",
    borderColor: "rgb(29, 161, 242)",
    color: "white",
    ":visited": {
      color: "white",
    },
    ":hover": {
      bg: "rgb(26, 145, 218)",
      borderColor: "rgb(26, 145, 218)",
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
