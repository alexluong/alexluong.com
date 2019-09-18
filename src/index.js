import React from "react"
import { Styled } from "theme-ui"
import Layout from "./components/Layout"
import GlobalStyle from "./components/GlobalStyle"

function Index({ children }) {
  return (
    <Styled.root>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </Styled.root>
  )
}

export default Index
