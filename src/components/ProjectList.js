/** @jsx jsx */
import { jsx } from "theme-ui"
import { useAllProjects } from "../utils/queries"
import LinkIcon from "./icons/LinkIcon"
import GitHubIcon from "./icons/GitHubIcon"

const ICON_SIZE = 24

function Technology({ value }) {
  const color = ["React", "Node", "Gatsby", "GraphQL"].includes(value)
    ? value
    : "Default"

  return (
    <li sx={{ variant: `technologies.${color}`, mr: 1, mb: 1, fontSize: 1 }}>
      {value}
    </li>
  )
}

function IconButton({ children, ...props }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      sx={{
        mb: 1,
        p: 1,
        borderRadius: 3,
        bg: "rgba(0,0,0,0.1)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
          bg: "neutralVariants.100",
        },
        "@media (max-width: 725px)": {
          mr: 1,
          mb: 0,
        },
      }}
    >
      {children}
    </a>
  )
}

function ProjectList() {
  const allProjects = useAllProjects()

  return (
    <div>
      {allProjects.map(project => (
        <div key={project.id} sx={{ mb: 4 }}>
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 40px",
              alignItems: "center",
              gap: 2,
              "@media (max-width: 725px)": {
                display: "block",
              },
            }}
          >
            <div>
              <h3 sx={{ mr: 3, my: 0 }}>{project.name}</h3>

              <p>{project.description}</p>
              {project.technologies && (
                <ul
                  sx={{
                    listStyleType: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    pl: 0,
                  }}
                >
                  {project.technologies.map(technology => (
                    <Technology key={technology} value={technology} />
                  ))}
                </ul>
              )}
            </div>
            <div>
              {project.url && (
                <IconButton href={project.url}>
                  <LinkIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />
                </IconButton>
              )}
              {project.github && (
                <IconButton href={project.github}>
                  <GitHubIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />
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
