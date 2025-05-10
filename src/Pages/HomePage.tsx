// src/pages/HomePage.tsx

import React, { useState, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import { Hero } from '../components/Hero';
import { TabNavigator } from '../components/TabNavigator';
import Footer from '../components/Footer';

// Lazy load components
const BushSafaris = lazy(() => import('../components/services/BushSafaris').then(module => ({ default: module.BushSafaris })));
const SportsGolf = lazy(() => import('../components/services/SportsGolf').then(module => ({ default: module.SportsGolf })));
const AirSafaris = lazy(() => import('../components/services/AirSafariExperience').then(module => ({ default: module.AirSafaris })));
const BeachExcursions = lazy(() => import('../components/services/BeachExcursions').then(module => ({ default: module.BeachExcursions })));
const CulturalSafaris = lazy(() => import('../components/services/CulturalSafaris').then(module => ({ default: module.CulturalSafaris })));
const SafariPackagesComponent = lazy(() => import('../components/SafariPackages').then(module => ({ default: module.SafariPackagesComponent })));
const ServiceCarousel = lazy(() => import('../components/ServiceCarousel').then(module => ({ default: module.ServiceCarousel })));
const AboutUs = lazy(() => import('../components/AboutUs'));

const HomePage: React.FC = () => {
  // Get active tab from localStorage with fallback and state
  const [activeTab, setActiveTab] = useState<string>('bush-safaris');
  
  // Set initial tab on component mount
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

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

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'bush-safaris':
        return <BushSafaris />;
      case 'sports-golf':
        return <SportsGolf />;
      case 'beach-excursions':
        return <BeachExcursions />;
      case 'cultural-safaris':
        return <CulturalSafaris />;
      case 'air-safaris':
        return <AirSafaris />;
      case 'Travel-Packages':
        return <SafariPackagesComponent />;
      default:
        return <AboutUs />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Tab Navigation */}
      <TabNavigator activeTab={activeTab} onTabChange={handleTabChange} />
          <div className="mt-6">
          <ServiceCarousel serviceType={activeTab} />
        </div>
      
      {/* Content Area with Animation */}
      <div className="flex-grow  mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={
              <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-12 border-b-2 border-green-500"></div>
              </div>
            }>
              {renderActiveComponent()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default HomePage;