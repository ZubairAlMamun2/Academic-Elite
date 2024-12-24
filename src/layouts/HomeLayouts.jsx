import React from 'react'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeTogole'
import NavBar from '../components/Navbar'
import Banner from '../components/Banner'
import AssignmentTab from '../tabs/AssignmentTab'
import PendingTab from '../tabs/PendingTab'
import AddnewAssignmentTab from '../tabs/AddnewAssignmentTab'
import Faqsection from '../tabs/Faqsection'


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