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
  let callOutIcon

  switch (type) {
    case "think":
      callOutIcon = (
        <span role="img" aria-label="think">
          🤔
        </span>
      )
      break
    case "question":
      callOutIcon = (
        <span role="img" aria-label="question">
          ❓
        </span>
      )
      break
    default:
      break
  }

  return (
    <p
      {...props}
      sx={{
        color: "primaryVariants.900",
        bg: "primaryVariants.background",
        borderRadius: 4,
        px: 2,
        py: 2,
      }}
    >
      {callOutIcon}
      <span sx={{ ml: 2 }}>{children}</span>
    </p>
  )
}

export default {
  pre: CodeBlock,
  a: Link,
  CallOut,
}
