import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
// UIs
import SEO from "components/SEO"
import PostList from "components/PostList"
import TitleContainer from "components/TitleContainer"

const StyledTitleContainer = styled(TitleContainer)`
  h1 {
    color: #121212;
    letter-spacing: 2px;
    font-size: 4rem;
    font-weight: 800;
    font-family: "Dank Mono", "IBM Plex Mono", sans-serif;
  }

  p {
    font-size: 2.2rem;
    font-family: "Source Sans Pro", sans-serif;
    color: rgba(0, 0, 0, 0.72);
  }
`

function CategoryTemplate({ data: { category } }) {
  return (
    <React.Fragment>
      <SEO title={category.name} description={category.description} />

      <div style={{ background: "#f4f8fb" }}>
        <StyledTitleContainer>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </StyledTitleContainer>
        <PostList posts={category.posts} />
      </div>
    </React.Fragment>
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CategoryTemplate

export const query = graphql`
  query($id: String!) {
    category: contentfulCategory(id: { eq: $id }) {
      id
      name
      description
      posts: blog_post {
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        categories {
          name
          slug
        }
        excerpt {
          excerpt
        }
        img: featuredImage {
          file {
            url
          }
          title
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
