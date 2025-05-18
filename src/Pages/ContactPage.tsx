import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';
// Note: You'll need to install these packages: npm install leaflet @types/leaflet
// Import types only - we'll import the actual library dynamically
import type { Map as LeafletMap } from 'leaflet';

// Interface for office locations
interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

// Interface for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

// Sample office locations
const officeLocations: OfficeLocation[] = [
  {
    id: 'Nairobi',
    name: 'LYNNIE TRAVIS ADVENTURES',
    address: 'UNIAFRIC HOUSE KOINANGE STREET',
    phone: '‪+254 759491995‬',
    email: 'Info@lynnietravis-adventuers.com',
    hours: 'Monday - Friday: 8:30 AM - 5:00 PM',
    mapCoordinates: {
      lat: -1.28264,
      lng: 36.81759
    }
  }
];

// Sample FAQs
const faqs: FAQ[] = [
  {
    question: 'What is the best time of year to visit Kenya for a safari?',
    answer: 'The best time for wildlife viewing in Kenya is during the dry seasons from January to March and July to October. The Great Migration in Maasai Mara typically happens between July and October. However, each season offers different experiences, and we can help you plan according to your interests.'
  },
  {
    question: 'How far in advance should I book my safari?',
    answer: 'We recommend booking your safari at least 6-12 months in advance, especially if you plan to visit during peak season (July-October) or if you\'re interested in specific luxury accommodations which tend to fill up quickly.'
  },
  {
    question: 'What vaccinations do I need for Kenya?',
    answer: 'Travelers to Kenya typically need vaccinations for Hepatitis A and B, Typhoid, Yellow Fever, and antimalarial medication. We recommend consulting with a travel medicine specialist at least 4-6 weeks before your trip for the most up-to-date requirements and recommendations.'
  },
  {
    question: 'What should I pack for a safari in Kenya?',
    answer: 'Essential items include lightweight, neutral-colored clothing, a good hat, sunglasses, sunscreen, insect repellent, comfortable walking shoes, a camera with extra batteries, and binoculars. We provide a detailed packing list upon booking.'
  },
  {
    question: 'Are your safaris suitable for children?',
    answer: 'Our safaris are family-friendly and can be tailored to accommodate children. We recommend safaris for children aged 3 and above, and we can suggest specific lodges and activities that cater well to families with young children.'
  }
];

// Form state interface
interface FormState {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  partySize: string;
  safariType: string;
  message: string;
}

// Success Message Component
const SuccessMessage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-2">
        <div className="flex justify-center mb-3">
          <div className="bg-green-100 p-2 rounded-full">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold text-center mb-2">Thank You!</h3>
        <p className="text-center text-gray-700 text-sm mb-4">
          Your message has been sent successfully. One of our safari specialists will contact you shortly.
        </p>
        <button 
          onClick={onClose}
          className="w-full py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Map Options Component
const MapOptions: React.FC<{ location: OfficeLocation }> = ({ location }) => {
  // Function to open in Google Maps
  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${location.mapCoordinates.lat},${location.mapCoordinates.lng}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };
  
  // Function to open in Apple Maps (for iOS devices)
  const openInAppleMaps = () => {
    const appleMapsUrl = `https://maps.apple.com/?q=${location.name}&ll=${location.mapCoordinates.lat},${location.mapCoordinates.lng}`;
    window.open(appleMapsUrl, '_blank', 'noopener,noreferrer');
  };
  
  // Function to open in Waze
  const openInWaze = () => {
    const wazeUrl = `https://waze.com/ul?ll=${location.mapCoordinates.lat},${location.mapCoordinates.lng}&navigate=yes`;
    window.open(wazeUrl, '_blank', 'noopener,noreferrer');
  };
  
  // Detect if user is on iOS
  const isIOS = () => {
    if (typeof window !== 'undefined') {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    }
    return false;
  };

  return (
    <div className="mt-4">
      <h4 className="font-medium text-gray-700 text-sm mb-2">View this location:</h4>
      <div className="flex flex-wrap gap-2">
        {/* Google Maps Button */}
        <button 
          onClick={openInGoogleMaps}
          className="inline-flex items-center px-2 py-1 bg-green-50 text-green-600 rounded-md hover:bg-green-100 transition duration-300 text-xs"
        >
          <svg 
            className="w-3 h-3 mr-1" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Google Maps
        </button>
        
        {/* Apple Maps Button (iOS only) */}
        {isIOS() && (
          <button 
            onClick={openInAppleMaps}
            className="inline-flex items-center px-2 py-1 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition duration-300 text-xs"
          >
            <svg 
              className="w-3 h-3 mr-1" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 8l-4 4h3v4h2v-4h3z"/>
            </svg>
            Apple Maps
          </button>
        )}
        
        {/* Waze Button */}
        <button 
          onClick={openInWaze}
          className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition duration-300 text-xs"
        >
          <svg 
            className="w-3 h-3 mr-1" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41z"/>
            <path d="M14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
          </svg>
          Waze
        </button>
        
        {/* Get Directions Button */}
        <a 
          href={`https://www.google.com/maps/dir/Current+Location/${location.mapCoordinates.lat},${location.mapCoordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md hover:bg-yellow-100 transition duration-300 text-xs"
        >
          <svg 
            className="w-3 h-3 mr-1" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
};

// Map Component using Leaflet with useRef
const MapComponent: React.FC<{ location: OfficeLocation }> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // Only run this on the client side, not during server rendering
    if (typeof window !== 'undefined' && mapRef.current) {
      // We'll use a dynamic import with require to make TypeScript happy
      const initMap = async () => {
        try {
          // Dynamic import of Leaflet
          const L = await import('leaflet');
          
          // Clean up previous map instance if it exists
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
          }
          
          // Create a new map instance
          if (mapRef.current) {
            mapInstanceRef.current = L.map(mapRef.current).setView(
            [location.mapCoordinates.lat, location.mapCoordinates.lng], 
            13
          );
          
          // Add the OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          }).addTo(mapInstanceRef.current);
          
          // Add a marker for the location
          L.marker([location.mapCoordinates.lat, location.mapCoordinates.lng])
            .addTo(mapInstanceRef.current)
            .bindPopup(`<b>${location.name}</b><br>${location.address}`)
            .openPopup();
        }
        } catch (error) {
          console.error("Failed to load map:", error);
        }
      };
      
      // Initialize the map
      initMap();
    }
    
    // Cleanup function to remove map when component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [location]); // Re-run when location changes

  return <div ref={mapRef} className="h-56 rounded-lg overflow-hidden"></div>;
};

// Leaflet CSS Import Component
const LeafletCSS: React.FC = () => {
  useEffect(() => {
    // Add Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(link);
    
    // Clean up
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return null;
};

// FAQ Item Component
const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; toggleFAQ: () => void }> = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b border-gray-200 py-3">
      <button 
        onClick={toggleFAQ}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none text-sm"
      >
        <span>{faq.question}</span>
        <svg 
          className={`w-4 h-4 text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-xs sm:text-sm">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const ContactUsPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(officeLocations[0].id);
  const [openFAQs, setOpenFAQs] = useState<Record<number, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    partySize: '',
    safariType: '',
    message: ''
  });

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send the form data to your backend endpoint
      const response = await fetch('https://missionsys-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Send to office email
          emailTo: currentLocation.email
        }),
      });

      if (response.ok) {
        console.log('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelDate: '',
          partySize: '',
          safariType: '',
          message: ''
        });
        setFormSubmitted(true);
      } else {
        console.error('Failed to send message');
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Toggle FAQ open/closed state
  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Get the currently selected location
  const currentLocation = officeLocations.find(loc => loc.id === selectedLocation) || officeLocations[0];

  return (
    <div>
      <LeafletCSS />
      <TopBar />
      <Navigation />
      
      <div className="mx-auto px-2 sm:px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="text-center bg-[rgba(100,222,102,0.2)] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Contact Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our safaris? Ready to book your adventure? Our team is here to help you plan the perfect Kenyan safari experience.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="lg:flex gap-6 mb-8 sm:mb-12">
          {/* Contact Form */}
          <div className="lg:w-7/12 mb-6 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDate" className="block text-gray-700 text-sm mb-1">Planned Travel Date</label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="partySize" className="block text-gray-700 text-sm mb-1">Number of Travelers</label>
                    <select
                      id="partySize"
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="9+">9+ People</option>
                    </select>
                  </div>
                 <div>
              <label htmlFor="safariType" className="block text-gray-700 text-sm mb-1">Interested In</label>
              <div className="relative">
                <select
                  id="safariType"
                  name="safariType"
                  value={formData.safariType}
                  onChange={handleInputChange}
                   className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none text-ellipsis bg-white"
                  style={{paddingRight: '2.5rem'}}
                >
                  <option value="">Select</option>
                  <option value="Local & international holidays">Local & international holidays</option>
                  <option value="Holiday packages (Travel packages)">Holiday packages (Travel packages)</option>
                  <option value="Luxury safaris">Luxury safaris</option>
                  <option value="Budget camping safaris">Budget camping safaris</option>
                  <option value="Air safaris">Air safaris</option>
                  <option value="Bush Safaris">Bush Safaris</option>
                  <option value="Desert safaris">Desert safaris</option>
                  <option value="Beach excursions">Beach excursions</option>
                  <option value="Honeymoon packages">Honeymoon packages</option>
                  <option value="Group joining and private safaris">Group joining and private safaris</option>
                  <option value="Cultural and community safaris">Cultural and community safaris</option>
                  <option value="Custom safari needs (visa, yellow fever, passport facilitation, Travel insurance)">
                    Custom safari needs (visa, yellow fever, passport facilitation, Travel insurance)
                  </option>
                  <option value="Flight ticketing & Transfers">Flight ticketing & Transfers</option>
                  <option value="Sports and Golf">Sports and Golf</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
                              </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Offices</h2>
              
              {/* Location Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                {officeLocations.map(location => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`py-1 px-3 text-sm font-medium ${
                      selectedLocation === location.id 
                        ? 'text-green-600 border-b-2 border-green-600' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {location.id.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Location Details */}
              <div className="mb-4">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                  {currentLocation.name}
                </h3>
                <div className="text-gray-600 mb-3 text-xs sm:text-sm">
                  <p className="mb-1">{currentLocation.address}</p>
                  <p className="mb-1">Phone: {currentLocation.phone}</p>
                  <p className="mb-1">Email: {currentLocation.email}</p>
                  <p>Hours: {currentLocation.hours}</p>
                </div>
              </div>

              {/* Interactive Map */}
              <MapComponent location={currentLocation} />
              
              {/* Map Options */}
              <MapOptions location={currentLocation} />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                isOpen={!!openFAQs[index]} 
                toggleFAQ={() => toggleFAQ(index)} 
              />
            ))}
          </div>
        </div>

        {/* Emergency Contact CTA */}
        <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
            For urgent inquiries or last-minute bookings, call our 24/7 safari hotline:
          </p>
          <div className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">
            ‪+254 759491995‬
          </div>
          <div className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">
            ‪Email: lynnietravisadventures.deals@gmail.com
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">
            Our team is available around the clock to assist with emergency safari arrangements or urgent questions.
          </p>
        </div>
      </div>

      {/* Success Message Modal */}
      {formSubmitted && (
        <SuccessMessage onClose={() => setFormSubmitted(false)} />
      )}

      <Footer />
    </div>
  );
};

export default ContactUsPage;