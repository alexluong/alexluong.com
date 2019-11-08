const BLACK = "#000"
const WHITE = "#fff"
const REACT = "rgb(97, 218, 251)"
const NODE = "rgb(2, 110, 0)"
const GRAPHQL = "#e535ab"
const GATSBY = "rebeccapurple"

const technologyStyle = {
  borderRadius: 3,
  px: 1,
  py: 0,
}

export default {
  React: {
    ...technologyStyle,
    bg: REACT,
    color: BLACK,
  },
  Node: {
    ...technologyStyle,
    bg: NODE,
    color: WHITE,
  },
  GraphQL: {
    ...technologyStyle,
    bg: GRAPHQL,
    color: BLACK,
  },
  Gatsby: {
    ...technologyStyle,
    bg: GATSBY,
    color: WHITE,
  },
  Default: {
    ...technologyStyle,
    bg: "neutralVariants.100",
    color: "text",
  },
}
