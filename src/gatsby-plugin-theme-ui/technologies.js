const technologyStyle = {
  bg: "muted",
  borderRadius: 3,
  px: 1,
  py: 0,
}

export default {
  React: {
    ...technologyStyle,
    bg: "rgb(97, 218, 251)",
    color: "black",
  },
  Node: {
    ...technologyStyle,
    bg: "rgb(2, 110, 0)",
    color: "white",
  },
  GraphQL: {
    ...technologyStyle,
    bg: "#e535ab ",
    color: "white",
  },
  Gatsby: {
    ...technologyStyle,
    bg: "rebeccapurple",
    color: "white",
  },
  Default: {
    ...technologyStyle,
    color: "text",
  },
}
