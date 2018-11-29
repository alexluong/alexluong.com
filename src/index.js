import React, { Fragment } from "react"
import PropTypes from "prop-types"
// UIs
import Header from "components/Header"
import Footer from "components/Footer"
import SEO from "components/SEO"
import BaseStyle from "components/BaseStyle"
import CodeStyle from "components/CodeStyle"
// eslint-disable-next-line
import { setConfig } from "react-hot-loader"

setConfig({ pureSFC: true })

function App({ children }) {
  return (
    <Fragment>
      <SEO />
      <CodeStyle />
      <BaseStyle />

      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
