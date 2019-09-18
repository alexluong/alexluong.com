import { useStaticQuery, graphql } from "gatsby"

export function usePrefix() {
  const { site } = useStaticQuery(graphql`
    query PrefixQuery {
      site {
        siteMetadata {
          prefix {
            article
          }
        }
      }
    }
  `)

  return site.siteMetadata.prefix
}
