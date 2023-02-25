import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <Header>
      <LogoLink to={"/"}>Home</LogoLink>
      <Nav>
        <NavLink to={"/create"}>Create new post</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`

const LogoLink = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
