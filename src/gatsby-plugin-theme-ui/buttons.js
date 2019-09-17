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
}

export default {
  primary: {
    ...buttonStyle,
    bg: "primary",
    borderColor: "primary",
    color: "onPrimary",
    ":hover": {
      bg: "primaryHover",
      borderColor: "primaryHover",
    },
  },
  twitter: {
    ...buttonStyle,
    bg: "rgb(29, 161, 242)",
    borderColor: "rgb(29, 161, 242)",
    color: "white",
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
    ":hover": {
      bg: "rgb(230, 235, 241)",
      borderColor: "rgba(27,31,35,0.35)",
    },
  },
}
