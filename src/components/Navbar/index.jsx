import { NavLink } from "react-router-dom"

const Navbar = ({leftMenu, rightMenu, emailUser }) => {
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center z-10 fixed top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
      <li className="font-semibold text-lg">
          <NavLink
            to="/">
          Shopi
        </NavLink>
      </li>
        {
          leftMenu.map( (menuItem, index) => {
            return (
              <li 
                className="text-lg" 
                key={index}
              >
                <NavLink
                  to={menuItem.path}
                  className={ ({ isActive }) => isActive? activeStyle : '' }
                >
                  {menuItem.name}
                </NavLink>
              </li>
            )
          })
        }
    </ul>
    <ul className="flex items-center gap-3">
      <li className="text-black/60 text-base">
        {emailUser}
      </li>
        {
          rightMenu.map( (menuItem, index) => {
            return (
              <li 
                className="text-lg" 
                key={index}
              >
                <NavLink
                  to={menuItem.path}
                  className={ ({ isActive }) => isActive? activeStyle : '' }
                >
                  {menuItem.name}
                </NavLink>
              </li>
            )
          })
        }
      <li>
        🛒0
      </li>
    </ul>
    </nav>
  )
}

export default Navbar