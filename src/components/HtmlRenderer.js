import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import RehypeReact from "rehype-react"

function FeaturedImage(props) {
  return <Img {...props} />
}

function P(props) {
  const { children } = props

  // Check image -> pull out of <p />
  if (children.length === 1 && children[0].type === "img") {
    return <div className="gatsby-image-wrapper">{children[0]}</div>
  }

  return <p {...props} />
}

function Pre(props) {
  const language = props.className.replace("language-", "")

  return <pre {...props} data-language={language} />
}

function HtmlRenderer({ children }) {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: { p: P, pre: Pre, "featured-image": FeaturedImage },
  }).Compiler

  return renderAst(children)
}

HtmlRenderer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default HtmlRenderer
