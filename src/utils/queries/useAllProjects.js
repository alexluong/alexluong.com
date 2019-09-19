import { useStaticQuery, graphql } from "gatsby"

export function useAllProjects() {
  const { allProject } = useStaticQuery(graphql`
    query ProjectQuery {
      allProject(sort: { fields: order, order: DESC }) {
        nodes {
          id
          name
          description
          url
          github
          technologies
        }
      }
    }
  `)

  return allProject.nodes
}
