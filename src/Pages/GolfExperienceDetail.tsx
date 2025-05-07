import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// In a real app, you would fetch this data from an API
const experienceData = {
  'cape-town-golf': {
    title: 'Cape Town Golf Experience',
    location: 'South Africa',
    rating: 4.8,
    reviews: 24,
    image: '/api/placeholder/1200/600',
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    description: `
      Experience the best golf that Cape Town has to offer with our premium golf package. Set against the backdrop of Table Mountain and the stunning South African coastline, this golf tour combines world-class courses with luxury accommodation and incredible sightseeing opportunities.
      
      Cape Town is renowned for its beautiful golf courses, designed by some of the world's top golf architects. Each course offers unique challenges and breathtaking views, making every round a memorable experience.
    `,
    courses: [
      {
        name: 'Steenberg Golf Club',
        description: "Set in the Constantia Valley winelands, Steenberg is one of Cape Town's premier golf courses with mountain backdrops and challenging water features.",
        highlight: '18-hole championship course designed by Peter Matkovich'
      },
      {
        name: 'Pearl Valley Golf Estate',
        description: 'Located in the Paarl-Franschhoek Valley, Pearl Valley is a Jack Nicklaus signature design surrounded by mountains and vineyards.',
        highlight: "Ranked as one of South Africa's top 5 courses"
      },
      {
        name: 'Clovelly Country Club',
        description: 'Situated between Fish Hoek and Kalk Bay, this picturesque course is known for its rolling fairways and challenging greens.',
        highlight: 'Beautiful coastal views and abundant wildlife'
      }
    ],
    includes: [
      '5 nights luxury accommodation at The Table Bay Hotel',
      '3 rounds of golf at premier courses',
      'Private transfers between hotel, golf courses, and airport',
      'Full-day Cape Winelands tour with lunch',
      'Table Mountain cable car tickets',
      'Daily breakfast'
    ],
    itinerary: [
      {
        day: 'Day 1',
        activities: 'Arrival in Cape Town, transfer to hotel, welcome dinner'
      },
      {
        day: 'Day 2',
        activities: 'Breakfast, golf at Steenberg Golf Club, afternoon at leisure'
      },
      {
        day: 'Day 3',
        activities: 'Breakfast, full-day Cape Winelands tour with lunch'
      },
      {
        day: 'Day 4',
        activities: 'Breakfast, golf at Pearl Valley, afternoon Table Mountain visit'
      },
      {
        day: 'Day 5',
        activities: 'Breakfast, golf at Clovelly Country Club, farewell dinner'
      },
      {
        day: 'Day 6',
        activities: 'Breakfast, check-out, transfer to airport'
      }
    ],
    price: {
      amount: 2800,
      currency: 'USD',
      perPerson: true,
      basedOn: 'double occupancy'
    },
    dates: {
      available: 'Year-round',
      recommended: 'October to April'
    }
  }
};

export const GolfExperienceDetail: React.FC = () => {
  // In a real app, this would come from the URL params
  // const { id } = useParams();
  const id = 'cape-town-golf'; // Hardcoded for demonstration
  
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  
  // In a real app, you would fetch the experience data based on the ID
  const experience = experienceData[id as keyof typeof experienceData];
  
  if (!experience) {
    return <div className="text-center py-12">Experience not found</div>;
  }
  
  const handleBooking = () => {
    setShowEnquiryForm(true);
  };
  
  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Enquiry submitted! We will contact you soon to finalize your booking.');
    setShowEnquiryForm(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{experience.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-2">{experience.location}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{experience.rating}</span>
            <span className="ml-1">({experience.reviews} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="h-96 overflow-hidden rounded-lg mb-4">
              <img 
                src={experience.image} 
                alt={experience.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {experience.gallery.map((img, index) => (
                <div key={index} className="h-24 overflow-hidden rounded">
                  <img 
                    src={img} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'itinerary'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('includes')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'includes'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  What's Included
                </button>
              </nav>
            </div>
            
            <div className="py-6">
              {activeTab === 'overview' && (
                <div>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 whitespace-pre-line">{experience.description}</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Featured Golf Courses</h3>
                  <div className="space-y-4">
                    {experience.courses.map((course, index) => (
                      <div key={index} className="bg-white p-4 border rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">{course.name}</h4>
                        <p className="text-gray-600 mb-2">{course.description}</p>
                        <div className="flex items-center text-green-600">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{course.highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'itinerary' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Trip Itinerary</h3>
                  <div className="space-y-4">
                    {experience.itinerary.map((day, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                            <span className="text-green-600 font-medium">{index + 1}</span>
                          </div>
                          {index < experience.itinerary.length - 1 && (
                            <div className="w-0.5 h-full bg-green-100 mx-auto my-1"></div>
                          )}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">{day.day}</h4>
                          <p className="text-gray-600">{day.activities}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'includes' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {experience.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg border p-6 sticky top-8">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-gray-800">
                  ${experience.price.amount.toLocaleString()}
                </span>
                <span className="text-gray-500">
                  {experience.price.perPerson ? 'per person' : 'total'}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {experience.price.basedOn ? `*Based on ${experience.price.basedOn}` : ''}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel dates</label>
                <div className="relative">
                  <input
                    type="date"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Available: {experience.dates.available}<br />
                  Recommended: {experience.dates.recommended}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'traveler' : 'travelers'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              onClick={handleBooking}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Book Now
            </button>
            
            <div className="mt-4 text-center">
              <button className="text-green-600 text-sm hover:underline">
                Ask a question
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Why book with us?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Local experts & personalized service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Free cancellation up to 30 days before</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Best price guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Book Your Trip</h3>
              <button 
                onClick={() => setShowEnquiryForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmitEnquiry}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea 
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};