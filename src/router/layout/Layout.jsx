import React from 'react'
import NavBar from '../../components/Navbar/NavBar'

const Layout = ({children}) => {
  return (
    <>
        <NavBar/>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout