import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: #000;
`

const LinkToMe = styled(Link)`
  font-family: "Dank Mono", sans-serif;
  font-size: 3rem;

  &,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  }
`

function Header() {
  return (
    <StyledHeader>
      <LinkToMe to="/">Alex Luong</LinkToMe>
    </StyledHeader>
  )
}

export default Header
