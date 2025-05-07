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
      image: 'https://images.pexels.com/photos/18558205/pexels-photo-18558205/free-photo-of-a-beach-hut-with-a-thatched-roof-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/31963809/pexels-photo-31963809/free-photo-of-aerial-view-of-tropical-beach-with-boats.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/23476888/pexels-photo-23476888/free-photo-of-view-of-people-swimming-in-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    <div className=''>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenya Beach Excursions</h2>
        <p className="text-lg text-gray-600">
          Discover Kenya's stunning coastline along the Indian Ocean with our carefully selected beach experiences.
          From cultural coastal towns to pristine white sand beaches and vibrant marine parks, enjoy the perfect
          blend of relaxation and adventure.
        </p>
      </div>
      

      <div className="flex flex-wrap justify-center items-center w-full max-w-screen-xl mx-auto p-4">
      {beachExperiences.map((experience) => (
        <div 
          key={experience.id}
          className="bg-white w-full rounded shadow overflow-hidden cursor-pointer transform transition hover:scale-105 m-2 max-w-[20rem]"
          onClick={() => handleExperienceClick(experience.id)}
        >
          <div className="h-28 overflow-hidden">
            <img 
              src={experience.image} 
              alt={experience.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-bold text-gray-800">{experience.title}</h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded">
                {experience.location}
              </span>
            </div>
            
            <p className="text-xs text-gray-600 mb-2">{experience.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-800 text-sm font-semibold">{experience.price}</span>
              <button className="bg-yellow-600 text-white text-xs px-2 py-1 rounded hover:bg-yellow-700 transition">
                Details
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
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
          Inquire Now
        </button>
      </div>
    </div>
  );
};