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

export default {
  pre: CodeBlock,
  a: Link,
}
