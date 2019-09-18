module.exports = {
  siteMetadata: {
    prefix: {
      post: "blog",
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: "gatsby-remark-copy-linked-files" },
          { resolve: "gatsby-remark-smartypants" },
        ],
        remarkPlugins: [require("remark-slug")],
      },
    },

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
}
