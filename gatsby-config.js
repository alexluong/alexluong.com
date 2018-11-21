require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Alex Luong",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-eslint",

    // Get markdown files
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },

    // Transform markdown files to GraphQL nodes
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-emojis",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "",
              inlineCodeMarker: ">",
              noInlineHighlight: true,
            },
          },
        ],
      },
    },

    // Get assets (images)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets`,
      },
    },

    // Layout wrapper
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`${__dirname}/src/index.js`),
      },
    },
  ],
}
