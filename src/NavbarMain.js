import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarMain = () => {
  return (
    <nav> 
      <NavLink exact to='/honeysticks'>Honey Sticks</NavLink>
      <NavLink exact to='/taffy'>Salt Water Taffy</NavLink>
      <NavLink exact to='/pecans'>Sugar Pecans</NavLink>
    </nav>

  )
}

export default NavbarMain