import React from 'react'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeTogole'
import NavBar from '../components/Navbar'
import Banner from '../components/Banner'
import AssignmentTab from '../components/AssignmentTab'
import Faqsection from '../components/Faqsection'
import PendingTab from '../components/PendingTab'
import AddnewAssignmentTab from '../components/AddnewAssignmentTab'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <ThemeToggle />
        <Banner />
        <AssignmentTab />
        <PendingTab/>
        <AddnewAssignmentTab />
        <Faqsection/>
        <Footer />
    </div>
  )
}

export default HomeLayouts