import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { safariPackages } from '../components/SafariPackages';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';

interface SafariPackage {
  id: string;
  title: string;
  duration: string;
  location: string;
  price: string;
  image: string;
  description: string;
  accommodations: string[];
  itinerary: {
    day: string;
    title: string;
    activities: string[];
    accommodation: string;
    meals: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

// Component to handle scroll into view animations
const AnimateOnScroll = ({ children, className }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SafariDetailsComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('itinerary');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the selected safari package
  const safari = safariPackages.find((safari: SafariPackage) => safari.id === id);
  
  // Handle case where safari is not found
  if (!safari) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Safari Package Not Found</h2>
        <p className="mb-6">We couldn't find the safari package you're looking for.</p>
        <button 
          onClick={() => navigate('/safaris')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Back to Safari Packages
        </button>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100 
      }
    }
  };

  return (
    <div>
      <TopBar />
      <Navigation />
      <div className="mx-auto px-4 py-8">
        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 text-gray-600 hover:text-green-600 transition-colors"
          whileHover={{ x: -5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Safari Packages
        </motion.button>

        {/* Hero section */}
        <motion.div 
          className="bg-white rounded-lg shadow-xl overflow-hidden mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-80 md:h-96">
            <img 
              src={safari.image} 
              alt={safari.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {safari.title}
              </motion.h1>
              <motion.div 
                className="flex flex-wrap gap-3 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {safari.duration}
                </span>
                <span className="bg-yellow-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {safari.location}
                </span>
                <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {safari.price}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <AnimateOnScroll className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 text-lg">{safari.description}</p>
        </AnimateOnScroll>

        {/* Tabs */}
        <AnimateOnScroll className="mb-8">
          <div className="flex overflow-x-auto space-x-2 border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'itinerary' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('itinerary')}
            >
              Itinerary
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'accommodation' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('accommodation')}
            >
              Accommodation
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === 'inclusions' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('inclusions')}
            >
              Inclusions & Exclusions
            </button>
          </div>
        </AnimateOnScroll>

        {/* Tab Content */}
        <AnimateOnScroll className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
              {safari.itinerary.map((day, index) => (
                <motion.div
                  key={day.day}
                  variants={itemVariants}
                  className={`border-l-4 border-green-500 pl-4 pb-8 ${
                    index === safari.itinerary.length - 1 ? '' : 'mb-6'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {day.day}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{day.title}</h3>
                  </div>
                  <ul className="ml-6 mb-4 space-y-2">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  {day.accommodation && (
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                      <span><strong>Accommodation:</strong> {day.accommodation}</span>
                    </div>
                  )}
                  {day.meals && (
                    <div className="flex items-center mt-2 text-gray-700">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      <span><strong>Meals:</strong> {day.meals}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Accommodation Tab */}
          {activeTab === 'accommodation' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-2xl font-bold mb-6">Accommodation</h2>
              {safari.accommodations.map((accommodation, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm"
                >
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <p className="text-gray-700 font-medium">{accommodation}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Inclusions & Exclusions Tab */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <h2 className="text-2xl font-bold mb-6 text-green-600">What's Included</h2>
                <ul className="space-y-3">
                  {safari.inclusions.map((inclusion, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{inclusion}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <h2 className="text-2xl font-bold mb-6 text-red-600">What's Not Included</h2>
                <ul className="space-y-3">
                  {safari.exclusions.map((exclusion, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span className="text-gray-700">{exclusion}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </AnimateOnScroll>

        {/* CTA Section */}
        <AnimateOnScroll className="bg-green-50 rounded-lg shadow-lg p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Book Your Safari Adventure?</h2>
          <p className="text-green-700 mb-6 max-w-2xl mx-auto">
            Secure your spot on this unforgettable journey through Africa's most spectacular landscapes and wildlife encounters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
            <motion.button
              className="bg-white text-green-600 border border-green-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </AnimateOnScroll>
      </div>
      <Footer/>
    </div>
  );
};