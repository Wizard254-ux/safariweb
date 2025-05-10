import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';

// Interface for testimonial data
interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  image: string;
  testimonial: string;
  safariExperience: string;
  featured: boolean;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    location: 'Maasai Mara, Kenya',
    date: 'April 2025',
    rating: 5,
    image: '/api/placeholder/80/80',
    testimonial: 'Our safari in the Maasai Mara exceeded all expectations! The migration was breathtaking, and our guide had an incredible eye for spotting wildlife. We saw all of the Big Five within just two days. The luxury tented camp was the perfect balance of comfort and wilderness experience.',
    safariExperience: 'Maasai Mara Migration Safari',
    featured: true
  },
  {
    id: 'testimonial-2',
    name: 'David & Emma Wilson',
    location: 'Amboseli, Kenya',
    date: 'March 2025',
    rating: 5,
    image: '/api/placeholder/80/80',
    testimonial: 'Watching elephants against the backdrop of Mount Kilimanjaro in Amboseli was a dream come true. The staff at our lodge were incredibly attentive, and our driver-guide was knowledgeable and passionate about wildlife conservation. Unforgettable experience!',
    safariExperience: 'Amboseli Elephant Safari',
    featured: true
  },
  {
    id: 'testimonial-3',
    name: 'Michael Chen',
    location: 'Lake Nakuru, Kenya',
    date: 'February 2025',
    rating: 4,
    image: '/api/placeholder/80/80',
    testimonial: "Lake Nakuru was incredible with thousands of flamingos creating a pink horizon across the water. We also spotted rhinos which was the highlight of our trip. The accommodations were comfortable, though one day was affected by rain. Overall, highly recommended!",
    safariExperience: 'Lake Nakuru Flamingo Safari',
    featured: false
  },
  {
    id: 'testimonial-4',
    name: 'Jessica & Tom Rodriguez',
    location: 'Tsavo East, Kenya',
    date: 'January 2025',
    rating: 5,
    image: '/api/placeholder/80/80',
    testimonial: "Tsavo East's red elephants were a sight to behold! The vastness of the landscape and diversity of wildlife made every game drive exciting. Our guide was exceptional at tracking lions, and we witnessed an incredible hunt. The sundowners overlooking the plains were magical.",
    safariExperience: 'Tsavo Red Elephant Safari',
    featured: true
  },
  {
    id: 'testimonial-5',
    name: 'Robert Ochieng',
    location: 'Samburu, Kenya',
    date: 'March 2025',
    rating: 5,
    image: '/api/placeholder/80/80',
    testimonial: "The unique wildlife in Samburu was incredible! We saw the Samburu Special Five (Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk and beisa oryx) all in one day. The cultural visit to a Samburu village was enlightening and respectful. Highly recommended for those looking for a less crowded safari experience.",
    safariExperience: 'Samburu Special Five Safari',
    featured: false
  },
  {
    id: 'testimonial-6',
    name: 'Aisha & Ibrahim Hassan',
    location: 'Lewa Wildlife Conservancy, Kenya',
    date: 'April 2025',
    rating: 5,
    image: '/api/placeholder/80/80',
    testimonial: "Lewa Wildlife Conservancy offered us the most intimate wildlife encounters we've ever experienced. The conservation work being done is impressive, and we learned so much about rhino protection. The private cottage overlooking the waterhole meant we could watch wildlife right from our veranda. Worth every penny!",
    safariExperience: 'Lewa Conservation Safari',
    featured: true
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

// Rating Stars Component
const RatingStars = ({ rating}:{rating :number}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg 
        key={i}
        className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

// Animated Testimonial Card Component
const TestimonialCard = ({ testimonial, index }:{testimonial:Testimonial,index:number}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className={`bg-white  rounded-lg shadow-lg overflow-hidden ${testimonial.featured ? 'border-2 border-yellow-400' : ''}`}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="p-6">
        <motion.div 
          className="flex items-center mb-4"
          initial={{ x: -20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h3 className="font-bold text-lg">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.location}</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <RatingStars rating={testimonial.rating} />
        </motion.div>
        
        <motion.p 
          className="mt-4 text-gray-700 italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          "{testimonial.testimonial}"
        </motion.p>
        
        <motion.div 
          className="mt-4 flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm text-gray-500">{testimonial.date}</span>
          <span className="text-sm font-medium text-green-600">{testimonial.safariExperience}</span>
        </motion.div>
        
        {testimonial.featured && (
          <motion.div 
            className="mt-3"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Filter type for testimonial filtering
type FilterOption = 'all' | 'featured' | 'five-star';

const TestimonialsPage = () => {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [filtersRef, filtersInView] = useInView({ triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Handle client-side rendering for animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter testimonials based on current filter and search
  const filteredTestimonials = testimonials.filter((testimonial) => {
    // Filter by rating or featured status
    if (filter === 'featured' && !testimonial.featured) return false;
    if (filter === 'five-star' && testimonial.rating < 5) return false;
    
    // Filter by location search
    if (searchLocation && !testimonial.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    
    return true;
  });

  if (!isClient) {
    return null; // Prevents hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />
      
      <div className="max-w-7xl  mx-auto px-4 py-12 pt-4">
        <motion.div 
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center bg-[rgba(100,222,102,0.2)] p-6 mb-12"
        >
          <h1 className="text-4xl  font-bold text-gray-900 mb-4">Customer Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about their unforgettable safari experiences in Kenya.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          ref={filtersRef}
          variants={fadeInVariants}
          initial="hidden"
          animate={filtersInView ? "visible" : "hidden"}
          className="mb-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <motion.button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Testimonials
            </motion.button>
            <motion.button 
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full ${filter === 'featured' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Featured
            </motion.button>
            <motion.button 
              onClick={() => setFilter('five-star')}
              className={`px-4 py-2 rounded-full ${filter === 'five-star' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              5-Star Reviews
            </motion.button>
          </div>
          <motion.div 
            className="w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={filtersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search by location in Kenya..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        {filteredTestimonials.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">No testimonials match your search criteria.</p>
            <motion.button 
              onClick={() => {setFilter('all'); setSearchLocation('');}}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-green-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Safari Experience</h2>
          <p className="text-gray-700 mb-6">
            Have you recently enjoyed one of our safari experiences? We'd love to hear about your adventure!
          </p>
          <motion.button 
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#166534" }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Testimonial
          </motion.button>
        </motion.div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default TestimonialsPage;