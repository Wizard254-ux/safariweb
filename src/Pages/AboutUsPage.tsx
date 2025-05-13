import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


export const AboutUs = () => {
    const navigate=useNavigate()
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const valuesList = [
    { title: "Customer-Centric Service", 
      description: "Prioritizing personalized, responsive, and friendly service to ensure memorable travel experiences." },
    { title: "Integrity and Transparency", 
      description: "Providing honest recommendations, clear pricing, and ethical practices in all dealings." },
    { title: "Passion for Travel", 
      description: "Demonstrating a genuine enthusiasm for exploration, cultures, and creating unforgettable journeys." },
    { title: "Expertise and Knowledge", 
      description: "Offering informed advice and deep destination insight to craft the best itineraries." },
    { title: "Sustainability and Responsibility", 
      description: "Promoting eco-friendly travel and supporting local communities and cultures." },
    { title: "Innovation and Adaptability", 
      description: "Staying ahead with the latest technology and trends to improve customer experience." },
    { title: "Reliability and Trust", 
      description: "Being dependable before, during, and after the trip, ensuring peace of mind for travelers." },
    { title: "Cultural Respect and Inclusion", 
      description: "Embracing diversity and promoting respectful travel across all regions." }
  ];

  return (
     <div>
      <TopBar />
      <Navigation />
    <div className="bg-white min-h-screen">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* About Us Section */}
          <motion.div 
            className="text-center md:text-left mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={sectionVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Welcome to Lynnietravis Adventures</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-4">Where Luxury Meets Discovery</h3>
            <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={textVariant}
            >
              Lynnietravis Adventures is a distinguished tour, travel, and business event agency dedicated to delivering exceptional journeys for discerning travelers. With a passion for excellence and a commitment to detail, we specialize in crafting tailor-made travel experiences for both domestic and international clients.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={textVariant}
            >
              Our expert team blends creativity with professionalism to design bespoke itineraries that go beyond the ordinary. Whether you dream of exploring Africa's untamed wilderness on a private safari, indulging in barefoot luxury along pristine coastlines, or crossing vast deserts under a starlit sky, we curate seamless experiences that reflect your taste, pace, and preferences.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              variants={textVariant}
            >
              We offer a range of exquisite travel styles—from sophisticated mid-range to ultra-luxurious—ensuring every journey is enriched with elegance, comfort, and authenticity. Each trip with Lynnie Travis Adventures is more than a vacation; it's a personal story told through culture, nature, and unforgettable moments.
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              variants={buttonVariant}
              className="md:text-left text-center"
            >
              <button  onClick={()=>navigate('/contact')} className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center mx-auto md:mx-0">
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Why Choose Us Section */}
          <motion.div 
            className="text-center md:text-left mb-16"
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
          
          {/* Our Mission Section */}
          <motion.div 
            className="text-center md:text-left mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={sectionVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.div
              className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              variants={textVariant}
            >
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed italic">
                At Lynnie Travis Adventures our mission is to curate unparalleled, bespoke travel experiences for the discerning traveler. Whether you seek lavish retreats, exhilarating adventures, sustainable escapes, immersive cultural journeys, family getaways, or rejuvenating solo wellness retreats, we meticulously design each experience with sophistication, integrity, and expert knowledge.
              </p>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mt-4 italic">
                With a passion for exceptional travel and an intimate understanding of the world's most exclusive destinations, we offer personalized service that is both transparent and reliable. Our commitment to responsible travel ensures that every journey not only enriches your life but also respects the sanctity of the places you visit. We celebrate cultural diversity, embrace cutting-edge innovation, and honor each traveler's unique path, providing an exceptional level of care and attention to detail throughout every extraordinary adventure.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Our Vision Section */}
          <motion.div 
            className="text-center md:text-left mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={sectionVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            
            <motion.div
              className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              variants={textVariant}
            >
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-semibold italic">
                "To be the world's most trusted and inspiring travel partner—empowering every traveler to explore with confidence, connect meaningfully with the world, and create lasting memories through personalized, sustainable, and enriching journeys across every travel style."
              </p>
            </motion.div>
          </motion.div>
          
          {/* Our Core Values Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={sectionVariant}
          >
            <div className="text-center md:text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto md:mx-0 mb-5"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuesList.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  variants={textVariant}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-xl shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={sectionVariant}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to Experience the Journey of a Lifetime?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Let us craft a personalized travel experience that reflects your unique style and exceeds your expectations.
            </p>
            <button onClick={()=>navigate('/contact')} className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
              Start Your Adventure Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
          <Footer />

    </div>
  );
};

export default AboutUs;