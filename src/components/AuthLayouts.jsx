import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './Navbar'

const AuthLayouts = () => {
  return (
    <div>
        <header>
            <NavBar />
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AuthLayouts