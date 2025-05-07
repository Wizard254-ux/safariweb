import React, { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { safariExperiences } from '../components/services/BushSafaris';
import { beachExperiences } from '../components/services/BeachExcursions';
import { airSafariExperiences } from '../components/services/AirSafariExperience';
import { culturalExperiences } from '../components/services/CulturalSafaris';
import { golfExperiences } from '../components/services/SportsGolf';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';

// Define the Experience type
interface Experience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

const DetailsPage: React.FC = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  useEffect(() => {
    // Instantly scroll to top without animation
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  // Get the appropriate experience array based on category
  const getExperiencesByCategory = (category: string): Experience[] => {
    switch(category) {
      case 'bushSafari':
        return safariExperiences;
      case 'airSafaris':
        return airSafariExperiences;
      case 'beachExcursions':
        return beachExperiences;
      case 'sportsGolf':
        return golfExperiences;
      case 'culturalSafaris':
        return culturalExperiences;
      default:
        return [];
    }
  };
  
  // Find the selected experience by ID
  const experiences = getExperiencesByCategory(category || '');
  const selectedExperience: Experience | undefined = experiences.find(exp => exp.id === id);
  
  const handleBooking = () => {
    setShowContactForm(!showContactForm);
  };

  // Handle case where experience is not found
  if (!selectedExperience) {
    return (
      <div>
        <TopBar />
        <Navigation />
        <div className="mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Experience Not Found</h1>
          <p>The experience you're looking for does not exist or the category is not available yet.</p>
          <Link to="/" className="text-green-600 underline mt-4 block">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get the appropriate category display name
  const getCategoryDisplayName = (category: string): string => {
    switch(category) {
      case 'bushSafari':
        return 'Bush Safari';
      case 'airSafaris':
        return 'Air Safari';
      case 'beachExcursions':
        return 'Beach Excursion';
      case 'sportsGolf':
        return 'Golf Experience';
      case 'culturalSafaris':
        return 'Cultural Safari';
      default:
        return 'Experience';
    }
  };

  const categoryName = getCategoryDisplayName(category || '');

  return (
    <div>
      <TopBar />
      <Navigation />
      <div className="mx-auto max-w-[50rem] px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col  md:flex-row justify-center items-center">
            {/* Image - full width on mobile, half width on larger screens */}
            <div className="w-full md:w-1/2">
              <img 
                src={selectedExperience.image} 
                alt={selectedExperience.title}
                className="w-full h-72 md:h-80 object-cover rounded-sm"
              />
            </div>
            
            {/* Content - full width on mobile, half width on larger screens */}
            <div className="p-4 md:p-6 w-full md:w-1/2">
              <div className="uppercase tracking-wide text-xs text-green-500 font-semibold">
                {categoryName} • {selectedExperience.location}
              </div>
              <h1 className="mt-1 text-xl md:text-2xl font-bold text-gray-900">
                {selectedExperience.title}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {selectedExperience.description}
              </p>
              
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-900">Features</h2>
                <ul className="mt-1 list-disc pl-5">
                  {selectedExperience.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 mt-1">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <p className="text-xl font-bold text-gray-900">{selectedExperience.price}</p>
              </div>
              
              <button 
                onClick={handleBooking}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
              >
                Contact Organization to Book
              </button>
            </div>
          </div>
        </div>
        
        {showContactForm && (
          <div className="mt-6 bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-bold mb-4">Contact Us to Book This {categoryName}</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-1" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm" 
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm" 
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm" 
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1" htmlFor="date">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm mb-1" htmlFor="message">Additional Information</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm" 
                    placeholder="Tell us about your group size, special requirements, etc."
                  ></textarea>
                </div>
              </div>
              <button 
                type="submit"
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;