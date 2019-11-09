const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: "Alex Luong",
    description: "Hi, I'm Alex, and I write about web development.",
    siteUrl: "https://alexluong.com",
    canonicalUrl: "https://alexluong.com",
    social: {
      github: "alexluong",
      twitter: "alex__luong",
    },
    prefix: {
      article: "blog",
    },

    // for schema.org
    organization: {
      name: "Alex Luong",
      url: "https://alexluong.com",
      logo: "https://alexluong.com/favicon.ico",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",

    "@al/gatsby-type-article",
    "@al/gatsby-type-project",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects`,
      },
    },

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-code-titles",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 672,
              linkImagesToOriginal: false,
            },
          },
        ],
        remarkPlugins: [require("remark-slug")],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Alex Luong Personal Blog and Website",
        short_name: "Alex Luong",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/favicon.ico",
      },
    },

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-116347511-1",
        respectDNT: true,
      },
    },

    // Fonts
    "gatsby-plugin-preload-fonts",
    // Sitemap XML
    "gatsby-plugin-sitemap",
    // robot.txt
    "gatsby-plugin-robots-txt",
    // RSS Feed
    // Reference: https://github.com/kentcdodds/kentcdodds.com/pull/127/files
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            title: "Alex Luong Blog RSS Feed",
            output: "/blog/rss.xml",
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl: canonicalUrl
                    site_url: canonicalUrl
                    prefix {
                      article
                    }
                  }
                }
                allArticle(sort: { fields: date, order: DESC }) {
                  nodes {
                    html
                    date
                    title
                    slug
                    description
                  }
                }
              }
            `,
            serialize: ({ query: { site, allArticle } }) => {
              const blogUrl = `${site.canonicalUrl}/blog`
              const stripSlash = slug =>
                slug.startsWith("/") ? slug.slice(1) : slug

              return allArticle.nodes.map(article => {
                const siteUrl = site.siteMetadata.siteUrl
                const url = `${siteUrl}/${
                  site.siteMetadata.prefix.article
                }/${stripSlash(article.slug)}`

                const postText = `<div style="margin-top=55px; font-style: italic;">(This article was posted to my blog at <a href="${blogUrl}">${blogUrl}</a>. You can <a href="${url}">read it online by clicking here</a>.)</div>`

                // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
                const html = (article.html || ``)
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return {
                  ...article,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": html + postText }],
                }
              })
            },
          },
        ],
      },
    },
  ],

  // Proxy local lambda server
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      }),
    )
  },
}
