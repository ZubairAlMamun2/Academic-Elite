import React from 'react'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeTogole'

import Banner from '../components/Banner'
import AssignmentTab from '../tabs/AssignmentTab'
import PendingTab from '../tabs/PendingTab'
import AddnewAssignmentTab from '../tabs/AddnewAssignmentTab'
import Faqsection from '../tabs/Faqsection'
import NavBar from '../components/NavBar'


const HomeLayouts = () => {
  return (
    <div className=''>
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