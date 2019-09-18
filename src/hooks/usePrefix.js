import { useStaticQuery, graphql } from "gatsby"

function usePrefix() {
  const data = useStaticQuery(graphql`
    query PrefixQuery {
      site {
        siteMetadata {
          prefix {
            post
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.prefix
}

export default usePrefix
