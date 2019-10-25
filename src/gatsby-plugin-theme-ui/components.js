/** @jsx jsx */
import { jsx } from "theme-ui"
import { preToCodeBlock } from "mdx-utils"
import PrismCodeBlock from "@theme-ui/prism"

function CodeBlock(preProps) {
  const props = preToCodeBlock(preProps)

  if (props) {
    const { codeString, ...restProps } = props

    return (
      <div sx={{ mb: 2 }}>
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
      </div>
    )
  } else {
    return <pre {...preProps} />
  }
}

function Link({ children, ...props }) {
  return (
    <a
      {...props}
      sx={{
        color: "primary",
        textDecoration: "underline",
        transition: "all 0.3s ease",
        ":visited": {
          color: "primary",
        },
        ":hover": {
          color: "primaryVariants.hover",
        },
      }}
    >
      {children}
    </a>
  )
}

function CallOut({ type, children, ...props }) {
  const callOutIcons = {
    think: (
      <span role="img" aria-label="think">
        🤔
      </span>
    ),
    question: (
      <span role="img" aria-label="question">
        ❓
      </span>
    ),
  }

  const colors = {
    think: "primaryVariants.900",
    question: "yellowVariants.900",
  }

  const bgColors = {
    think: "primaryVariants.background",
    question: "yellowVariants.50",
  }

  return (
    <p
      {...props}
      sx={{
        color: colors[type],
        bg: bgColors[type],
        borderRadius: 4,
        px: 2,
        py: 2,
      }}
    >
      {callOutIcons[type]}
      <span sx={{ ml: 2 }}>{children}</span>
    </p>
  )
}

export default {
  pre: CodeBlock,
  a: Link,
  CallOut,
}
