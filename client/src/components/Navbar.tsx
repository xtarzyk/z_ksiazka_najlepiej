import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AdminNav } from './AdminNav'

export const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <Header>
      <LogoLink to={"/"}>Home</LogoLink>
      { pathname === '/admin' && <AdminNav /> }
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
  background-color: #5a191928;
  height: 150px;
  padding: 10px;
`

const LogoLink = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
`


