const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(async resolve => {
    const result = await getData(graphql)
    const {
      data: { site, allPosts, allCategories },
    } = result

    // Create blog posts
    allPosts.edges.forEach(({ node }) => {
      createPage({
        path: `${site.siteMetadata.prefix.post}/${node.slug}`,
        context: { id: node.id },
        component: path.resolve(`${__dirname}/src/templates/PostTemplate.js`),
      })
    })

    // Create category pages
    allCategories.edges.forEach(({ node }) => {
      createPage({
        path: `${site.siteMetadata.prefix.category}/${node.slug}`,
        context: { id: node.id },
        component: path.resolve(
          `${__dirname}/src/templates/CategoryTemplate.js`,
        ),
      })
    })

    resolve()
  })
}

async function getData(graphql) {
  return graphql(`
    {
      site {
        siteMetadata {
          prefix {
            post
            category
          }
        }
      }
      allPosts: allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
      allCategories: allContentfulCategory {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
}
