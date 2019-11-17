/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { preToCodeBlock } from "mdx-utils"
import Highlight, { defaultProps } from "prism-react-renderer"

const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)))

    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  } else {
    return () => false
  }
}

function CodeBlock(preProps) {
  const props = preToCodeBlock(preProps)

  if (props) {
    const { codeString, language, metastring } = props
    const shouldHighlightLine = calculateLinesToHighlight(metastring)
    if (metastring) console.log(shouldHighlightLine)

    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => {
          return (
            <div sx={{ mb: 3, overflow: "auto" }}>
              <Styled.pre
                className={className}
                style={{ position: "relative" }}
              >
                {tokens.map((line, index) => {
                  const { className } = getLineProps({
                    line,
                    key: index,
                    className: shouldHighlightLine(index)
                      ? "highlight-line"
                      : "",
                  })

                  return (
                    <div key={index} className={className}>
                      {line.map((token, key) => {
                        const { className, children } = getTokenProps({
                          token,
                          key,
                        })

                        return (
                          <span key={key} className={className}>
                            {children}
                          </span>
                        )
                      })}
                    </div>
                  )
                })}
              </Styled.pre>
            </div>
          )
        }}
      </Highlight>
    )
  } else {
    return <pre {...preProps} />
  }
}

function CodeSandbox({ id, title }) {
  return (
    <iframe
      title={title}
      src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark`}
      sx={{
        mb: 2,
        width: "100%",
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: "hidden",
      }}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
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
  CodeSandbox,
}
