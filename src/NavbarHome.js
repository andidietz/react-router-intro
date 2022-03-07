import React from 'react'
import{ NavLink } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <nav>
    <NavLink exact to='/'>Home</NavLink>
  </nav>
  )
}

export default NavbarHome