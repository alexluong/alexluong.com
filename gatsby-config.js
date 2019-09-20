const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: "Alex Luong",
    description: "Hi, I'm Alex, and I write about web development.",
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
