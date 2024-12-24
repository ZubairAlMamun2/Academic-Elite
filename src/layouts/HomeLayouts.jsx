import React from 'react'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeTogole'
import NavBar from '../components/Navbar'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <ThemeToggle />
        <div className=" min-h-[60vh]">
            home
        </div>
        <Footer />
    </div>
  )
}

export default HomeLayouts