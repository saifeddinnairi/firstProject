import { NavLink, useMatch, useResolvedPath } from "react-router-dom"
import ButtonDarkExample from"./DropDown.js";
import Example  from "./Offcanvas";
export default function Navbar() {
  
  return (
    <nav  sticky="top" className="NAVB">
      <container className="nav">
      <NavLink to="/" className="site-title">BeastMode</NavLink>
      <ul>
        <ButtonDarkExample/>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/Concat">Concat</CustomLink>
        

      </ul>
      </container>
      <div style={{display:"flex" , gap:"20px"}}>
      <input type="text" placeholder="search..." />
      <Example/>
      </div>
    
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname,end: true })

  return (
    <li className={isActive?"active":""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  )
}
