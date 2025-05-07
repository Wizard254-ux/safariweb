import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AirSafariExperience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

export const AirSafaris: React.FC = () => {
  // In a real application, you'd use react-router-dom for navigation
  // const navigate = useNavigate();
  
  const handleExperienceClick = (id: string) => {
    // In a real application, this would navigate to the detail page
    const navigate=useNavigate()
    navigate(`/Details/${id}/bushSafari`);
    console.log(`Navigating to detail page for ${id}`);
  };

  const airSafariExperiences: AirSafariExperience[] = [
    {
      id: 'masai-mara-helicopter',
      title: 'Masai Mara Helicopter Safari',
      location: 'Masai Mara',
      image: '/api/placeholder/400/250',
      description: 'Witness the spectacular wildlife and landscapes of the Masai Mara from above with our exclusive helicopter safari, offering unparalleled views of the savannah and wildlife.',
      features: [
        '3-hour helicopter safari experience',
        'Champagne bush breakfast',
        'Landing at scenic viewpoints',
        'Professional wildlife photographer guide'
      ],
      price: '$3,250 per person'
    },
    {
      id: 'northern-kenya-air-expedition',
      title: 'Northern Kenya Air Expedition',
      location: 'Samburu, Turkana & Matthews Range',
      image: '/api/placeholder/400/250',
      description: 'Explore Kenya\'s remote northern frontiers by private aircraft, accessing areas rarely seen by tourists including Lake Turkana, the Chalbi Desert, and the Matthews Range.',
      features: [
        '7 nights in luxury wilderness camps',
        'Private aircraft transportation',
        'Cultural encounters with Samburu and Turkana tribes',
        'Full-board accommodation with premium beverages'
      ],
      price: '$5,450 per person'
    },
    {
      id: 'great-rift-balloon',
      title: 'Great Rift Valley Balloon Safari',
      location: 'Nakuru & Naivasha',
      image: '/api/placeholder/400/250',
      description: 'Float silently over the lakes and wildlife of the Great Rift Valley at dawn, witnessing flamingos, hippos, and other wildlife from the perfect vantage point.',
      features: [
        'Hot air balloon safari at sunrise',
        'Bush champagne breakfast',
        'Lake Nakuru National Park game drive',
        'Overnight at luxury lake lodge'
      ],
      price: '$1,950 per person'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenya Air Safaris</h2>
        <p className="text-lg text-gray-600">
          Experience Kenya's breathtaking landscapes and wildlife from a whole new perspective with our exclusive
          air safari experiences. From hot air balloons to helicopters and small aircraft expeditions, these
          aerial adventures offer unforgettable views and access to remote, untouched regions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {airSafariExperiences.map((experience) => (
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
              
              {/* <div>
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
              </div>
               */}
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
        <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Air Safari Experiences</h3>
        <p className="text-gray-600 mb-4">
          Looking for an exclusive aerial adventure? We can arrange private helicopter tours, chartered flights to
          remote destinations, or multi-day flying safaris tailored to your specific interests. Contact our team to
          design your bespoke Kenya air safari.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
          Inquire Now
        </button>
      </div>
    </div>
  );
};