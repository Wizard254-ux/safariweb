import React from 'react';
import { useNavigate } from 'react-router-dom';
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

export const safariExperiences: SafariExperience[] = [
  {
    id: 'maasai-mara-migration',
    title: 'Maasai Mara Migration Safari',
    country: 'Kenya',
    duration: '7 Days',
    image: 'https://images.pexels.com/photos/5521703/pexels-photo-5521703.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Witness the incredible wildebeest migration in Kenya's most famous wildlife reserve. This safari focuses on the northern Serengeti ecosystem and Maasai Mara during migration season.",
    highlights: [
      'Game drives to witness the great migration river crossings',
      'Visit to authentic Maasai village',
      'Luxury tented accommodation',
      'Hot air balloon safari option'
    ],
    price: 'From $2,800 per person'
  },
  {
    id: 'big-five-kruger',
    title: 'Big Five Safari Experience',
    country: 'South Africa',
    duration: '5 Days',
    image: 'https://images.pexels.com/photos/4003655/pexels-photo-4003655.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Search for the iconic Big Five (lion, leopard, elephant, rhino, and buffalo) in South Africa's premier game reserve. This safari combines luxury accommodation with incredible wildlife viewing.",
    highlights: [
      'Daily game drives in open safari vehicles',
      'Night drives to spot nocturnal animals',
      'Bush walks with armed rangers',
      'Luxury lodge accommodation with private plunge pools'
    ],
    price: 'From $3,200 per person'
  },
  {
    id: 'botswana-delta-experience',
    title: 'Okavango Delta Safari',
    country: 'Botswana',
    duration: '8 Days',
    image: 'https://images.pexels.com/photos/31030245/pexels-photo-31030245/free-photo-of-close-up-of-two-hippos-partially-submerged-in-water.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Explore the unique ecosystem of the Okavango Delta, where water and land create a paradise for wildlife. Experience traditional mokoro canoe safaris and walking adventures.',
    highlights: [
      'Mokoro canoe excursions through waterways',
      'Island walking safaris',
      'Game drives in private concessions',
      'Scenic helicopter flight over the delta'
    ],
    price: 'From $4,500 per person'
  }
];
export const BushSafaris: React.FC = () => {
  const navigate=useNavigate()
  const handleSafariClick = (id: string) => {
    navigate(`/Details/${id}/bushSafari`);
    console.log(`Viewing details for ${id}`);
  };


  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Bush Safari Experiences</h2>
        <p className="text-lg text-gray-600">
          Immerse yourself in Africa's incredible wilderness with our carefully selected bush safari experiences.
          From the plains of the Serengeti to the waterways of the Okavango Delta, witness incredible wildlife in their natural habitat.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center w-full max-w-screen-xl mx-auto p-4">
      {safariExperiences.map((safari) => (
        <div
          key={safari.id}
          className="bg-white w-full rounded  min-h-[18rem] shadow overflow-hidden cursor-pointer transform transition hover:scale-105 m-2 max-w-[20rem]"
          onClick={() => handleSafariClick(safari.id)}
        >
          <div className="h-28 overflow-hidden">
            <img
              src={safari.image}
              alt={safari.title}
              className="w-full h-full object-cover"
            />
          </div>
         
          <div className="p-3">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-bold text-gray-800">{safari.title}</h3>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded mb-1">
                  {safari.country}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">
                  {safari.duration}
                </span>
              </div>
            </div>
           
            <p className="text-xs text-gray-600 mb-2">{safari.description}</p>
           
            <div className="flex justify-between items-center">
              <span className="text-gray-800 text-sm font-semibold">{safari.price}</span>
              <button className="bg-yellow-600 text-white text-xs px-2 py-1 rounded hover:bg-yellow-700 transition">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
      
      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Safari Planning Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h4>
            <p className="text-gray-600">
              Different regions have optimal safari seasons. For migrations, plan for July-October. For general wildlife viewing,
              the dry season (June-October) is excellent in most countries.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">What to Pack</h4>
            <p className="text-gray-600">
              Light, neutral-colored clothing, sun protection, binoculars, camera equipment, and any medications you may need.
              Most lodges offer laundry services.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Budget Considerations</h4>
            <p className="text-gray-600">
              Safari costs can vary widely. We offer options from budget camping to ultra-luxury lodges. Contact us to tailor
              an experience that matches your budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};