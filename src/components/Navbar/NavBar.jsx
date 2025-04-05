import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarIcon1 from '../../images/NavbarIcon1'
import NavbarIcon2 from '../../images/NavbarIcon2'
import NavbarIcon3 from '../../images/NavbarIcon3'

const NavBar = () => {
  return (
    <div className="max-w-[400px] mx-auto w-[93%] h-[70px] bg-[#F5F6FA] flex items-center justify-between fixed bottom-0 left-[16px] rounded-[24px] py-[10px] px-4 mb-[20px] z-10 navbarShadow">
      
      <NavLink
        to='/'
        className={({ isActive }) =>
          `w-[50px] flex items-center justify-center p-2 rounded-full ${
            isActive ? 'bg-black' : 'bg-transparent'
          }`
        }
      >
        {({ isActive }) => <NavbarIcon1 isActive={isActive} />}
      </NavLink>

      <NavLink
        to="/speaking"
        className={({ isActive }) =>
          `w-[50px] flex items-center justify-center p-2 rounded-full ${
            isActive ? 'bg-black' : 'bg-transparent'
          }`
        }
      >
        {({ isActive }) => <NavbarIcon2 isActive={isActive} />}
      </NavLink>

      <NavLink
        to='/lessons'
        className={({ isActive }) =>
          `w-[50px] flex items-center justify-center p-2 rounded-full ${
            isActive ? 'bg-black' : 'bg-transparent'
          }`
        }
      >
        {({ isActive }) => <NavbarIcon3 isActive={isActive} />}
      </NavLink>
      
    </div>
  )
}

export default NavBar