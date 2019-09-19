import "typeface-lato"
import "typeface-open-sans"
import "typeface-ibm-plex-mono"

import React from "react"
import Layout from "./src"

export const wrapPageElement = ({ element, props }, pluginOptions) => (
  <Layout {...props} features={pluginOptions.features}>
    {element}
  </Layout>
)
