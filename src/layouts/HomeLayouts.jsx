import React from 'react';
import Banner from '../components/Banner';
import AssignmentTab from '../tabs/AssignmentTab';
import PendingTab from '../tabs/PendingTab';
import AddnewAssignmentTab from '../tabs/AddnewAssignmentTab';
import Faqsection from '../tabs/Faqsection';
import NavBar from '../components/NavBar';
import ThemeToggle from '../components/ThemeTogole';
import Footer from '../components/Footer';

const HomeLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <NavBar />
      <ThemeToggle />
      <Banner />
      <AssignmentTab />
      <PendingTab />
      <AddnewAssignmentTab />
      <Faqsection />
      <Footer/>
    </div>
  );
};

export default HomeLayouts;
