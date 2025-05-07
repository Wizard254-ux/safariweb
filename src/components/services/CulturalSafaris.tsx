import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CulturalExperience {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

export const CulturalSafaris: React.FC = () => {
  // In a real application, you'd use react-router-dom for navigation
  // const navigate = useNavigate();
  
  const handleExperienceClick = (id: string) => {
    // In a real application, this would navigate to the detail page
    const navigate=useNavigate()
    navigate(`/Details/${id}/CulturalSafaris`);
    console.log(`Viewing details for ${id}`);    console.log(`Navigating to detail page for ${id}`);
    alert(`Viewing details for ${id}. In a real app, this would navigate to a detailed page.`);
  };

  const culturalExperiences: CulturalExperience[] = [
    {
      id: 'maasai-cultural-immersion',
      title: 'Maasai Cultural Immersion',
      location: 'Maasai Mara & Loita Hills',
      image: '/api/placeholder/400/250',
      description: 'Experience authentic Maasai culture with a stay in a traditional village. Learn about their customs, participate in daily activities, and gain insight into this iconic community.',
      features: [
        '3 nights in a traditional Maasai village',
        'Guided walks with Maasai warriors',
        'Traditional dance and storytelling evenings',
        'Participation in daily cultural activities'
      ],
      price: '$1,350 per person'
    },
    {
      id: 'samburu-warrior-experience',
      title: 'Samburu Warrior Experience',
      location: 'Samburu County',
      image: '/api/placeholder/400/250',
      description: 'Immerse yourself in the unique culture of the Samburu people of northern Kenya. Learn about their distinctive traditions, colorful adornments, and nomadic lifestyle.',
      features: [
        '4 nights split between luxury camp and community stay',
        'Camel trekking with Samburu guides',
        'Traditional ceremony participation',
        'Visit to local markets and craftspeople'
      ],
      price: '$1,750 per person'
    },
    {
      id: 'luo-and-lake-victoria',
      title: 'Luo Culture & Lake Victoria',
      location: 'Kisumu & Lake Victoria',
      image: '/api/placeholder/400/250',
      description: 'Discover the rich traditions of the Luo people around Lake Victoria. Experience fishing communities, traditional music, and the vibrant culture of Kenya\'s western region.',
      features: [
        '5 nights in lakeside accommodations',
        'Visits to traditional fishing villages',
        'Boat excursion on Lake Victoria',
        'Traditional Luo music and dance performance'
      ],
      price: '$1,550 per person'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenya Cultural Safaris</h2>
        <p className="text-lg text-gray-600">
          Discover the rich and diverse cultural heritage of Kenya with our immersive cultural safari experiences.
          From the iconic Maasai and Samburu warriors to the fishing communities of Lake Victoria, these journeys
          offer authentic interactions and deep insights into Kenya's vibrant traditions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalExperiences.map((experience) => (
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
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {experience.location}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{experience.description}</p>
              
              {/* <div>
                <h4 className="font-semibold text-gray-800 mb-2">Package Includes:</h4>
                <ul className="text-gray-600">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">{experience.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Cultural Experiences</h3>
        <p className="text-gray-600 mb-4">
          Interested in exploring a specific cultural aspect of Kenya? We can arrange specialized cultural
          experiences focused on music, art, cuisine, or specific ethnic communities. Our team can create
          a personalized cultural journey tailogreen to your interests.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Inquire Now
        </button>
      </div>
    </div>
  );
};