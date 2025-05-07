import { useEffect, useRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

// Component to handle scroll into view animations
interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimateOnScroll = ({ children, className, delay = 0, once = true }: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: once, amount: 0.2 });
  
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
          transition: { 
            duration: 0.6,
            delay: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


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

export const safariPackages: SafariPackage[] = [
  {
    id: 'bush-beach-safari',
    title: '6-Day Bush & Beach Safari',
    duration: '6 Days',
    location: 'Maasai Mara & Diani',
    price: 'From $3,190 per person',
    image: 'https://images.pexels.com/photos/27742235/pexels-photo-27742235/free-photo-of-a-beach-with-palm-trees-and-benches.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experience the best of both worlds with our Bush & Beach Safari. Begin with thrilling game drives in the world-famous Maasai Mara, then unwind on the pristine beaches of Diani.',
    accommodations: [
      'Basecamp Maasai Mara – Eco-luxury tented camp inside the reserve',
      'Diani Sea Resort – All-inclusive beachfront resort'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Nairobi – Transfer to Maasai Mara',
        activities: [
          'Pick-up from Nairobi (hotel/airport)',
          'Scenic drive or optional flight to Maasai Mara',
          'Afternoon game drive'
        ],
        accommodation: 'Basecamp Maasai Mara',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Full Day Game Drives in Maasai Mara',
        activities: [
          'Explore the Mara in search of the Big Five',
          'Optional visit to a Maasai village'
        ],
        accommodation: 'Basecamp Maasai Mara',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Morning Game Drive – Transfer to Nairobi – Fly to Diani',
        activities: [
          'Early morning game drive',
          'Transfer back to Nairobi',
          'Scheduled flight to Ukunda (Diani Beach)'
        ],
        accommodation: 'Diani Sea Resort',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 4–5',
        title: 'Relax at Diani Beach',
        activities: [
          'Leisure days: beach, pool, optional water sports or day trips (e.g., Wasini Island)'
        ],
        accommodation: 'Diani Sea Resort',
        meals: 'All-inclusive'
      },
      {
        day: 'Day 6',
        title: 'Departure',
        activities: [
          'Transfer to Ukunda Airstrip for flight back to Nairobi',
          'Connect with international flight or onward travel'
        ],
        accommodation: '',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Accommodation (2 nights Mara, 3 nights Diani)',
      'All meals as indicated',
      'All ground and air transfers within Kenya',
      'Game drives in 4x4 Land Cruiser with guide',
      'Park fees and conservation charges',
      'Domestic flights (Nairobi–Ukunda–Nairobi)'
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Optional activities and tips',
      'Visa fees'
    ]
  },
  {
    id: 'private-luxury-safari',
    title: '6-Day Private Luxury Safari',
    duration: '6 Days',
    location: 'Kenya',
    price: 'From $3,650 per person',
    image: '/sarova.png',
    description: 'Embark on a once-in-a-lifetime adventure through Kenya\'s most iconic parks in comfort and style. Experience the majesty of the Maasai Mara, Lake Nakuru, and Amboseli with premium accommodations.',
    accommodations: [
      'Sarova Mara Game Camp – Premium tented camp in Maasai Mara',
      'Sarova Lion Hill Game Lodge – Luxury lodge at Lake Nakuru',
      'Oltukai Lodge – Premium lodge in Amboseli'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi – Maasai Mara National Reserve',
        activities: [
          'Pickup from Nairobi hotel/airport in the morning',
          'Scenic drive to Maasai Mara with a brief stop at the Great Rift Valley viewpoint',
          'Arrive at Sarova Mara Game Camp for lunch and check-in',
          'Afternoon game drive in the Mara, home to the Big Five and the Great Migration'
        ],
        accommodation: 'Sarova Mara Game Camp',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Full Day in Maasai Mara',
        activities: [
          'Early morning game drive to catch predators in action',
          'Return to the camp for breakfast',
          'Optional Hot Air Balloon Safari (additional $620 per person)',
          'Full day game drive with packed lunch in the park',
          'Visit to Mara River or Talek area for river crossings (seasonal)'
        ],
        accommodation: 'Sarova Mara Game Camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Maasai Mara – Lake Nakuru National Park',
        activities: [
          'Early breakfast and check-out',
          'Drive to Lake Nakuru via Narok and Mau Escarpment',
          'Arrive at Sarova Lion Hill Game Lodge in time for lunch',
          'Afternoon game drive in the park, famous for flamingos, rhinos, and Rothschild giraffes'
        ],
        accommodation: 'Sarova Lion Hill Game Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Lake Nakuru – Amboseli National Park',
        activities: [
          'Early breakfast and departure',
          'Long scenic drive through the Great Rift Valley and Nairobi to Amboseli',
          'Arrive at Oltukai Lodge in the afternoon, lunch en route or upon arrival',
          'Evening game drive with Mt. Kilimanjaro as a backdrop'
        ],
        accommodation: 'Oltukai Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Full Day in Amboseli',
        activities: [
          'Early morning game drive to view elephants and big cats in the misty plains',
          'Breakfast at the lodge',
          'Relax or enjoy lodge amenities',
          'Afternoon game drive to explore Amboseli\'s diverse ecosystems'
        ],
        accommodation: 'Oltukai Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Amboseli – Nairobi',
        activities: [
          'Optional early morning game drive',
          'Breakfast at the lodge',
          'Depart Amboseli and drive back to Nairobi',
          'Arrival in Nairobi by afternoon'
        ],
        accommodation: '',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Luxury Transport: Travel in a 4x4 Land Cruiser with dedicated driver guide',
      'Accommodation: 5 Nights at premium lodges',
      'Meals: meals on a full board basis (excluding dinner on the last day)',
      'Park fees: All park fee included',
      'Game drive: Daily game drives in each park',
      'Guide: English speaking driver guide'
    ],
    exclusions: [
      'Last day dinner not included',
      'Last day Accommodation not included',
      'Air safari: Hot Air balloon ride not included ($620 per person)',
      'Maasai village cultural visit ($40 per person)',
      'Tips $20 per person per day'
    ]
  },
  {
    id: 'flying-safari-package',
    title: 'Luxury Flying Safari Package',
    duration: '3 Days',
    location: 'Maasai Mara',
    price: 'From $1,860 per person',
    image: 'https://images.pexels.com/photos/26052413/pexels-photo-26052413/free-photo-of-herd-of-wildebeests-coming-down-the-hillside-into-the-river.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experience the thrill of a flying safari to the Maasai Mara. This premium package includes flights from Nairobi, luxury accommodation at Sentinel Mara Camp, and guided game drives in open 4x4 Land Cruisers.',
    accommodations: [
      'Sentinel Mara Camp – Luxury tented camp in Maasai Mara'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Maasai Mara',
        activities: [
          'Flight from Nairobi to Maasai Mara',
          'Welcome at the airstrip and transfer to camp',
          'Lunch at the camp',
          'Afternoon game drive'
        ],
        accommodation: 'Sentinel Mara Camp',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Full Day in Maasai Mara',
        activities: [
          'Morning and afternoon game drives',
          'Cultural Maasai Village Tour',
          'Optional guided walks',
          'Optional Balloon safari with bush breakfast (USD 580 per person)'
        ],
        accommodation: 'Sentinel Mara Camp',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Maasai Mara to Nairobi',
        activities: [
          'Morning game drive or leisure time',
          'Breakfast at the camp',
          'Flight back to Nairobi'
        ],
        accommodation: '',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Flights from Nairobi and back',
      'Game drives in a shared 4x4 open Land Cruiser Jeep',
      'Accommodation for 2 nights (1 room shared by 2 guests)',
      'Meals on full board',
      'Teas and Coffees',
      'Quality wines & spirits, beers, soft drinks',
      'Cultural Maasai Village Tour',
      'Drinking water during safari',
      'Services of a professional driver guide',
      'Guided walks',
      'Park entry fees'
    ],
    exclusions: [
      'Balloon safari with bush breakfast (USD 580 per guest)'
    ]
  }
];

export const SafariPackagesComponent = () => {
    const navigate = useNavigate();
    
    // Scroll to top on component mount
    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, []);
  
    const handlePackageClick = (id: string) => {
      navigate(`/pkgdetails/${id}/safariPackage`);
    };
  
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
          damping: 15
        }
      },
      hover: {
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      }
    };
  
    return (
      <div className="mt-6 mb-12">
        {/* Header section */}
        <AnimateOnScroll className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Unforgettable Safari Experiences</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the beauty of Africa with our carefully curated safari packages. From thrilling wildlife encounters to relaxing beach getaways, discover the perfect adventure for your travel dreams.
          </p>
        </AnimateOnScroll>
        
        {/* Safari packages grid */}
        <motion.div 
  className="flex flex-wrap justify-center items-center gap-4 w-full max-w-screen-xl mx-auto p-4"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
  {safariPackages.map((safari, _index) => (
    <motion.div 
      key={safari.id}
      className="bg-white max-w-[20rem] w-full rounded-lg overflow-hidden cursor-pointer shadow-lg m-2"
      variants={itemVariants}
      whileHover="hover"
      onClick={() => handlePackageClick(safari.id)}
    >
      <div className="h-36 overflow-hidden relative">
        <img 
          src={safari.image} 
          alt={safari.title} 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute top-2 right-2 bg-yellow-500 text-white font-bold py-0.5 px-2 rounded-full text-xs"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        >
          {safari.duration}
        </motion.div>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold text-gray-800">{safari.title}</h3>
          <div className="flex flex-col items-end">
            <span className="bg-yellow-100 text-yellow-800 text-[10px] font-medium px-2 py-0.5 rounded">
              {safari.location}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-3">{safari.description}</p>
        
        <div className="mt-2 flex justify-between items-center">
          <span className="text-gray-800 text-sm font-semibold">{safari.price}</span>
          <motion.button 
            className="bg-yellow-600 text-white text-xs px-2 py-1 rounded hover:bg-yellow-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* Safari planning tips section */}
        <AnimateOnScroll className="mt-12 bg-gray-100 rounded-lg p-6" delay={0.2}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Safari Planning Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-4 rounded-lg shadow"
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h4>
              <p className="text-gray-600">
                For migrations, plan your safari between July and October. Dry season (June-October) offers excellent wildlife viewing across most regions of Kenya.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow"
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <h4 className="font-semibold text-gray-800 mb-2">What to Pack</h4>
              <p className="text-gray-600">
                Light, neutral-colored clothing, sun protection, binoculars, camera equipment, and any personal medications. Most lodges offer laundry services.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow"
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <h4 className="font-semibold text-gray-800 mb-2">Booking Information</h4>
              <p className="text-gray-600">
                We recommend booking at least 3-6 months in advance, especially for high season. Custom itineraries are available for all budget levels.
              </p>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    );
  };