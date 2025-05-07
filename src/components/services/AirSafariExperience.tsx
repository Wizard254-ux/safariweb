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
      image: 'https://media.istockphoto.com/id/985665578/photo/patrolling-kenya-park-ranger-helicopter.jpg?b=1&s=612x612&w=0&k=20&c=_bP9AsF0ISlKtthxM4MpXHGVzrfRw-p2F89GbnI7j6k=',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaCta3AHJs-ZdMK3RVDdJ_MN-kmmNsIigqg&s',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzko0PJOBAXeY1zPkCRcAZQppgv-9KPOP8cg&s',
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
      
    <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-screen-xl mx-auto p-4">
  {airSafariExperiences.map((experience) => (
    <div 
      key={experience.id}
      className="bg-white max-w-[20rem] w-full rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 m-2"
      onClick={() => handleExperienceClick(experience.id)}
    >
      <div className="h-36 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold text-gray-800">{experience.title}</h3>
          <span className="bg-yellow-100 text-yellow-800 text-[10px] font-medium px-2 py-0.5 rounded">
            {experience.location}
          </span>
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-3">{experience.description}</p>

        <div className="mt-2 flex justify-between items-center">
          <span className="text-gray-800 text-sm font-semibold">{experience.price}</span>
          <button className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-md hover:bg-yellow-700 transition">
            View
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