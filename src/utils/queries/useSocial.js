import { useStaticQuery, graphql } from "gatsby"

export function useSocial() {
  const { site } = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  return site.siteMetadata.social
}
