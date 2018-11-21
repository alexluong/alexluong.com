import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function Meta({ title }) {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Meta
