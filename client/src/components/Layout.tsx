import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}
