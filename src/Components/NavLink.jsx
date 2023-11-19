// react-scroll
import { Link } from "react-scroll";

const NavLink = ({ children, to, offset = -50, mobileMenu = false }) => {
  const className = mobileMenu 
  ? 'text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradiant(90deg,_#2ad598_0%,_#0093fd_100%)] w-full text-center'  
  : 'text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradiant(90deg,_#2ad598_0%,_#0093fd_100%)] hover:bg-clip-text hover:text-transparent'
   return (

<Link to={to}
  spy={true}
  smooth={true}
  offset={offset}
  duration={1000}
  className={className}
></Link>
  )
   }

export default NavLink;
