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

    // Create blog posts
    result.data.allPosts.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        context: { id: node.id },
        component: path.resolve(`${__dirname}/src/templates/PostTemplate.js`),
      })
    })

    resolve()
  })
}

async function getData(graphql) {
  return graphql(`
    {
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
