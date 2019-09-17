/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import LinkIcon from "./icons/LinkIcon"
import GitHubIcon from "./icons/GitHubIcon"

function Technology({ value }) {
  const color = ["React", "Node", "Gatsby", "GraphQL"].includes(value)
    ? value
    : "Default"

  return <li sx={{ variant: `technologies.${color}`, mr: 1 }}>{value}</li>
}

function IconButton({ children, ...props }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      sx={{
        ml: 2,
        p: 1,
        borderRadius: 3,
        bg: "rgba(0,0,0,0.1)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
          bg: "muted",
        },
      }}
    >
      {children}
    </a>
  )
}

function ProjectList() {
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

  return (
    <div>
      {allProject.nodes.map(project => (
        <div key={project.id} sx={{ mb: 4 }}>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 sx={{ mr: 3, my: 0 }}>{project.name}</h3>

              <p>{project.description}</p>
              {project.technologies && (
                <ul sx={{ listStyleType: "none", display: "flex", pl: 0 }}>
                  {project.technologies.map(technology => (
                    <Technology key={technology} value={technology} />
                  ))}
                </ul>
              )}
            </div>
            <div>
              {project.url && (
                <IconButton
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon sx={{ width: 18, height: 18 }} />
                </IconButton>
              )}
              {project.github && (
                <IconButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ width: 18, height: 18 }} />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
