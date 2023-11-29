import { createContext, useState } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()
const Navbar = () => {
  const [name, setName] = useState({name: 'Amir'})
  const logout = () => {
    setName(null)
  }
  return (
    <NavbarContext.Provider value={{name, logout}}>
      <nav className="navbar">context api
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
    
  )
}
export default Navbar