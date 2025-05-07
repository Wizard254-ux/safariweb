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

export const SportsGolf: React.FC = () => {
  // In a real application, you'd use react-router-dom for navigation
  // const navigate = useNavigate();
  
  const handleExperienceClick = (id: string) => {
    // In a real application, this would navigate to the detail page
    const navigate=useNavigate()
    navigate(`/Details/${id}/SportsGolf`);
    console.log(`Navigating to detail page for ${id}`);
    alert(`Viewing details for ${id}. In a real app, this would navigate to a detailed page.`);
  };

  const golfExperiences: GolfExperience[] = [
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {golfExperiences.map((experience) => (
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
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {experience.location}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{experience.description}</p>
{/*               
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Package Includes:</h4>
                <ul className="text-gray-600">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">{experience.price}</span>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
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