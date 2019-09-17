import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge(
  typography,
  {
    initialColorMode: "light",
    colors,
    fonts: {
      heading: "Open Sans, sans-serif",
      body: "Lato, sans-serif",
      monospace: "monospace",
    },
    fontSizes: [12, 14, 18, 20, 30, 48],
    sizes: {
      container: 672,
    },
    styles,
    prism,
  },
  { arrayMerge: (destinationArray, sourceArray, options) => sourceArray },
)
