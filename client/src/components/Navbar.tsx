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
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
`

const LogoLink = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
`


