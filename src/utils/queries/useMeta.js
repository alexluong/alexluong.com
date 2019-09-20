import { useStaticQuery, graphql } from "gatsby"

export function useMeta() {
  const { site } = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          social {
            twitter
          }
          organization {
            name
            url
            logo
          }
        }
      }
    }
  `)

  return site.siteMetadata
}
