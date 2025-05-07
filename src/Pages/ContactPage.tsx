import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { TopBar } from '../components/TopBar';
import Footer from '../components/Footer';

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
    id: 'nairobi',
    name: 'Nairobi Headquarters',
    address: '123 Kenyatta Avenue, Nairobi, Kenya',
    phone: '+254 20 123 4567',
    email: 'info@kenyasafaris.com',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    mapCoordinates: {
      lat: -1.286389,
      lng: 36.817223
    }
  },
  {
    id: 'mombasa',
    name: 'Mombasa Office',
    address: '45 Beach Road, Mombasa, Kenya',
    phone: '+254 41 987 6543',
    email: 'mombasa@kenyasafaris.com',
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
    mapCoordinates: {
      lat: -4.043740,
      lng: 39.658871
    }
  },
  {
    id: 'maasai-mara',
    name: 'Maasai Mara Safari Base',
    address: 'Maasai Mara National Reserve, Narok County, Kenya',
    phone: '+254 71 234 5678',
    email: 'mara@kenyasafaris.com',
    hours: 'Open Daily: 6:00 AM - 6:00 PM',
    mapCoordinates: {
      lat: -1.5000,
      lng: 35.1500
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
    answer: 'Many of our safaris are family-friendly and can be tailored to accommodate children. We recommend safaris for children aged 6 and above, and we can suggest specific lodges and activities that cater well to families with young children.'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-2">Thank You!</h3>
        <p className="text-center text-gray-700 mb-6">
          Your message has been sent successfully. One of our safari specialists will contact you shortly.
        </p>
        <button 
          onClick={onClose}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Social Media Icon Component
const SocialIcon: React.FC<{ icon: string; url: string }> = ({ icon, url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-green-600 transition duration-300"
    >
      <i className={`fab fa-${icon} text-2xl`}></i>
    </a>
  );
};

// Map Placeholder Component
const MapPlaceholder: React.FC<{ location: OfficeLocation }> = ({ location }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden h-64 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 mb-2">Map of {location.name}</div>
          <div className="text-sm text-gray-400">
            Coordinates: {location.mapCoordinates.lat}, {location.mapCoordinates.lng}
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; toggleFAQ: () => void }> = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={toggleFAQ}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
      >
        <span>{faq.question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    // For now, we'll just show the success message
    setFormSubmitted(true);
  };

  // Toggle FAQ open/closed state
  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Get the currently selected location
  const currentLocation = officeLocations.find(loc => loc.id === selectedLocation) || officeLocations[0];

  return (
    <div>
      <TopBar />
      <Navigation />
      
      <div className="mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our safaris? Ready to book your adventure? Our team is here to help you plan the perfect Kenyan safari experience.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="lg:flex gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:w-7/12 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDate" className="block text-gray-700 mb-2">Planned Travel Date</label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="partySize" className="block text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      id="partySize"
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    <label htmlFor="safariType" className="block text-gray-700 mb-2">Interested In</label>
                    <select
                      id="safariType"
                      name="safariType"
                      value={formData.safariType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select</option>
                      <option value="Luxury Safari">Luxury Safari</option>
                      <option value="Budget Safari">Budget Safari</option>
                      <option value="Family Safari">Family Safari</option>
                      <option value="Photography Safari">Photography Safari</option>
                      <option value="Cultural Safari">Cultural Safari</option>
                      <option value="Custom Itinerary">Custom Itinerary</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
              
              {/* Location Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                {officeLocations.map(location => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`py-2 px-4 font-medium ${
                      selectedLocation === location.id 
                        ? 'text-green-600 border-b-2 border-green-600' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {location.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Location Details */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{currentLocation.name}</h3>
                <div className="text-gray-600 mb-4">
                  <p className="mb-1">{currentLocation.address}</p>
                  <p className="mb-1">Phone: {currentLocation.phone}</p>
                  <p className="mb-1">Email: {currentLocation.email}</p>
                  <p>Hours: {currentLocation.hours}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <MapPlaceholder location={currentLocation} />
            {/* Social Media */}
            {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h2>
              <div className="flex space-x-6 mb-4">
                <SocialIcon icon="facebook" url="https://facebook.com" />
                <SocialIcon icon="instagram" url="https://instagram.com" />
                <SocialIcon icon="twitter" url="https://twitter.com" />
                <SocialIcon icon="youtube" url="https://youtube.com" />
                <SocialIcon icon="tripadvisor" url="https://tripadvisor.com" />
              </div>
              <p className="text-gray-600">
                Follow us on social media for the latest safari updates, wildlife sightings, and special offers.
              </p>
            </div> */}
            </div>

          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-700 mb-6">
            For urgent inquiries or last-minute bookings, call our 24/7 safari hotline:
          </p>
          <div className="text-2xl font-bold text-green-600 mb-6">+254 700 123 456</div>
          <p className="text-gray-600">
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