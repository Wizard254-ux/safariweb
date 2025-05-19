import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export const OurServices: React.FC = () => {
  // const servicesList = [
  //   "Local & international holidays",
  //   "Holiday packages (Travel packages)",
  //   "Luxury safaris", 
  //   "Budget camping safaris",
  //   "Air safaris",
  //   "Bush Safaris",
  //   "Desert safaris",
  //   "Beach excursions",
  //   "Honeymoon packages",
  //   "Group joining and private safaris",
  //   "Cultural and community safaris",
  //   "Custom safari needs (visa, yellow fever, passport facilitation, Travel insurance)",
  //   "Flight ticketing & Transfers",
  //   "Sports and Golf"
  // ];
  const navigate=useNavigate()

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full bg-gradient-to-br from-green-50 to-yellow-50 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            variants={itemVariant}
          >
            OUR SERVICES
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-yellow-500 mx-auto mb-6"
            variants={itemVariant}
          ></motion.div>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            variants={itemVariant}
          >
            Experience the finest travel adventures with Lynnie Travis Adventures. Our comprehensive range of services ensures unforgettable journeys tailored to your preferences.
          </motion.p>
        </div> */}

        {/* Services Grid */}
        {/* <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariant}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-600"
              variants={itemVariant}
            >
              <div className="flex items-center">
                <div className="text-green-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          variants={itemVariant}
        >
          <button 
          onClick={()=>navigate('/contact')}
          
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us for Booking
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurServices;