import React from 'react';
import Banner from '../components/Banner';

import PendingTab from '../tabs/PendingTab';
import AddnewAssignmentTab from '../tabs/AddnewAssignmentTab';
import Faqsection from '../tabs/Faqsection';
import NavBar from '../components/NavBar';
import ThemeToggle from '../components/ThemeTogole';
import Footer from '../components/Footer';
import FeaturesSection from '../tabs/Featured';
import StatisticsSection from '../tabs/AssignmentTab';


const HomeLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />
            
      {/* Place ThemeToggle inside the layout where you want */}
      <div className="flex justify-end p-4">
        <ThemeToggle /> {/* Theme toggle button will appear here */}
      </div>
      <Banner />
      <StatisticsSection />
      <FeaturesSection />
      <Faqsection />
      <Footer/>
    </div>
  );
};

export default HomeLayouts;
