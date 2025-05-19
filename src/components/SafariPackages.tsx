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
  },
  {
  id: 'jw-marriott-safari',
  title: 'JW Marriott Masai Mara Lodge Luxury Safari',
  duration: '3 Days',
  location: 'Maasai Mara',
  price: 'From $2,010 per person',
  image: 'https://res.cloudinary.com/dancxhgah/image/upload/v1747116511/Hippos_bgqusv.jpg',
  description: 'Experience a luxury African safari at JW Marriott Masai Mara Lodge. Enjoy luxurious tented suites overlooking the Talek river, each with their own private outdoor jacuzzi tub and deck. This premium flying package includes full board accommodation, game drives, and exclusive activities. Valid from January to July 5th, 2025. Residents: Single $2,580, Sharing $2,010. Non-Residents: Single $3,580, Sharing $3,080.',
  accommodations: [
    'JW Marriott Masai Mara Lodge – Luxury tented suites with private outdoor jacuzzi'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Arrival at Maasai Mara',
      activities: [
        'Arrival at Keekorok airstrip',
        'Transfer to JW Marriott Masai Mara Lodge',
        'Lunch at the lodge',
        'Afternoon game drive with refreshments',
        'Dinner at the lodge'
      ],
      accommodation: 'JW Marriott Masai Mara Lodge',
      meals: 'Lunch, Dinner'
    },
    {
      day: 'Day 2',
      title: 'Full Day at Maasai Mara',
      activities: [
        'Morning game drive with refreshments',
        'Bush meal (breakfast or lunch – weather permitting)',
        'Leisure time at the lodge',
        'Afternoon game drive with refreshments',
        'Sundowners – weather permitting',
        'Dinner at the lodge'
      ],
      accommodation: 'JW Marriott Masai Mara Lodge',
      meals: 'Breakfast, Lunch, Dinner'
    },
    {
      day: 'Day 3',
      title: 'Departure Day',
      activities: [
        'Morning game drive with refreshments',
        'Breakfast at the lodge',
        'Check-out and transfer to Keekorok airstrip',
        'Departure flight'
      ],
      accommodation: '',
      meals: 'Breakfast'
    }
  ],
  inclusions: [
    '2 Nights Accommodation & Meals on Full Board Basis',
    'Select alcoholic and non-alcoholic beverages (except premium drinks)',
    'Bush meals; breakfast or lunch – weather permitting (once during your stay)',
    'Sundowners – weather permitting (once during your stay)',
    'Two shared game drives per day including refreshments',
    'A pair of Vortex Viper binoculars in the room for use',
    'Return airstrip transfers from Keekorok airstrip',
    'Use of the gym and pool, photo studio and experience center',
    'Boules, tree planting, bead making, spear throwing, and archery activities on property',
    'Guided walking tours within the property',
    'Laundry services - 5 items per person per day',
    'Emergency Medical Evacuation Services',
    'All statutory taxes'
  ],
  exclusions: [
    'Flight to and from Maasai Mara',
    'Champagne, premium wines and spirits',
    'Masai Mara Park entrance fee',
    'Spa treatments',
    'Items of personal nature',
    'Gratuities'
  ]
},
{
  "id": "cape-town-getaway",
  "title": "5-Day Cape Town Getaway",
  "duration": "5 Days, 4 Nights",
  "location": "Cape Town, South Africa",
  "price": "From $1,950 per person",
  "image": "https://images.pexels.com/photos/9385207/pexels-photo-9385207.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "Experience the beauty and vibrance of Cape Town with our comprehensive 5-day getaway. From the iconic Table Mountain to the stunning Cape Peninsula and renowned wine regions, this tour offers a perfect introduction to one of Africa's most captivating cities.",
  "accommodations": [
    "Selected hotel accommodations in Cape Town (4 nights)"
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "title": "Arrival in Cape Town & Waterfront Tour",
      "activities": [
        "Meet at JKIA Airport for flight to Cape Town",
        "Transfer to hotel and check-in",
        "Afternoon at leisure",
        "Scenic tour of the V&A Waterfront",
        "Optional nightlife experience"
      ],
      "accommodation": "Hotel in Cape Town",
      "meals": "Dinner"
    },
    {
      "day": "Day 2",
      "title": "City Tour, Table Mountain & Winelands",
      "activities": [
        "Comprehensive city tour including Bo-Kaap, Government Avenue, South African Museum",
        "Table Mountain Aerial Cableway to the summit (1,067m)",
        "Visit to Kirstenbosch National Botanical Gardens",
        "Wine tasting in Stellenbosch or Constantia"
      ],
      "accommodation": "Hotel in Cape Town",
      "meals": "Breakfast, Dinner"
    },
    {
      "day": "Day 3",
      "title": "Cape Peninsula Tour",
      "activities": [
        "Scenic drive along the coast through Hout Bay and Chapman's Peak Drive",
        "Visit Cape Point and the Cape of Good Hope",
        "Light lunch in Simon's Town",
        "Visit the Penguin Colony at Boulders Beach",
        "Evening at leisure or optional nightlife"
      ],
      "accommodation": "Hotel in Cape Town",
      "meals": "Breakfast, Lunch"
    },
    {
      "day": "Day 4",
      "title": "Beach Day & Shopping",
      "activities": [
        "Free day at leisure",
        "Optional beach visit or shopping",
        "Optional sunset cruise"
      ],
      "accommodation": "Hotel in Cape Town",
      "meals": "Breakfast"
    },
    {
      "day": "Day 5",
      "title": "Departure",
      "activities": [
        "Check-out from hotel",
        "Transfer to the airport for return flight to Nairobi"
      ],
      "accommodation": "",
      "meals": "Breakfast"
    }
  ],
  "inclusions": [
    "Return flight tickets",
    "4 nights accommodation",
    "All transfers",
    "Daily breakfast",
    "All entry fees",
    "Table Mountain cable car tickets",
    "Waterfront tour",
    "Sunset cruise",
    "Hop-on Hop-off Red Bus ticket",
    "Cape Peninsula tour (Cape Point, Cape of Good Hope, Hout Bay, Penguin Colony)",
    "Kirstenbosch Botanical Garden visit",
    "Wine tasting tour (Constantia/Stellenbosch)",
    "Guided tour",
    "Photography package (for groups of 15+ people)",
    "minimum of 2 travellers"
  ],
  "exclusions": [
    "Lunch and drinks (except where specified)",
    "Personal items",
    "Optional nightlife expenses"
  ],
},
{
  "id": "mid-luxury-south-africa",
  "title": "6-Day Mid-Luxury South Africa Experience",
  "duration": "6 Days, 5 Nights",
  "location": "Cape Town & Greater Kruger",
  "price": "From $3,980 per person",
  "image": "https://images.pexels.com/photos/6790327/pexels-photo-6790327.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "Experience the perfect balance of elegance and value with our Mid-Luxury South Africa itinerary. Enjoy stylish accommodations in Cape Town, guided tours of iconic landmarks, and an unforgettable Big 5 safari in the Greater Kruger area.",
  "accommodations": [
    "4-5 star hotel in Cape Town (Radisson Blu Hotel Waterfront, Cape Cadogan Boutique Hotel, or Pepperclub Hotel & Spa)",
    "Mid-luxury safari lodge in Greater Kruger (Arathusa Safari Lodge, Kambaku Safari Lodge, or Kapama River Lodge)"
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "title": "Arrival in Cape Town",
      "activities": [
        "Transfer to a centrally located, upscale hotel",
        "Evening: Sunset at Signal Hill or V&A Waterfront dinner"
      ],
      "accommodation": "4-5 star hotel in Cape Town",
      "meals": "Dinner"
    },
    {
      "day": "Day 2",
      "title": "Cape Peninsula Guided Tour",
      "activities": [
        "Full-day tour with a private or small-group guide",
        "Visit Hout Bay (optional Seal Island cruise)",
        "Scenic drive along Chapman's Peak Drive",
        "Explore Cape Point & Cape of Good Hope",
        "Visit Boulders Beach to see African penguins",
        "Lunch at Harbour House Kalk Bay or Two Oceans Restaurant"
      ],
      "accommodation": "4-5 star hotel in Cape Town",
      "meals": "Breakfast, Lunch"
    },
    {
      "day": "Day 3",
      "title": "Table Mountain + City Tour",
      "activities": [
        "Morning cable car to Table Mountain",
        "Explore Bo-Kaap, Company's Garden, Greenmarket Square",
        "Optional Robben Island tour (advance booking required)",
        "Evening fine dining at Gold Restaurant (African experience) or Kloof Street House"
      ],
      "accommodation": "4-5 star hotel in Cape Town",
      "meals": "Breakfast, Dinner"
    },
    {
      "day": "Day 4",
      "title": "Fly to Kruger – Safari Lodge Stay",
      "activities": [
        "Fly to Hoedspruit or Skukuza via Johannesburg",
        "Transfer to safari lodge in Greater Kruger (Sabi Sands, Timbavati, or Kapama)",
        "Evening game drive included"
      ],
      "accommodation": "Mid-luxury safari lodge in Greater Kruger",
      "meals": "Breakfast, Dinner"
    },
    {
      "day": "Day 5",
      "title": "Full Safari Day",
      "activities": [
        "Early game drive: Search for the Big 5 with a ranger & tracker",
        "Afternoon at leisure: Pool, spa, or wildlife viewing from the deck",
        "Evening drive with sundowners in the bush"
      ],
      "accommodation": "Mid-luxury safari lodge in Greater Kruger",
      "meals": "Breakfast, Lunch, Dinner"
    },
    {
      "day": "Day 6",
      "title": "Departure",
      "activities": [
        "Morning drive or bush breakfast",
        "Transfer to airport for flight to Johannesburg, then onward"
      ],
      "accommodation": "",
      "meals": "Breakfast"
    }
  ],
  "inclusions": [
    "5 nights accommodation (3 nights Cape Town, 2 nights safari lodge)",
    "Daily breakfast",
    "Most meals at safari lodges",
    "All guided tours mentioned in the itinerary",
    "All transfers",
    "Game drives with professional rangers and trackers",
    "Domestic flights (Cape Town to Kruger area)"
  ],
  "exclusions": [
    "International airfare",
    "Travel insurance",
    "Optional activities not mentioned in the itinerary",
    "Meals not specified",
    "Gratuities",
    "Personal expenses"
  ]
},
{
  "id": "half-day-nairobi-park-safari",
  "title": "Half-Day Nairobi National Park Safari",
  "duration": "5 Hours",
  "location": "Nairobi, Kenya",
  "price": "From $540 per person, $310 per person sharing",
  "image": "https://res.cloudinary.com/dancxhgah/image/upload/v1747115924/Nairobi_Park_dccbif.jpg",
  "description": "Experience the only national park within a city in the entire world. Located just a stone's throw away from Nairobi's urban center, this unique safari allows you to witness the beauty of African wildlife against the backdrop of a metropolitan skyline. In just a few hours, you'll explore the diverse ecosystems of Nairobi National Park, home to a variety of iconic African species, including lions, giraffes, zebras, and rhinos.",
  "accommodations": [],
  "itinerary": [
    {
      "day": "Day 1",
      "title": "Game Drive & Lunch",
      "activities": [
        "0700hrs: Pick up within Nairobi city or from your hotel",
        "0800hrs - 1200hrs: Game drive in Nairobi National Park",
        "1230hrs - 1400hrs: Lunch",
        "Return to Nairobi"
      ],
      "accommodation": "",
      "meals": "Lunch"
    }
  ],
  "inclusions": [
    "Transport in 4×4 Land Cruiser",
    "Services of a professional English-speaking driver tour guide",
    "Park entrance fees",
    "Pick up and drop off within Nairobi",
    "Lunch",
    "Drinking water"
  ],
  "exclusions": [
    "Tips",
    "Personal items",
    "Any activities not mentioned in the itinerary"
  ]
},
{
  "id": "luxury-south-africa-tour",
  "title": "Luxury 6 Days South Africa Safari & Cape Town Experience",
  "duration": "6 Days",
  "location": "Cape Town & Kruger Region",
  "price": "From $19,280 per person",
  "image": "https://images.pexels.com/photos/18886767/pexels-photo-18886767/free-photo-of-tropical-resort-in-egypt-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "Experience the ultimate in South African luxury with this exclusive 6-day journey combining cosmopolitan Cape Town with an unforgettable private safari. Enjoy VIP services throughout, from helicopter tours over Cape Peninsula to private game drives in premier safari lodges. This premium package includes luxury accommodations, fine dining experiences, and exclusive activities designed for the discerning traveler seeking an unparalleled African adventure. Valid throughout 2025.",
  "accommodations": [
    "The Silo Hotel or Ellerman House - Ultra-luxury boutique hotel in Cape Town",
    "Royal Malewane, Singita, or Cheetah Plains - Exclusive private safari lodge"
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "title": "Arrival in Cape Town – Opulent Welcome",
      "activities": [
        "VIP arrival service at Cape Town International Airport",
        "Private transfer to luxury hotel",
        "Time to settle in and refresh",
        "Private sunset yacht cruise with champagne from the V&A Marina"
      ],
      "accommodation": "5-star boutique hotel in Cape Town",
      "meals": "Welcome Dinner"
    },
    {
      "day": "Day 2",
      "title": "Exclusive Cape Peninsula Helicopter & Chauffeur Tour",
      "activities": [
        "Private helicopter ride over the peninsula to Cape Point",
        "Private chauffeured tour of Boulders Beach and Cape of Good Hope",
        "Scenic drive along Chapman's Peak",
        "Chef's Table experience at a coastal fine-dining restaurant like La Colombe"
      ],
      "accommodation": "5-star boutique hotel in Cape Town",
      "meals": "Breakfast, Lunch, Dinner"
    },
    {
      "day": "Day 3",
      "title": "Table Mountain, Art, Wine & Culture",
      "activities": [
        "Private Table Mountain cable car experience (first class tickets)",
        "Curated art & culture tour of Zeitz MOCAA",
        "Visit to Bo-Kaap and Kirstenbosch Gardens",
        "6-course wine pairing dinner at Greenhouse or FYN"
      ],
      "accommodation": "5-star boutique hotel in Cape Town",
      "meals": "Breakfast, Lunch, Dinner"
    },
    {
      "day": "Day 4",
      "title": "Fly to Private Safari Lodge – Kruger Region",
      "activities": [
        "Charter flight to private airstrip near lodge",
        "Welcome and orientation at safari lodge",
        "Time to settle in and explore lodge facilities",
        "Private sunset game drive with sundowners"
      ],
      "accommodation": "Luxury Safari Lodge",
      "meals": "Breakfast, Lunch, Dinner"
    },
    {
      "day": "Day 5",
      "title": "Full-Day Luxury Safari Experience",
      "activities": [
        "Morning private safari with expert tracker (Big 5 sightings)",
        "Midday spa treatment, private plunge pool, or fine dining lunch",
        "Afternoon private game drive",
        "Exclusive bush dinner or wine tasting in the wild"
      ],
      "accommodation": "Luxury Safari Lodge",
      "meals": "Breakfast, Lunch, Dinner"
    },
    {
      "day": "Day 6",
      "title": "Departure Day",
      "activities": [
        "Optional morning game drive or breakfast in the bush",
        "Luxury transfer to airport for return flight to Johannesburg or Cape Town",
        "VIP lounge access before international departure"
      ],
      "accommodation": "",
      "meals": "Breakfast"
    }
  ],
  "inclusions": [
    "5 Nights Luxury Accommodation (3 nights Cape Town, 2 nights Safari Lodge)",
    "All meals as specified in the itinerary",
    "Private concierge service throughout the trip",
    "VIP arrival and departure services",
    "Private sunset yacht cruise in Cape Town",
    "Private helicopter tour of Cape Peninsula",
    "Private chauffeured tours in Cape Town",
    "First class Table Mountain cable car tickets",
    "Charter flights between Cape Town and safari lodge",
    "Private game drives with expert guides and trackers",
    "Premium wines and beverages during meals",
    "Exclusive bush dinner experience",
    "Spa treatment at safari lodge",
    "All park and conservation fees",
    "All transfers in luxury vehicles",
    "24/7 emergency support"
  ],
  "exclusions": [
    "International flights to and from South Africa",
    "Premium champagnes and spirits (unless specified)",
    "Travel insurance",
    "Personal shopping and souvenirs",
    "Additional activities not mentioned in the itinerary",
    "Gratuities for guides, drivers and lodge staff (recommended)",
    "Visa fees if applicable"
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