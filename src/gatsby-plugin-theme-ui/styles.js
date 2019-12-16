import nightOwl from "@theme-ui/prism/presets/night-owl.json"

const noItalicNightOwl = {
  ...nightOwl,
  ".doctype": {
    ...nightOwl[".doctype"],
    fontStyle: "normal",
  },
  ".changed": {
    ...nightOwl[".changed"],
    fontStyle: "normal",
  },
  ".deleted": {
    ...nightOwl[".deleted"],
    fontStyle: "normal",
  },
  ".inserted,.attr-name": {
    ...nightOwl[".inserted,.attr-name"],
    fontStyle: "normal",
  },
  ".comment": {
    ...nightOwl[".comment"],
    fontStyle: "normal",
  },
}

export default {
  root: {
    fontFamily: "body",
    color: "text",
  },
  pre: {
    variant: "prism",
    fontFamily: "monospace",
    tabSize: 4,
    hyphens: "none",
    p: 3,
    mb: 2,
    color: "white",
    bg: "prism.background",
    overflow: "auto",
    borderRadius: 10,
    ...noItalicNightOwl,
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  inlineCode: {
    borderRadius: 3,
    color: "neutralVariants.800",
    bg: "neutralVariants.100",
    paddingTop: "0.15em",
    paddingBottom: "0.05em",
    paddingX: "0.2em",
    fontFamily: "monospace",
  },
  hr: {
    borderColor: "muted",
  },
  p: {
    code: {
      fontSize: "inherit",
    },
  },
  li: {
    code: {
      fontSize: "inherit",
    },
  },
  blockquote: {
    ml: 0,
    pl: 2,
    color: "inherit",
    borderLeftColor: "inherit",
    borderLeftStyle: "solid",
    borderLeftWidth: 4,
    opacity: 0.8,
    "&.translation": {
      fontSize: "1em",
    },
  },
}
