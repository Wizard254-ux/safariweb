import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:space-x-8  mx-auto">
          {/* About Us Section */}
          <motion.div 
            className="text-center md:text-left mb-10 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">About Us</h2>
            <div className=" h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Lynnie Travis Adventures is a well established tour, travel and business event agency that 
              provides complete travels, related services and event management services to both domestic 
              and international tourists from all over the world. We design unique tours and safaris to 
              fit all our clients' travel needs and deliver the best outcome from the mid-range luxury to 
              luxury providing a unique opportunity to combine both bush, beach and culture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="md:text-left text-center"
            >
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center mx-auto md:mx-0">
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Why Choose Us Section */}
          <motion.div 
            className=" text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">Why Choose Us</h2>
            <div className=" h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We don't just plan trips—we craft unforgettable experiences. At Lynnie Travis, we're more than 
              a travel agency; we're your personal journey architects. Every adventure is curated with care, 
              tailored to reflect your style, passions and pace.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Whether you're dreaming of a luxury honeymoon, a family escape, a bold solo adventure, or joining 
              a vibrant group expedition, we turn your travel dreams into reality. From wild safaris to tranquil 
              getaways, we make your journey effortless, meaningful, and truly extraordinary.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5 font-medium italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Let us design the journey of a lifetime—just for you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="md:text-left text-center"
            >
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center mx-auto md:mx-0">
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;