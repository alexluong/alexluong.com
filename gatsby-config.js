module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

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
  ],
}
