import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <div className=" min-h-[60vh]">
            home
        </div>
        <Footer />
    </div>
  )
}

export default HomeLayouts