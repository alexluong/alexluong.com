const crypto = require("crypto")

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes(`interface Project @nodeInterface {
    id: ID!
    order: Int!
    name: String!
    description: String!
    url: String
    github: String
    technologies: [String]
  }`)

  createTypes(
    schema.buildObjectType({
      name: "MdxProject",
      fields: {
        id: { type: "ID!" },
        order: { type: "Int!" },
        name: { type: "String!" },
        description: { type: "String!" },
        url: { type: "String" },
        github: { type: "String" },
        technologies: { type: "[String]" },
      },
      interfaces: ["Node", "Project"],
    }),
  )
}

exports.onCreateNode = async ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== "Mdx") {
    return
  }

  const fileNode = getNode(node.parent)

  if (fileNode.sourceInstanceName === "projects") {
    const fieldData = {
      order: node.frontmatter.order,
      name: node.frontmatter.name,
      description: node.frontmatter.description,
      url: node.frontmatter.url,
      github: node.frontmatter.github,
      technologies: node.frontmatter.technologies,
    }

    const mdxProjectId = createNodeId(`${node.id} >>> MdxProject`)
    await createNode({
      ...fieldData,
      id: mdxProjectId,
      parent: node.id,
      children: [],
      internal: {
        type: "MdxProject",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(fieldData))
          .digest("hex"),
        content: JSON.stringify(fieldData),
        description: "Mdx implementation of the Project interface",
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxProjectId) })
  }
}
