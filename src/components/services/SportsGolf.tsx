import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GolfExperience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

export const golfExperiences: GolfExperience[] = [
  {
    id: 'kenya-highland-golf',
    title: 'Kenya Highland Golf Safari',
    location: 'Nairobi',
    image: 'https://images.pexels.com/photos/2622266/pexels-photo-2622266.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Combine wildlife viewing with golf on scenic courses in the Kenyan highlands. Play at Windsor, Karen Country Club, and Muthaiga Golf Club.',
    features: [
      '7 nights split between Nairobi and Nanyuki',
      '4 rounds of golf',
      'Game drives in Ol Pejeta Conservancy',
      'Full-board accommodation'
    ],
    price: '$2,450 per person'
  },
  {
    id: 'mount-kenya-golf',
    title: 'Mount Kenya Golf Retreat',
    location: 'Mount Kenya',
    image: 'https://images.pexels.com/photos/29442442/pexels-photo-29442442/free-photo-of-scenic-autumn-view-at-ontario-golf-course.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experience golfing with stunning views of Mount Kenya at the Fairmont Mount Kenya Safari Club, one of Africa\'s most prestigious and historic golf courses.',
    features: [
      '5 nights luxury accommodation',
      '3 rounds of golf',
      'Guided nature walks',
      'Spa treatments'
    ],
    price: '$1,950 per person'
  },
  {
    id: 'great-rift-valley-golf',
    title: 'Great Rift Valley Golf Tour',
    location: 'Naivasha',
    image: 'https://images.pexels.com/photos/9986979/pexels-photo-9986979.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Play golf with panoramic views of Lake Naivasha and the Great Rift Valley. Includes rounds at the Great Rift Valley Lodge and Golf Resort and Naivasha courses.',
    features: [
      '6 nights accommodation',
      '4 rounds of golf',
      'Lake Naivasha boat safari',
      'Half-board accommodation'
    ],
    price: '$1,750 per person'
  }
];
export const SportsGolf: React.FC = () => {
  // In a real application, you'd use react-router-dom for navigation
  const navigate = useNavigate();
  
  const handleExperienceClick = (id: string) => {
    // In a real application, this would navigate to the detail page
    navigate(`/Details/${id}/sportsGolf`);
    console.log(`Navigating to detail page for ${id}`);
  };


  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenya Golf Experiences</h2>
        <p className="text-lg text-gray-600">
          Combine your love for adventure and sport with our carefully curated golf packages in Kenya's most 
          scenic locations. From highland courses to lakeside yellows with spectacular views, experience 
          world-class golfing while enjoying the best of Kenyan hospitality and wildlife.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center w-full max-w-screen-xl mx-auto p-4">
  {golfExperiences.map((experience) => (
    <div
      key={experience.id}
      className="bg-white w-full rounded shadow overflow-hidden cursor-pointer transform transition hover:scale-105 m-2 max-w-[20rem] min-h-[18rem]"
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
            View Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      
      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Golf Experiences</h3>
        <p className="text-gray-600 mb-4">
          Looking for something specific? We can create a customized golf itinerary tailored to your preferences,
          skill level, and desired destinations in Kenya. Contact our team to start planning your perfect golf holiday.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
          Inquire Now
        </button>
      </div>
    </div>
  );
};