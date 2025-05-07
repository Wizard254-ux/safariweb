import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

interface BeachExperience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

export const BeachExcursions: React.FC = () => {
  // In a real application, you'd use react-router-dom for navigation
  // const navigate = useNavigate();
  
  const handleExperienceClick = (id: string) => {
    // In a real application, this would navigate to the detail page
    const navigate=useNavigate()
    navigate(`/Details/${id}/BeachExcursions`);
    console.log(`Navigating to detail page for ${id}`);
    alert(`Viewing details for ${id}. In a real app, this would navigate to a detailed page.`);
  };

  const beachExperiences: BeachExperience[] = [
    {
      id: 'diani-beach-retreat',
      title: 'Diani Beach Luxury Retreat',
      location: 'Diani Beach',
      image: '/api/placeholder/400/250',
      description: 'Experience the pristine white sands and turquoise waters of Diani Beach, one of Kenya\'s most beautiful coastal destinations with world-class water activities.',
      features: [
        '7 nights in oceanfront accommodation',
        'Daily breakfast and dinner',
        'Snorkeling excursion to coral reefs',
        'Sunset dhow cruise with dinner'
      ],
      price: '$1,850 per person'
    },
    {
      id: 'lamu-island-escape',
      title: 'Lamu Island Cultural Escape',
      location: 'Lamu Archipelago',
      image: '/api/placeholder/400/250',
      description: 'Discover the UNESCO World Heritage site of Lamu Old Town while enjoying pristine beaches and the unique Swahili culture of this ancient island.',
      features: [
        '5 nights in traditional Swahili house',
        'Private boat tours of the archipelago',
        'Guided tour of Lamu Old Town',
        'Seafood dinner under the stars'
      ],
      price: '$2,150 per person'
    },
    {
      id: 'watamu-marine-adventure',
      title: 'Watamu Marine Adventure',
      location: 'Watamu',
      image: '/api/placeholder/400/250',
      description: 'Explore the Watamu Marine National Park with its spectacular coral gardens, diverse marine life, and gorgeous beaches perfect for relaxation and water sports.',
      features: [
        '6 nights beachfront accommodation',
        'Marine park snorkeling tour',
        'Dolphin watching excursion',
        'Turtle conservation experience'
      ],
      price: '$1,650 per person'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenya Beach Excursions</h2>
        <p className="text-lg text-gray-600">
          Discover Kenya's stunning coastline along the Indian Ocean with our carefully selected beach experiences.
          From cultural coastal towns to pristine white sand beaches and vibrant marine parks, enjoy the perfect
          blend of relaxation and adventure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beachExperiences.map((experience) => (
          <div 
            key={experience.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => handleExperienceClick(experience.id)}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={experience.image} 
                alt={experience.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {experience.location}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{experience.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Package Includes:</h4>
                <ul className="text-gray-600">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">{experience.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Beach Experiences</h3>
        <p className="text-gray-600 mb-4">
          Looking for a unique coastal adventure? We can customize your perfect beach getaway based on your
          interests, whether it's diving, kitesurfing, cultural exploration, or pure relaxation. Contact our team
          to craft your ideal Kenya coastal experience.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Inquire Now
        </button>
      </div>
    </div>
  );
};