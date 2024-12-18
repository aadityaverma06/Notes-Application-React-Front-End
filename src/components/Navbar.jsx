import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row gap-4 place-content-between'>
        <NavLink to={"/"}>
            Home
        </NavLink>
        <NavLink to={"/Notes"}>
            All Notes
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
