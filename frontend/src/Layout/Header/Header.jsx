import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
const Header = () => {
  return (
  <nav>
  <div className="d-flex align-items-center justify-content-between">
<div className="nav-left-side">
<div className="d-flex justify-content-around">
<div className="nav-logo">
    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
   <span>COURSE</span>
</div>
<div className="nav-link">
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/about'>ABOUT US</NavLink>
    <NavLink to='/courses'>COURSES</NavLink>
    <NavLink to='/elements'>ELEMENTS</NavLink>
    <NavLink to='/news'>NEWS</NavLink>
    <NavLink to='/contact'>CONTACTS</NavLink>

    <NavLink to='/add'>ADD</NavLink>


</div>
</div>
</div>
<div className="nav-phone">
<span><i class="fa-solid fa-phone"></i> +43 4566 7788 245</span>
    </div>
    </div>
 
 
  </nav>
  )
}

export default Header