// components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      {/* Background image with subtle zoom effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dancxhgah/image/upload/v1746881483/qsvcrwljv0bf97rvo6f1.jpg')", 
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        {/* Title with fade-in and slide-up effect */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore Africa's Finest Adventures
        </motion.h1>
        
        {/* Subtitle with staggered animation */}
        <motion.p 
          className="text-xl md:text-2xl text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where Journeys Begin, and Memories Last Forever
        </motion.p>
        
        {/* Search box with fade-in and slight bounce */}
        <motion.div 
          className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.2, 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 5
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations or experiences"
              className="w-full py-4 pl-12 pr-4 text-gray-700 focus:outline-none"
            />
            <motion.div 
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.1, 
                repeatType: "reverse" 
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};