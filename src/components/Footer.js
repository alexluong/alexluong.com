import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: #000;
  color: #fff;
  font-size: 1.8rem;
  font-family: "Dank Mono", sans-serif;
`

function Footer() {
  return (
    <StyledFooter>&copy; Alex Luong {new Date().getFullYear()}</StyledFooter>
  )
}

export default Footer
