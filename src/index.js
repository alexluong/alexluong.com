import React from "react"
import Layout from "./components/Layout"
import GlobalStyle from "./components/GlobalStyle"

function Index({ children }) {
  return (
    <>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </>
  )
}

export default Index
