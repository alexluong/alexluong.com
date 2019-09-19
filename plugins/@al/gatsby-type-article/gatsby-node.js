const crypto = require("crypto")

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info,
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes(`interface Article @nodeInterface {
    id: ID!
    title: String!
    description: String!
    body: String!
    slug: String!
    timeToRead: Int!
    date: Date! @dateformat
  }`)

  createTypes(
    schema.buildObjectType({
      name: "MdxArticle",
      fields: {
        id: { type: "ID!" },
        title: { type: "String!" },
        slug: { type: "String!" },
        description: { type: "String!" },
        date: { type: "Date!", extensions: { dateformat: {} } },
        body: {
          type: "String!",
          resolve: mdxResolverPassthrough("body"),
        },
        timeToRead: {
          type: "Int!",
          resolve: mdxResolverPassthrough("timeToRead"),
        },
      },
      interfaces: ["Node", "Article"],
    }),
  )
}

exports.onCreateNode = async ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== "Mdx") {
    return
  }

  const fileNode = getNode(node.parent)

  if (fileNode.sourceInstanceName === "articles") {
    const fieldData = {
      slug: node.frontmatter.slug || fileNode.relativeDirectory,
      date: node.frontmatter.date,
      title: node.frontmatter.title,
      description: node.frontmatter.description,
    }

    const mdxArticleId = createNodeId(`${node.id} >>> MdxArticle`)
    await createNode({
      ...fieldData,
      id: mdxArticleId,
      parent: node.id,
      children: [],
      internal: {
        type: "MdxArticle",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(fieldData))
          .digest("hex"),
        content: JSON.stringify(fieldData),
        description: "Mdx implementation of the Article interface",
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxArticleId) })
  }
}
