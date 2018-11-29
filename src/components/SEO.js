import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({
  siteName,
  title,
  description,
  canonicalUrl,
  social,
  isBlogPost,
  slug,
  image,
  datePublished,
  author,
  organization,
}) {
  const url = `${canonicalUrl}/${slug}`
  const pageTitle = title ? `${title} | ${siteName}` : siteName

  // SchemaOrg
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
    },
  ]

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author.name,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: organization.logo,
            name: organization.name,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": canonicalUrl,
          },
          datePublished,
        },
      ]
    : baseSchema

  return (
    <Helmet>
      {/* General tags */}
      <html lang="en" amp />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={social.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.propTypes = {
  siteName: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  social: PropTypes.shape({
    fbAppId: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string,
  isBlogPost: PropTypes.bool,
  image: PropTypes.string,
  datePublished: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  organization: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
}

SEO.defaultProps = {
  isBlogPost: false,
  slug: "",
  image: "",
  title: "",
  datePublished: "",
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            social {
              fbAppId
              twitter
            }
            organization {
              name
              url
              logo
            }
          }
        }
        author: contentfulAuthor(username: { eq: "alex" }) {
          name: displayName
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, ...siteMetadata },
      },
      author,
    }) => <SEO {...siteMetadata} author={author} siteName={title} {...props} />}
  />
)
