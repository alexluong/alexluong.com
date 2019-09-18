const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(async resolve => {
    const result = await getData(graphql)
    const {
      data: { site, allArticle },
    } = result

    // Create article pages
    allArticle.nodes.forEach(node => {
      createPage({
        path: `${site.siteMetadata.prefix.article}/${node.slug}`,
        context: { id: node.id },
        component: path.resolve(
          `${__dirname}/src/templates/ArticleTemplate.js`,
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
            article
          }
        }
      }
      allArticle {
        nodes {
          id
          slug
        }
      }
    }
  `)
}
