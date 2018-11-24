import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  background: #000;
  color: #fff;
  font-size: 2rem;
  font-family: "Source Sans Pro", sans-serif;
`

function Footer() {
  return (
    <StyledFooter>&copy; Alex Luong {new Date().getFullYear()}</StyledFooter>
  )
}

export default Footer
