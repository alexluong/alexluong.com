import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// UIs
import Header from "components/Header"
import Footer from "components/Footer"
import Meta from "components/Meta"
import GlobalStyle from "config/styles"
import PrismStyle from "config/prism"
// eslint-disable-next-line
import { setConfig } from "react-hot-loader"

setConfig({ pureSFC: true })

function App({ children, data }) {
  return (
    <Fragment>
      <Meta title={data.title} />
      <PrismStyle />
      <GlobalStyle />

      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <App {...props} data={data.site.siteMetadata} />}
  />
)
