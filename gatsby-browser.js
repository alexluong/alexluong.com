import "typeface-ibm-plex-mono"
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-serif"

import React from "react"
import Layout from "./src"

export const wrapPageElement = ({ element, props }, pluginOptions) => (
  <Layout {...props} features={pluginOptions.features}>
    {element}
  </Layout>
)
