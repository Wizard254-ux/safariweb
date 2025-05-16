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
// const AboutUs = lazy(() => import('../components/AboutUs'));

const HomePage: React.FC = () => {
  // Get active tab from localStorage with fallback and state
  const [activeTab, setActiveTab] = useState<string>('bush-safaris');

    const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  

  
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
      // default:
      //   return <AboutUs />;
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
           <motion.div 
            className="text-center md:text-left mb-16 m-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={sectionVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">WHY WE TRAVEL</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              variants={textVariant}
            >
              At Lynnie Travis Adventures, travel is a celebration of life and its endless possibilities. Our guests travel not just for pleasure, but for:
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              variants={textVariant}
            >
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Cultural enrichment</span> – Discover the heart of new cultures through cuisine, traditions, art, and history.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Serene relaxation</span> – Escape into tranquil settings where luxury meets calm.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Breathtaking nature</span> – Immerse yourself in landscapes that awaken the soul—from savannas to seascapes.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Personal growth</span> – Gain new insights, confidence, and inspiration with every journey.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Meaningful connection</span> – Reconnect with loved ones or meet kindred spirits along the way.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Spiritual reflection</span> – Embrace inner peace through sacred journeys and retreats.</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 mr-2">•</div>
                <p className="text-gray-700"><span className="font-semibold">Wellness and rejuvenation</span> – Restore your body and mind through curated wellness escapes.</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg border-l-4 border-green-600 shadow-md italic text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              variants={textVariant}
            >
              <p className="text-green-800 text-lg md:text-xl font-semibold">Experience the Extraordinary</p>
              <p className="text-gray-700">From the moment you embark, every detail is handled with the utmost care. With Lynnie Travis Adventures, you're not just booking a trip—you're unlocking a world of luxury, discovery, and timeless elegance.</p>
            </motion.div>
          </motion.div>
      </div>
      {/* <AboutUs/> */}
      <Footer />
    </div>
  );
};

export default HomePage;