import UserContainer from "./UserContainer"

const NavLinks = ({name, logout}) => {
  return (
    <div className="nav-container">
      <a href="#">Home</a>
      <a href="#">About</a>
      <UserContainer name={name} logout={logout}/>
    </div>
  )
}
export default NavLinks