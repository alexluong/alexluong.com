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
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.frontmatter.slug}`,
        context: { id: node.id },
        component: path.resolve(`${__dirname}/src/templates/Post.js`),
      })
    })

    resolve()
  })
}

async function getData(graphql) {
  return graphql(
    `
      {
        posts: allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
  )
}
