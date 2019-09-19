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
    marginBottom: 2,
    color: "white",
    bg: "prism.background",
    overflow: "auto",
    borderRadius: 10,
    p: 3,
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
