/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

function ProjectList() {
  const { allProject } = useStaticQuery(graphql`
    query ProjectQuery {
      allProject {
        nodes {
          id
          name
          description
          url
          github
        }
      }
    }
  `)

  return (
    <div>
      {allProject.nodes.map(project => (
        <div key={project.id} sx={{}}>
          {project.name}
        </div>
      ))}
    </div>
  )
}

export default ProjectList
