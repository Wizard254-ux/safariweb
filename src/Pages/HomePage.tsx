// src/pages/HomePage.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import { Hero } from '../components/Hero';
import { TabNavigator } from '../components/TabNavigator';
import { ServiceCarousel } from '../components/ServiceCarousel';
import { BushSafaris } from '../components/services/BushSafaris';
import { SportsGolf } from '../components/services/SportsGolf';
import { AirSafaris } from '../components/services/AirSafariExperience';
import { BeachExcursions } from '../components/services/BeachExcursions';
import { CulturalSafaris } from '../components/services/CulturalSafaris';
import Footer from '../components/Footer';
import { SafariPackagesComponent } from '../components/SafariPackages';

const HomePage: React.FC = () => {
  const localActiveTab = localStorage.getItem('activeTab') || 'bush-safaris';
  const [activeTab, setActiveTab] = useState(localActiveTab);

  const serviceComponents = {
    'bush-safaris': <BushSafaris />,
    'sports-golf': <SportsGolf />,
    'BeachExcursions': <BeachExcursions />,
    'cultural-safaris': <CulturalSafaris />,
    'AirSafaris': <AirSafaris />,
    'Travel-Packages': <SafariPackagesComponent />,
  };

  const handleTabChange = (tabId: string) => {
    localStorage.setItem('activeTab', tabId);
    setActiveTab(tabId);
  };

  // Animation variants
  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />
      <Hero />
      <div className="mx-auto px-4 py-8">
        <TabNavigator activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="mt-6">
          <ServiceCarousel serviceType={activeTab} />
        </div>
        <div className="mt-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {serviceComponents[activeTab as keyof typeof serviceComponents]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;