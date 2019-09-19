const GREEN = {
  50: "#EFFCF6",
  100: "#C6F7E2",
  200: "#8EEDC7",
  300: "#65D6AD",
  400: "#3EBD93",
  500: "#27AB83",
  600: "#199473",
  700: "#147D64",
  800: "#0C6B58",
  900: "#014D40",
}

const BLUE_GREY = {
  50: "#F0F4F8",
  100: "#D9E2EC",
  200: "#BCCCDC",
  300: "#9FB3C8",
  400: "#829AB1",
  500: "#627D98",
  600: "#486581",
  700: "#334E68",
  800: "#243B53",
  900: "#102A43",
}

// const RED = {
//   50: "#FFEEEE",
//   100: "#FACDCD",
//   200: "#F29B9B",
//   300: "#E66A6A",
//   400: "#D64545",
//   500: "#BA2525",
//   600: "#A61B1B",
//   700: "#911111",
//   800: "#780A0A",
//   900: "#610404",
// }

export default {
  text: BLUE_GREY[900],
  background: BLUE_GREY[100],
  secondary: BLUE_GREY[400],
  muted: BLUE_GREY[300],
  link: BLUE_GREY[400],

  primary: GREEN[400],
  onPrimary: GREEN[50],
  primaryVariants: {
    background: GREEN[50],
    hover: GREEN[700],
    focus: GREEN[700],
    active: GREEN[700],
    disabled: GREEN[100],
    ...GREEN,
  },

  neutralVariants: { ...BLUE_GREY },

  prism: {
    background: "#011627",
    comment: "#809393",
    string: "#addb67",
    var: "#d6deeb",
    number: "#f78c6c",
    constant: "#82aaff",
    punctuation: "#c792ea",
    className: "#ffc98b",
    tag: "#ffa7c4",
    boolean: "#ff5874",
    property: "#80cbc4",
    namespace: "#b2ccd6",
    highlight: "hsla(207, 95%, 15%, 1)",
  },
  // modes: {
  //   dark: {
  //     text: lightWhite,
  //     background: grey90,
  //     primary: purple30,
  //     secondary: lightWhite,
  //     muted: opaqueLightWhite,
  //     highlight: purple60,
  //     heading: white,
  //   },
  // },
}
