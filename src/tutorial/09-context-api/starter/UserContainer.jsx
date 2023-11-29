import { useContext } from "react"
import { NavbarContext } from "./Navbar"
const UserContainer = () => {
  const {name, logout} = useContext(NavbarContext)
  return (
    <div className="user-container">
    {name?(<>
      <p>Hello there,{name?.name?.toUpperCase()}</p>
      <button className="btn" onClick={logout}>logout</button>
    </>) :(<p>Please login</p>)}
    </div>
  )
}
export default UserContainer