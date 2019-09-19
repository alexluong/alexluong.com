import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"
import buttons from "./buttons"
import technologies from "./technologies"

export default merge(
  typography,
  {
    initialColorMode: "light",
    colors,
    fonts: {
      heading: "IBM Plex Serif, sans-serif",
      body: "IBM Plex Sans, sans-serif",
      monospace: "IBM Plex Mono, monospace",
    },
    fontSizes: [14, 16, 18, 22, 30, 48],
    sizes: {
      container: 672,
    },
    styles,
    prism,
    buttons,
    technologies,
  },
  { arrayMerge: (destinationArray, sourceArray, options) => sourceArray },
)
