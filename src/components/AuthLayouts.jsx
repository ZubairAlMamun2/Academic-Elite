import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

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