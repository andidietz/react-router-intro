import React from 'react'
import NavbarHome from './NavbarHome'

const Snack = ({snack}) => {
  return (
    <>
      <NavbarHome/>
      <h1>{snack}</h1>
    </>
  )
}

export default Snack