require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Alex Luong",
    description: "",
    canonicalUrl: "https://blog.alexluong.com",
    social: {
      fbAppId: "",
      twitter: "@alexluong",
    },

    // for schema.org
    organization: {
      name: "Alex Luong",
      url: "https://www.alexluong.com",
      logo: "",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-eslint",

    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
          "gatsby-remark-smartypants",
          "gatsby-remark-emojis",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: ">",
              noInlineHighlight: true,
            },
          },
        ],
      },
    },

    // // Get assets (images)
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/content/assets`,
    //   },
    // },

    // Layout wrapper
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`${__dirname}/src/index.js`),
      },
    },

    // Fonts
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source Sans Pro", "Inconsolata"],
        },
      },
    },

    // Google Analytics
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-116347511-1",
        respectDNT: true,
      },
    },
  ],
}
