import React from "react"
import Helmet from "react-helmet"
import { useMeta } from "../utils/queries"

function SEO({
  title,
  slug,
  description: descriptionProp,
  image,
  datePublished,
  isArticle,
}) {
  const metaData = useMeta()
  const { organization } = metaData

  const url = `${metaData.canonicalUrl}/${slug}`
  const pageTitle = title ? `${title} | ${metaData.title}` : metaData.title
  const description = descriptionProp || metaData.description

  // SchemaOrg
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      image,
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
        name: metaData.title,
      },
      publisher: {
        "@type": "Organization",
        url: organization.url,
        logo: organization.logo,
        name: organization.name,
      },
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": metaData.canonicalUrl,
      },
      datePublished,
    },
  ]

  const schema = !isArticle
    ? baseSchema
    : [
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
      ]

  return (
    <Helmet>
      {/* General tags */}
      <html lang="en" amp />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isArticle ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metaData.social.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.defaultProps = { image: "" }

export default SEO
