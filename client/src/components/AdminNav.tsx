import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AdminNav = () => {
  return (
    <Nav>
      <NavLink to={"/create"}>Create new post</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
