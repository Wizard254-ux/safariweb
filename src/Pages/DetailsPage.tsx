import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { safariExperiences } from '../components/services/BushSafaris';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';
// Define the SafariExperience type (use the existing one from your imports if available)
interface SafariExperience {
  id: string;
  title: string;
  country: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  price: string;
}

const DetailsPage: React.FC = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  console.log(id,category,safariExperiences)
  
  // Find the selected safari experience by ID
  const selectedExperience: SafariExperience | undefined = category === 'bushSafari' ? 
    safariExperiences.find((safari: SafariExperience) => safari.id === id) : 
    undefined;
  
  const handleBooking = () => {
    setShowContactForm(!showContactForm);
  };

  if (!selectedExperience && category === 'bushSafari') {
    return (
      <div className=" mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Experience Not Found</h1>
        <p>The safari experience you're looking for does not exist.</p>
        <Link to="/safaris" className="text-blue-600 underline mt-4 block">Return to Safari Experiences</Link>
      </div>
    );
  }

  if (category !== 'bushSafari') {
    return (
      <div className=" mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Category Not Available</h1>
        <p>Details for the {category} category are not available yet.</p>
        <Link to="/" className="text-green-600 underline mt-4 block">Return to Home</Link>
      </div>
    );
  }

  return (
    <div>
          <TopBar />
          <Navigation />
    <div className=" mx-auto px-4 py-12">
        
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex h-96">
          <div className="md:w-1/2">
            <img 
              src={selectedExperience?.image} 
              alt={selectedExperience?.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              {selectedExperience?.country} • {selectedExperience?.duration}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {selectedExperience?.title}
            </h1>
            <p className="mt-4 text-gray-600">
              {selectedExperience?.description}
            </p>
            
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-900">Highlights</h2>
              <ul className="mt-2 list-disc pl-5">
                {selectedExperience?.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600 mt-1">{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-900">{selectedExperience?.price}</p>
            </div>
            
            <button 
              onClick={handleBooking}
              className="mt-8 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Contact Organization to Book
            </button>
          </div>
        </div>
      </div>
      
      {showContactForm && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us to Book This Safari</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="message">Additional Information</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Tell us about your group size, special requirements, etc."
                ></textarea>
              </div>
            </div>
            <button 
              type="submit"
              className="mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      )}
          </div>
<Footer/>
    </div>
  );
};

export default DetailsPage;